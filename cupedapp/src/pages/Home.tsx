import React from "react"
import { type NextPage } from "next";
import Link from "next/link";
import { Box, Container } from "@mui/material";
import Image from "next/image";

const HomePage: NextPage = () => {
    return (
      <Container
        maxWidth={false}
        disableGutters
        className="min-h-screen w-full bg-black pt-16"
      >
        <div
          style={{ fontFamily: "Glacial Indifference" }}
          className="absolute  left-9 text-3xl font-thin text-white"
        >
          CUPED TOPOGRAPHY
        </div>
        <Box
          id="menu"
          className="flex flex-row justify-center gap-10 font-serif text-3xl text-white"
        >
          <Link
            href={"/Inicio"}
            className=" border-yellow-400 hover:border-b-4 hover:text-yellow-400"
          >
            Inicio
          </Link>
          <Link
            href={"/Productos"}
            className=" border-yellow-400 hover:border-b-4 hover:text-yellow-400"
          >
            Productos
          </Link>
          <Link
            href={"/Servicios"}
            className=" border-yellow-400 hover:border-b-4 hover:text-yellow-400"
          >
            Servicios
          </Link>
          <Link
            href={"/contactos"}
            className=" border-yellow-400 hover:border-b-4 hover:text-yellow-400"
          >
            Contactos
          </Link>
        </Box>
        <Box className="absolute right-0 top-72">
          <Image src="/item1.jpeg" alt="imagen1" width={1000} height={1100} />
        </Box>
      </Container>
    );
}; 

export default HomePage

const HomeView:React.FC = () => {
    
    return (<div></div>)
}