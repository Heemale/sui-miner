"use client";

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {useContext} from "react";
import {DialogContext} from "@/components/context/DialogContext";
import {OutlinedInput} from "@mui/material";
import {TransactionBlock} from "@mysten/sui.js/transactions";
import {useCurrentAccount, useSignAndExecuteTransactionBlock} from "@mysten/dapp-kit";
import {bigLt, smallToBig} from "@/utils/web3";
import BigNumber from "bignumber.js";
import {message} from "antd";
import {suiClient} from "@/utils/rpc";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const checkInput = (from: string, max: string | null, min: string | null): string => {
    const fromBN = new BigNumber(from);
    if (fromBN.isNaN()) {
        throw new Error('Invalid data');
    } else if (max && fromBN.gt(max)) {
        throw new Error(`Limit amount <= ${max}`);
    } else if (min && fromBN.lt(min)) {
        throw new Error(`Limit amount >= ${min}`);
    } else {
        return fromBN.toFixed();
    }
}

const SimpleDialog = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const account = useCurrentAccount();
    const {mutate: signAndExecute} = useSignAndExecuteTransactionBlock();

    const {
        open,
        expectEarning,
        accrueEarning,
        minerAddress,
        minimum,
        setOpen,
        setExpectEarning,
        setAccrueEarning,
        setMinerAddress,
        setMinimum
    } = useContext(DialogContext);

    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = React.useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    const handleClose = () => {
        setInputValue('');
        setExpectEarning('');
        setAccrueEarning('');
        setMinerAddress('');
        setMinimum('');
        setOpen(false);
    };

    const handleBuy = async () => {

        if (!account) {
            messageApi.info("Please connect your wallet");
            return;
        }

        try {
            checkInput(inputValue, null, minimum);

            // 获取余额
            const {totalBalance: balance} = await suiClient.getBalance({
                owner: account.address,
                coinType: "0x2::sui::SUI"
            });

            const amount = smallToBig(inputValue);

            // 判断余额是否足够
            if (bigLt(balance, amount)) {
                // 余额不足
                messageApi.error("Insufficient balance");
                return;
            }

            const txb = new TransactionBlock();

            const [coin] = txb.splitCoins(txb.gas, [txb.pure(amount)]);

            txb.transferObjects([coin], txb.pure(minerAddress));

            setLoading(true);

            signAndExecute(
                {
                    transactionBlock: txb,
                    options: {
                        showEffects: true,
                        showObjectChanges: true,
                    },
                },
                {
                    onSuccess: (tx: any) => {
                        setLoading(false);
                        messageApi.info("success");
                    },
                    onError: (error) => {
                        setLoading(false);
                        if (error.toString().includes("Balance of gas object")) {
                            // gas不足
                            messageApi.error("Not enough gas");
                        } else if (error.toString().includes("Rejected from user")) {
                            // 拒绝签名
                            messageApi.error("Rejected from user");
                        } else {
                            // 其他异常
                            messageApi.error("Transaction execution failed");
                            console.error('error 2 :', error.message);
                        }
                    }
                },
            );
        } catch (error: any) {
            messageApi.error(error?.message);
            console.error('error 1 :', error.message);
            return;
        }
    }

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            PaperProps={{
                style: {
                    width: '95vw',
                    height: '64vh',
                    maxWidth: '500px',
                    maxHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: "#262626",
                    borderRadius: "20px",
                    marginLeft: "2px",
                    marginRight: "2px",
                },
            }}
        >
            <div className="flex flex-col gap-4 mx-4">
                <div className="text-white font-bold">My earnings</div>
                <div className="flex justify-between text-white">
                    <div className="text-[#909090]">Expected profit:</div>
                    <div className="text-[#909090]">{expectEarning === "" ? "---" : expectEarning}</div>
                </div>
                <div className="flex justify-between text-white">
                    <div className="text-[#909090]">Cumulative profit:</div>
                    <div className="text-[#909090]">{accrueEarning === "" ? "---" : accrueEarning}</div>
                </div>
                <div className="text-white font-bold">
                    Add new purchase
                </div>
                <div className="text-[#909090]">
                    purchasing price:
                </div>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    aria-describedby="outlined-weight-helper-text"
                    // startAdornment={
                    //     <InputAdornment position="start">
                    //         <div className="text-white">
                    //             Limit amount {'<='} {minimum}
                    //         </div>
                    //     </InputAdornment>
                    // }
                    placeholder={`Limit Amount >= ${minimum} sui`}
                    sx={{
                        background: "#2b2b2b",
                        color: "#ffffff",
                    }}
                    color="secondary"
                    value={inputValue} // 使用输入框的值作为value属性的值
                    onChange={handleInputChange} // 处理输入框值的变化
                />
                <div className="m-auto">
                    <Button variant="contained" color="secondary" onClick={handleBuy} sx={{
                        background: 'linear-gradient(45deg, #705bfb, #9945fd, #c52efe)',
                        borderRadius: 2,
                        border: 0,
                        color: 'white',
                        height: '3.2rem',
                        padding: '0 30px',
                        boxShadow: '0 3px 5px 2px rgba(105, 81, 216, .3)',
                        width: '6rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'none', // 禁用文字转换为大写
                    }}>
                        BUY
                    </Button>
                </div>
            </div>
            {contextHolder}
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
                // onClick={handleClose}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </Dialog>
    );
}

export default SimpleDialog;