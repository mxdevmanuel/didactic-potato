import { Fragment } from "react";
import Head from "next/head";
import { NewsClient } from "@data/news";
import { News } from "@datatypes/news";

export async function getStaticProps(context) {
  const client = new NewsClient();
  return { props: { data: await client.getHeadlines() } };
}

export default function Home({ data }: { data: News }) {
  return (
    <Fragment>
      <Head>
        <title>News - Just news, nothing less nothing more</title>
      </Head>
      <div className="py-5">
        <h1 className="text-5xl w-full text-center">NEWS</h1>
        <h3 className="text-2xl w-1/2 text-center text-gray-500 mx-auto">
          Just news, nothing less nothing more
        </h3>
        <hr className="text-gray-400 mx-5 my-5" />

        <div className="grid grid-cols-3 gap-5 p-5">
          {data.articles.map((article) => (
            <div className="rounded-xl shadow-xl flex flex-col px-4 py-8 w-full cursor-pointer bg-gray-50 hover:bg-gray-100">
              <h3 className="text-xl text-black">{article.title}</h3>
              <span className="text-sm text-gray-700">- {article.author}</span>
              <p className="overflow-hidden text-gray-600 text-md text-left mt-4 mb-1">
                {article.description}
              </p>
              <span className="flex flex-row">
                source: <HeroLink />
                {article.source.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

function HeroLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 -3 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}
