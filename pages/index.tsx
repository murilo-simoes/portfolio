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
        <meta name="description" content="Site Pessoal"></meta>
        <meta name="author" content="Murilo Simões"></meta>
        <meta name="keywords" content="Portfólio" />

        <link rel="alternate" href="" hrefLang="pt-br" />
        <meta name="robots" content="index, follow"></meta>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <meta
          property="og:url"
          content="https://portfolio-murilo-simoes.vercel.app/"
        />
        <meta property="og:title" content="Site Pessoal - Murilo Simões" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/VNFGgfsM/Screenshot-1.png"
        />
        <meta
          property="og:description"
          content="Site Pessoal - Murilo Simões"
        />
        <meta name="theme-color" content="#fe2813"></meta>
        <meta property="business:contact_data:country_name" content="Brasil" />
        <meta
          property="business:contact_data:website"
          content="https://portfolio-murilo-simoes.vercel.app/"
        />
        <meta property="business:contact_data:region" content="SP" />
        <meta
          property="business:contact_data:email"
          content="murilorsimoes@gmail.com"
        />
        <meta
          property="business:contact_data:phone_number"
          content="11942986698"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Site Pessoal - Murilo Simões"
        />
        <meta name="twitter:title" content="Site Pessoal - Murilo Simões" />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/VNFGgfsM/Screenshot-1.png"
        />

        <meta name="geo.placename" content="São Paulo" />
        <meta name="geo.region" content="BR" />
        <meta name="description" content="Site Pessoal - Murilo Simões" />
        <link
          rel="canonical"
          href="https://portfolio-murilo-simoes.vercel.app/"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Menu />
      <Banner />
      <Footer />
    </>
  );
}
