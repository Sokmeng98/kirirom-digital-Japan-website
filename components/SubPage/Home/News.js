import indexStyles from "../../../pages/index.module.css";
import whyChooseStyles from "./WhyChoose.module.css";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function News({ blogs }) {
  // console.log(blogs);
  const router = useRouter();
  function handleGetBlogsByTag(e, tag) {
    e.preventDefault();
    router.push(`/news?tag=${tag}`);
  }

  return (
    <div className="sm:mx-4 md:mx-16 px-2 my-6">
      <div className="flex flex-col justify-center items-center">
        <div className="w-fit">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
            News
          </h1>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>
      </div>

      <div className="flex flex-wrap mt-5 gap-5">
        {blogs.map((item, idx) => (
          <Link
            href={`/news/${item.slug}`}
            className={
              "w-full sm:w-72 shadow-md border-red-100  border rounded-lg p-3 bg-slate-50 transition duration-300 md:hover:scale-105 md:hover:bg-white "
            }
            key={idx}
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-40 object-cover rounded-lg"
                width={0}
                height={0}
                sizes="100vw"
                src={`/${item.data.socialImage}`}
                alt={item.data.metaTitle}
              />
            </div>
            <div className={indexStyles.blogTitle}>{item.data.title}</div>

            <div className={indexStyles.blogSubtitle}>{item.data.metaDesc}</div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <div className={whyChooseStyles.ctaLink}>
          <Link href="/news" className="flex justify-center items-center gap-2">
            <span>Load More</span>
            <svg
              style={{ color: "#F22400", paddingBottom: 4, marginTop: 2 }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
