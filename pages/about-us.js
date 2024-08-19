import Head from "next/head";
import Strategic from "../components/SubPage/AboutUs/Strategic"
import Company from "../components/SubPage/AboutUs/Company";
import Management from "../components/SubPage/AboutUs/Management";
import OurTeam from "../components/SubPage/AboutUs/OurTeam";

export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="日本のシステム開発を英語化するキリロムデジタル" />
        <meta property="og:site_name" content="キリロムデジタル" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | Kirirom Digital (キリロムデジタル)" />
        <meta property="og:description" content="日本のシステム開発を英語化するキリロムデジタル" />
        <meta property="og:url" content="https://www.kirirom-digital.com/" />
        <meta property="og:image" content="https://www.kirirom-digital.com/_next/image?url=%2Fimages%2Fboardmem01.png&w=1200&q=75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kiriromdigital" />
        <meta property="fb:app_id" content="237205442772220" />
      </Head>
      <div className="bg-white px-3">
        <div className="py-5"></div>
        <Strategic />
        <Company />
        <Management />
        <div id="our-team" className="py-4"></div>
      </div>
      <div className="bg-kd-primary px-3 pt-5">
        <OurTeam />
      </div>
    </>
  );
}
