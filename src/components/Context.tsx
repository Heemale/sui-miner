"use client"

import {SuiClientProvider, WalletProvider} from '@mysten/dapp-kit';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {network, networks} from "@/utils/rpc";

const queryClient = new QueryClient();

export const Context = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networks} defaultNetwork={network}>
                <WalletProvider autoConnect>
                    {children}
                </WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    )
}