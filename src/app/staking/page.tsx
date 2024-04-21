"use client";

import Image from "next/image";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useContext, useEffect, useState} from "react";
import {DialogContext} from "@/components/context/DialogContext";
import SimpleDialog from "@/components/SimpleDialog";
import {TableRow} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Navbar from "@/components/Navbar";
import {StyledTableCell, StyledTableRow} from "@/utils/style";
import {getEarningInfo} from "@/api/earning";
import {useCurrentAccount} from "@mysten/dapp-kit";
import {message} from "antd";
import {formatNumberWithCommas} from "@/utils";
import './styles.css';
import Link from "next/link";

const data = [
    {
        imageUrl: "mining/data1.svg",
        title: "SUI staking club market cap",
        price: "142.16 M",
    },
    {
        imageUrl: "mining/data2.svg",
        title: "SUI staking club prediction event",
        price: "789,544",
    },
    {
        imageUrl: "mining/data3.svg",
        title: "SUI staking club fee",
        price: "875,452",
    },
];

const cards = [
    {
        imageUrl: "mining/card1.svg",
        descriptions: "12 hrs SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_0 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_0 || "",
    },
    {
        imageUrl: "mining/card2.svg",
        descriptions: "48 hrs SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_1 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_1 || "",
    },
    {
        imageUrl: "mining/card3.svg",
        descriptions: "7 days SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_2 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_2 || "",
    },
    {
        imageUrl: "mining/card4.svg",
        descriptions: "30 days SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_3 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_3 || "",
    },
    {
        imageUrl: "mining/card5.svg",
        descriptions: "60 days SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_4 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_4 || "",
    },
    {
        imageUrl: "mining/card6.svg",
        descriptions: "90 days SUI",
        minerAddress: process.env.NEXT_PUBLIC_RECIEVER_ADDRESS_5 || "",
        minimum: process.env.NEXT_PUBLIC_MINIMUM_5 || "",
    },
];

const percentageRanges = [
    {
        min: 110,
        max: 120,
    },
    {
        min: 120,
        max: 130,
    },
    {
        min: 130,
        max: 160,
    },
    {
        min: 200,
        max: 250,
    },
    {
        min: 250,
        max: 300,
    },
    {
        min: 300,
        max: 500,
    },
];

const createData = (
    name: string,
    calories: string,
    fat: string,
) => {
    return {name, calories, fat};
}

const rows = [
    createData(
        '12hrs',
        `${formatNumberWithCommas(cards[0].minimum)}--${formatNumberWithCommas(cards[1].minimum)}`,
        `${percentageRanges[0].min}% - ${percentageRanges[0].max}%`
    ),
    createData(
        '48hrs',
        `${formatNumberWithCommas(cards[1].minimum)}--${formatNumberWithCommas(cards[2].minimum)}`,
        `${percentageRanges[1].min}% - ${percentageRanges[1].max}%`
    ),
    createData(
        '7days',
        `${formatNumberWithCommas(cards[2].minimum)}--${formatNumberWithCommas(cards[3].minimum)}`,
        `${percentageRanges[2].min}% - ${percentageRanges[2].max}%`
    ),
    createData(
        '30days',
        `${formatNumberWithCommas(cards[3].minimum)}--${formatNumberWithCommas(cards[4].minimum)}`,
        `${percentageRanges[3].min}% - ${percentageRanges[3].max}%`
    ),
    createData(
        '60days',
        `${formatNumberWithCommas(cards[4].minimum)}--${formatNumberWithCommas(cards[5].minimum)}`,
        `${percentageRanges[4].min}% - ${percentageRanges[4].max}%`
    ),
    createData(
        '90days',
        `>50,000`,
        `${percentageRanges[5].min}% - ${percentageRanges[5].max}%`
    ),
];

