import Menu from "../src/components/Menu";
import * as React from "react";
import Projects from "../src/components/Projects";
import Footer from "../src/components/Footer";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Projects />
      <Footer />
    </>
  );
};

export default Portfolio;
