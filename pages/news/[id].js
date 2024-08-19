import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Link from "next/link";
import indexStyles from "../../pages/index.module.css";
import whyChooseStyles from "../../components/SubPage/Home/WhyChoose.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";

export default function Blog({ frontmatter, content, posts }) {
  const router = useRouter();
  function handleGetBlogsByTag(e, tag) {
    e.preventDefault();
    // console.log(tag);
    router.push(`/news?tag=${tag}`);
  }

  return (
    <>
      <Head>
        <title>{`${frontmatter.metaTitle} | KIRIROM DIGITAL`}</title>
        <meta name="description" content={frontmatter.metaDesc} />
      </Head>
      <div className="bg-[#091C3E] text-white">
        <div className="py-5"></div>
        <div className="flex flex-col justify-center items-center">
          {frontmatter.image ? (
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={`/${frontmatter.image}`}
              alt={frontmatter.metaTitle}
              className="md:w-1/2 w-4/6 md:h-80 rounded-lg object-cover"
            />
          ) : (
            <></>
          )}
          <h1 className="text-xl p-5 md:text-3xl text-center text-white ">
            {frontmatter.title}
          </h1>
        </div>
      </div>

      <div className="bg-white text-[#091C3E] py-5 sm:mx-4 md:mx-60 px-3">
        <div className="mx-auto">
          <div className="flex items-center gap-2 font-bold py-3">
            <CalendarIcon size={16} />
            <span>{frontmatter.date}</span>
          </div>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Get all the paths from slugs or file names
  const files = fs.readdirSync("content");
  const paths = files.map((files) => ({
    params: {
      id: files.replace(".md", ""),
    },
  }));
  // console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const fileName = fs.readFileSync(`content/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);

  // Get all the posts from posts folder
  const files = fs.readdirSync("content");

  // Loop over each post to extract the frontmatter which we need
  let posts = files
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
    // filter out the current blog
    .filter((post) => post.slug !== id)
    // filter only post with the same tag as the current blog
    .filter((post) => {
      let isSameTag = false;
      return isSameTag;
    })
    // sort by date desc
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    .slice(0, 3);

  return {
    props: {
      frontmatter,
      content,
      posts,
    },
  };
}

// https://dev.to/anuraggharat/how-to-create-a-blog-using-nextjs-and-markdown-3j9o
