import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Banner />
      <Footer />
    </>
  );
}
