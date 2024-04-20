"use client"

import React, {createContext, FC, ReactNode, useState} from "react";

export interface DialogContextType {
    value: number,
    open: boolean,
    expectEarning: string,
    accrueEarning: string,
    minerAddress: string,
    minimum: string,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setExpectEarning: React.Dispatch<React.SetStateAction<string>>,
    setAccrueEarning: React.Dispatch<React.SetStateAction<string>>,
    setMinerAddress: React.Dispatch<React.SetStateAction<string>>,
    setMinimum: React.Dispatch<React.SetStateAction<string>>,
}

export const DialogContext = createContext<DialogContextType>({
    value: 0,
    open: false,
    expectEarning: "",
    accrueEarning: "",
    minerAddress: "",
    minimum: "",
    setValue: () => {
    },
    setOpen: () => {
    },
    setExpectEarning: () => {
    },
    setAccrueEarning: () => {
    },
    setMinerAddress: () => {
    },
    setMinimum: () => {
    }
});

const DialogContextProvider: FC<{ children?: ReactNode | undefined }> = (props) => {

    const [value, setValue] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [expectEarning, setExpectEarning] = useState<string>("");
    const [accrueEarning, setAccrueEarning] = useState<string>("");
    const [minerAddress, setMinerAddress] = useState<string>("");
    const [minimum, setMinimum] = useState<string>("");

    return (
        <DialogContext.Provider value={{
            value,
            open,
            expectEarning,
            accrueEarning,
            minerAddress,
            minimum,
            setValue,
            setOpen,
            setExpectEarning,
            setAccrueEarning,
            setMinerAddress,
            setMinimum
        }}>
            {props.children}
        </DialogContext.Provider>
    );
};

export default DialogContextProvider;