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
                    <div className="text-[#b32be9] text-xl text-center lg:text-start md:text-2xl lg:text-3xl">with a total issuance of 9,999 cards.</div>
                    <div className="text-[#c2bdad] text-sm text-center lg:text-start md:text-base lg:text-lg mt-1">Reversed cards hold within them growth and insight; upright cards symbolize joy and abundance</div>
                </div>
                <div className="px-4 m-auto md:mt-16">
                    <Image src="nft/card.png" alt="cardImage" width="471" height="471"/>
                </div>
            </div>
            <div className="flex flex-col content-center items-center mt-20 gap-7">
                <div>
                    <Link href="https://opensea.io/collection/karmapi-arcana">
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
                </div>
                <div className="text-white mx-8 w-4/5 md:w-1/2">
                    <div className="text-md lg:text-lg text-center">
                        COLLECTING YOUR OWN ARCANA CARD, THE HIGHER MANA POWER TO GET MORE SUI TOKEN AS REWARD EACH MONTH.
                    </div>
                </div>
            </div>
            <div className="my-20 gap-5 mt-5">
                <div className="mx-5 md:mx-20">
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Mana Power</StyledTableCell>
                                <StyledTableCell align="left">every month</StyledTableCell>
                                <StyledTableCell align="left">in Total months</StyledTableCell>
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
        </main>
    );
}