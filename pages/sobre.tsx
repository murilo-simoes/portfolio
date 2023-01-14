import Menu from "../src/components/Menu";
import * as React from "react";
import Head from "next/head";
import Introduction from "../src/components/Introduction";
import Objetivos from "../src/components/Objetivos";
import Footer from "../src/components/Footer";
import Tecnologias from "../src/components/Tecnologias";

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Sobre Mim</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Introduction />
      <Objetivos />
      <Tecnologias />
      <Footer />
    </>
  );
};

export default Sobre;