export default function Mining() {

    const [messageApi, contextHolder] = message.useMessage();
    const account = useCurrentAccount();
    const {
        setOpen,
        setExpectEarning,
        setAccrueEarning,
        setMinerAddress,
        setMinimum
    } = useContext(DialogContext);

    const [percentage, setPercentage] = useState<Array<number>>([
        percentageRanges[0].min,
        percentageRanges[1].min,
        percentageRanges[2].min,
        percentageRanges[3].min,
        percentageRanges[4].min,
        percentageRanges[5].min
    ]);

    const handleCardOnClick = async (index: number) => {

        const {minerAddress, minimum} = cards[index];

        setMinerAddress(minerAddress);
        setMinimum(minimum);
        setOpen(true);

        try {
            const result = await getEarningInfo(
                account?.address || "",
                minerAddress
            )
            // @ts-ignore
            setExpectEarning(result?.expect_earning.toString());
            // @ts-ignore
            setAccrueEarning(result?.accrue_earning.toString());
        } catch (error) {
            messageApi.error("Failed to get profit information");
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newValues = percentageRanges.map(range => {
                return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
            });
            setPercentage(newValues);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main className="min-h-screen w-full">
                <div className="md:bg-[url('/mining/bg.svg')] bg-center bg-no-repeat pb-5">
                    <Navbar/>
                    <div className="md:mx-20 pt-10 md:mt-20 text-white">
                        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:justify-items-center mx-7 md:my-10">
                            {data && data.map((item, index) => (
                                <div className="flex flex-row lg:flex-row items-start mb-5 gap-2"
                                     key={index.toString()}>
                                    <div>
                                        <Image src={item.imageUrl} alt="cardImage" width="50" height="50"/>
                                    </div>
                                    <div>
                                        <div className="text-sm my-auto">{item.title}</div>
                                        <div className="flex">
                                            <div className="text-2xl font-bold my-auto">${item.price}</div>
                                            <div className="flex justify-between items-end text-base ml-1">
                                                <div>USD</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <div className="bg-[#131313] md:mx-10 pb-5 md:mb-10 rounded-2xl">
                        <div className="px-5 xl:px-48 py-5 md:py-10">
                            <div
                                className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 justify-items-center">
                                {cards && cards.map((item, index) => (
                                    <Card
                                        key={index.toString()}
                                        sx={{
                                            height: "auto", // 使用自适应高度
                                            width: "14rem", // 固定宽度为 14rem
                                            background: "#262626",
                                            borderRadius: "20px",
                                            '@media (max-width: 767px)': { // 在小于 768px 的屏幕尺寸下生效
                                                width: "9.5rem", // 将宽度调整为 7rem
                                            },
                                        }}
                                        onClick={() => handleCardOnClick(index)}
                                    >
                                        <CardContent sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#1f1f1f'
                                        }}>
                                            <Image src={item.imageUrl} alt="cardImage" width="90" height="90"/>
                                            <Typography variant="body2" align="center" sx={{
                                                color: "#ffffff"
                                            }}>
                                                {item?.descriptions}
                                            </Typography>
                                            <Typography variant="body2" align="center" sx={{
                                                color: "#ffffff"
                                            }}>
                                                Mining Machine
                                            </Typography>
                                            <div
                                                className="flex order-2 border-[#2a2a2a] bg-[#2a2a2a] rounded-md px-2 py-1 w-24">
                                                <div className="text-[#949494] m-auto">
                                                    {
                                                        (
                                                            percentage &&
                                                            percentage.length >= index - 1
                                                        )
                                                            ? `${percentage[index]}%`
                                                            : '---'
                                                    }
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-5 md:mx-20 gap-8">
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left">Period</StyledTableCell>
                                    <StyledTableCell align="left">Amount (SUl)</StyledTableCell>
                                    <StyledTableCell align="left">Yield Farming Return</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="flex flex-col text-white gap-6">
                            <div className="text-title-color font-bold text-xl lg:text-start md:text-2xl lg:text-3xl">
                                Instructions for SUI Staking
                            </div>
                            <div>Welcome to the Sui Arca Staking program! Our mission is to foster a thriving Sui Arca
                                community. Before participating in any staking period, please review the following
                                instructions:
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="leading-loose">
                                    <span>
                                        1. Understanding Yield Farming:
                                    </span>
                                    <span className="text-[#474747]">
                                        Yield Farming is an investment strategy with inherent
                                        risks and
                                        volatility. It involves staking or lending cryptocurrency assets on
                                        decentralized
                                        finance (DeFi)
                                        platforms to potentially earn higher returns.
                                    </span>
                                </div>
                                <div className="leading-loose">
                                    <span>2. Yield Farming Return: </span>
                                    <span className="text-[#474747]">
                                        The Yield Farming Return for each period is calculated based
                                        on an
                                        annual investment return over 365 days.
                                    </span>
                                </div>
                                <div className="leading-loose">
                                    <span>3. Participation Limitations: </span>
                                    <span className="text-[#474747]">
                                        To encourage broad community participation, each address
                                        is
                                        limited to staking once per period.
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="leading-loose">
                                        <span>4. Learn More About SUI: </span>
                                        <span className="text-[#474747]">For additional information about SUI, please visit:</span>
                                    </div>
                                    <div>
                                        <Link href="https://coinmarketcap.com/currencies/sui/">
                                            · CoinMarketCap: SUI
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="https://docs.sui.io">
                                            · SUI Documentation: SUI Documentation
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="leading-loose">
                                        <span>5. Contact Us: </span>
                                        <span className="text-[#474747]">If you have any questions or need assistance, please contact us</span>
                                    </div>
                                    <div>
                                        Email: suiarcanft@gmail.com
                                    </div>
                                    <div>
                                        Whatsapp: +1(365)897-4103
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <SimpleDialog/>
            {contextHolder}
        </>
    );
}
