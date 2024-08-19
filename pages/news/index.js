import indexStyles from "../index.module.css";
import fs from "fs"; //FS to read files
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, CalendarIcon } from "lucide-react";

export default function BlogPage({ posts }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.8,
      },
    },
  };
  const items_p = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };
  const router = useRouter();
  const { tag } = router.query;

  if (tag) {
    // filter posts by tag
    posts = posts.filter((post) => post.data.tags.includes(tag));
  }

  function handleGetBlogsByTag(e, tag) {
    e.preventDefault();
    console.log(tag);
    router.push(`/news?tag=${tag}`);
  }

  return (
    <>
      <Head>
        <title>News | Kirirom Digital</title>
      </Head>
      <div className="bg-[#091C3E] text-white">
        <div className=" sm:mx-4 md:mx-16 px-2">
          <div className="py-5"></div>
          <div className=" text-white text-lg py-4 px-3">
            <h3 className="font-bold capitalize text-xl">News</h3>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        {/* <div className="py-md-5"></div> */}
        <div className="sm:mx-4 md:mx-16 px-2">
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {posts.map((item, idx) => (
              <motion.div
                key={idx}
                variants={items_p}
                className={
                  " w-72 shadow-md border-red-100  border rounded-lg p-3 bg-slate-50  hover:bg-white"
                }
              >
                <Link href={`/news/${item.slug}`}>
                  <div className={indexStyles.blogImg}>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={`/${item.data.socialImage}`}
                      alt={item.data.metaTitle}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <CalendarIcon size={16} />
                    <span>{item.data.date}</span>
                  </div>
                  <div className={indexStyles.blogTitle}>{item.data.title}</div>

                  <div className={indexStyles.blogSubtitle}>
                    {item.data.metaDesc}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Getting all our posts at build time

  // Get all the posts from posts folder
  const files = fs.readdirSync("content");

  // Loop over each post to extract the frontmatter which we need
  const posts = files
    .map((file) => {
      // getting the slug here which we will need as a URL query parameter
      const slug = file.replace(".md", "");
      // Reading the contents of the file
      const filecontent = fs.readFileSync(`content/${file}`, "utf-8");
      const parsedContent = matter(filecontent);
      //The parsed content contains data and content we only need the data which is the frontmatter
      const { data } = parsedContent;
      return {
        slug,
        data,
      };
    })
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return {
    props: {
      posts,
    },
  };
}
