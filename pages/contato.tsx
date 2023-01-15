import Menu from "../src/components/Menu";
import * as React from "react";
import Head from "next/head";
import TitleContact from "../src/components/TitleContact";
import ContactForm from "../src/components/ContactForm";
import Footer from "../src/components/Footer";
import Contacts from "../src/components/Contacts";

const Contato = () => {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <TitleContact />
      <ContactForm />
      <Contacts />
      <Footer />
    </>
  );
};

export default Contato;
