import Head from "next/head";
import { NewsClient } from "@data/news";

export async function getStaticProps(context) {
  const client = new NewsClient();
  return { props: { data: await client.getNews() } };
}

export default function Home({ data }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      hello
      {data.foo}
    </div>
  );
}
