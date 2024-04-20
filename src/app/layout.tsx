import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import '@mysten/dapp-kit/dist/index.css';
import {Context} from "@/components/Context";
import DialogContextProvider from "@/components/context/DialogContext";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Sui Staking",
    description: "Sui Staking",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-black">
        <Context>
            <DialogContextProvider>
                <body className={inter.className}>{children}</body>
            </DialogContextProvider>
        </Context>
        </html>
    );
};