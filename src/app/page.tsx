"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@mui/material/Button";
import React from "react";
import {TableRow} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {StyledTableCell, StyledTableRow} from "@/utils/style";
import Link from "next/link";
import './styles.css';

const createData = (
    name: string,
    calories: string,
    fat: string,
) => {
    return {name, calories, fat};
}

const rows = [
    createData('<200', "10", "12"),
    createData('200 - 300', "18", "12"),
    createData('300 - 400', "25", "12"),
    createData('400 - 500', "31", "12"),
    createData('500 - 600', "40", "12"),
    createData('600 - 700', "46", "12"),
];

export default function Nft() {
    return (
        <main className="min-h-screen w-full">
            <Navbar/>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mx-7 md:mx-32 mt-8 md:mt-10">
                <div className="flex flex-col gap-2 mx-6.5 md:mt-28">
                    <div className="text-white text-2xl text-center lg:text-start md:text-3xl lg:text-4xl lg:leading-snug">SUI NFT is your pass in SUI. The Arcana card sets are the Genesis NFT series,</div>
                    <div className="text-[#b32be9] text-center lg:text-start text-xl md:text-2xl lg:text-3xl">with a total issuance of 9,999 cards.</div>
                    <div className="text-[#c2bdad] text-center lg:text-start text-sm md:text-base lg:text-lg mt-1">Reversed cards hold within them growth and insight; upright cards symbolize joy and abundance</div>
                </div>
                <div className="px-4 m-auto md:mt-16">
                    <Image src="nft/card.png" alt="cardImage" width="471" height="471"/>
                </div>
            </div>
            <div className="flex flex-col content-center items-center mt-20 gap-7">
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link href="https://opensea.io/collection/suiarcana">
                        <Button variant="contained" color="secondary" sx={{
                            background: 'linear-gradient(45deg, #705bfb, #9945fd, #c52efe)',
                            borderRadius: 2,
                            border: 0,
                            color: 'white',
                            height: '3.5rem',
                            padding: '0 30px',
                            boxShadow: '0 3px 5px 2px rgba(105, 81, 216, .3)',
                            width: '18rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none', // 禁用文字转换为大写
                        }}>
                            Buy Arcana Card
                        </Button>
                    </Link>
                    <Link href="https://opensea.io/collection/arcana-box/overview">
                        <Button variant="contained" color="secondary" sx={{
                            background: 'linear-gradient(45deg, #705bfb, #9945fd, #c52efe)',
                            borderRadius: 2,
                            border: 0,
                            color: 'white',
                            height: '3.5rem',
                            padding: '0 30px',
                            boxShadow: '0 3px 5px 2px rgba(105, 81, 216, .3)',
                            width: '18rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none', // 禁用文字转换为大写
                        }}>
                            Buy Arcana Box
                        </Button>
                    </Link>
                </div>
                <div className="text-white mx-8 w-4/5 md:w-1/2">
                    <div className="text-md lg:text-lg text-center">
                        COLLECTING YOUR OWN ARCANA CARD, THE HIGHER MANA POWER TO GET MORE SUI TOKEN AS REWARD EACH MONTH.
                    </div>
                </div>
            </div>
            <div className="my-20 gap-5 mt-5">
                <div className="mx-4 md:mx-20">
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">
                                    <div>
                                        <span>Mana</span>
                                        <span> Power</span>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div>
                                        <span>Every Month</span>
                                        <span> (SUI)</span>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <div>
                                        <span>In Total</span>
                                        <span> Months</span>
                                    </div>
                                </StyledTableCell>
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
                </div>
            </div>
            <div className="flex flex-col content-center items-center mt-20 gap-7 w-5/6 m-auto">
                <div className="text-white mx-8">
                    <div className="text-white text-2xl text-center lg:text-start md:text-3xl lg:text-4xl lg:leading-snug withsuiseaworl">
                        WITH SUI ARCANA CARD, YOU CAN
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-6 mx-7 md:gap-2  mt-8 md:mt-0 my-20l md:mx-32" style={{display:"flex"}}>
                <div className="m-auto md:mt-16 w-1/1 lg:w-1/3 md:w-1/2 backgroundColorImage">
                    <div className="pt-6 pr-6 pl-6 pb-6 border-solid border rounded" style={{height:"100%"}}>
                        <Image src="nft/PRINT1.png" alt="cardImage" style={{ width: "100%" }} width="210" height="328" className="m-auto"/>
                        <div className="py-4 ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsper">Collect and Prosper</div>
                        <div className="ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsperNext">This series seamlessly blends Celtic art, originating from ancient Europe, into the SUI  Arcana Cards. It incorporates numerous iconic Celtic knots, patterns, and highly recognizable character figures, adding significant artistic value to the series.</div>
                    </div>
                </div>
                <div className="m-auto mt-8 md:mt-16 w-1/1 lg:w-1/3 md:w-1/2 backgroundColorImage">
                    <div className="pt-6 pr-6 pl-6 pb-6 border-solid border rounded" style={{height:"100%"}}>
                        <Image src="nft/Group.png" alt="cardImage" style={{ width: "100%" }} width="210" height="328" className="m-auto"/>
                        <div className="py-4 ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsper">Enhance Your Rewards</div>
                        <div className="ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsperNext">By leveraging the reward boost from Arcana Cards, you can potentially double or even triple your rewards when employing the right strategy. SUI  Arcana Cards are upgradable, and their rarity can be enhanced to further amplify your rewards.</div>
                    </div>
                </div>
                <div className="m-auto mt-8 md:mt-16 w-1/1 lg:w-1/3 md:w-1/2 backgroundColorImage">
                    <div className="pt-6 pr-6 pl-6 pb-6 border-solid border rounded" style={{height:"100%"}}>
                        <Image src="nft/PRINT3.png" alt="cardImage" style={{ width: "100%" }} width="210" height="328" className="m-auto"/>
                        <div className="py-4 ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsper">Spice Up Your Prophet</div>
                        <div className="ttext-sm text-left lg:text-start md:text-base lg:text-lg mt-1 CollectAndProsperNext">SUI Arcana Cards holders will gain access to a series of complimentary prophet games upon the launch of SUI prophet. These games will provide different aspects prophets and in-depth analyses of your future, providing a valuable guidance of your life and soul.</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mx-7 md:mx-32 mt-16 md:mt-10 my-20">
                <div className="flex flex-col gap-2 mx-6.5 md:mt-28">
                    <div className="text-2xl text-center lg:text-start md:text-3xl lg:text-4xl lg:leading-snug NFTmarket" >NFTmarket is the SUI community&apos;s free trade hub.</div>
                    <div className="ttext-sm text-center lg:text-start md:text-base lg:text-lg NFTmarket1">Players can trade NFTs and in-game items with each other. Players can also purchase game collectibles and real-world products, such as tarot cards, crystal balls, magic wands, bracelets, and other divination items. </div>
                    <div className="ttext-sm text-center lg:text-start md:text-base lg:text-lg mt-1 NFTmarket2">The universal currency in SUI is, the native token of SUI ecosystem.</div>
                </div>
                <div className="m-auto md:mt-16">
                    <Image src="nft/Giftimage.png" alt="cardImage" width="617" height="391"/>
                </div>
            </div>
        </main>
    );
}