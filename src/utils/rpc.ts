import {getFullnodeUrl, SuiClient} from "@mysten/sui.js/client";

export const networks = {
    testnet: {url: getFullnodeUrl('testnet')},
    mainnet: {url: getFullnodeUrl('mainnet')},
};

export type networkTypes = 'testnet' | 'mainnet' | undefined;

export const network = process.env.NEXT_PUBLIC_NETWORK as networkTypes;

export const rpc = process.env.NEXT_PUBLIC_RPC as string;

export const suiClient = new SuiClient({url: rpc});
