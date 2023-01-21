import { Seo } from "@/shared/interfaces/seo";
import { NextPage } from "next";
import Head from "next/head";

const SEO: NextPage<Seo> = ({ description, author, title, meta = [] }: Seo) => {
  const metadata = [
    {
      name: "description",
      content: description,
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "author",
      content: author,
    },
  ].concat(meta);

  const TITLE: string = `${title ?? ""} - Partiaf`;

  return (
    <Head>
      <title>{TITLE}</title>

      {metadata.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
};

export default SEO;
