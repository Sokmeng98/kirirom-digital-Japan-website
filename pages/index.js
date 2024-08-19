import fs from "fs";
//FS to read files
import matter from "gray-matter";
import Head from "next/head";

import { motion } from "framer-motion"

import WhyChoose from '../components/SubPage/Home/WhyChoose';
import OurServices from '../components/SubPage/Home/OurServices';
import Contact from '../components/SubPage/Home/Contact';
import News from '../components/SubPage/Home/News';
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Index({ posts }) {
  const container = {
  hidden: { opacity: 0, y: -50 }, // Start from slightly above
    visible: {
      opacity: 1,
      y: 0, // End at natural position
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren", // Ensure children animate after the container has moved
        type: "spring", // This gives a nice smooth effect
        stiffness: 100, // Adjust the stiffness for more or less "bounce"
      },
    },
  }


  return (
    <>
      <head>
          <meta charSet="UTF-8" />
          <meta name="description" content="日本のシステム開発を英語化するキリロムデジタル" />
          <meta property="og:site_name" content="キリロムデジタル" />
          <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kirirom Digital (キリロムデジタル)" />
          <meta property="og:description" content="日本のシステム開発を英語化するキリロムデジタル" />
          <meta property="og:url" content="http://kdj.vercel.app/" />
          {/* <meta property="og:image" content="http://kdj.vercel.app/images/kdj_logo_og.png"/> */}
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@kiriromdigital" />
          <meta property="fb:app_id" content="237205442772220" />
      </head>

      <div  className="bg-white overflow-hidden px-2">
        {/* <CarouselPlugin/> */}
        {/* カルーセル */}
        <div className="mt-28 sm:mx-4 md:mx-16 px-2">
           <div className="flex justify-between items-center">
            <motion.div className="w-full md:w-3/5" variants={container} initial="hidden" animate="visible">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">Want <span className="text-[#2C4495]" >Diversity</span> & <span className="text-[#2C4495]">Scalability</span> for your Engineering Team?</h3>
              <p className="mt-4">日本国内でのエンジニア獲得競争を続けるか、多国籍エンジニアチームを使いこなせるようになるか。</p>
              <p className="mb-4">キリロムデジタルはシステム開発を通じて、開発チームのグローバル化を支援します。</p>
            </motion.div>
            <div className="animate-bounce hidden md:block">
              <div className="flex justify-center items-end transform rotate-90 ">
                <p>Scroll Down</p>
                <ArrowRight size={20} />
              </div>  
            </div>
            
           </div>
          
           <Image src="/images/herobanner.png" alt="work2" width={1200} height={800} className="w-full rounded-lg mb-5"/>

        </div>
        

        {/* <br /> */}
        {/* Why Choose */}
       
        <WhyChoose/>

        <br />
        {/* Our Service. */}
        <OurServices/>
        <br />
    
        {/* Contact us */}
        <Contact />

        <br />
        {/* News */}
        <News blogs={posts}/>
      </div>
    </>
  );
}

export async function getStaticProps(){
  // Getting all our posts at build time

  // Get all the posts from posts folder
  const files = fs.readdirSync("content");

  // Loop over each post to extract the frontmatter which we need
  const posts = files.map((file) => {
    // getting the slug here which we will need as a URL query parameter
    const slug = file.replace(".md", "");
    // Reading the contents of the file
    const filecontent = fs.readFileSync(`content/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    //The parsed content contains data and content we only need the data which is the frontmatter
    const {data} = parsedContent
    return {
      slug,
      data,
    };
  })
  .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  .slice(0, 3);

  return {
    props:{
      posts
    }
  }
}
