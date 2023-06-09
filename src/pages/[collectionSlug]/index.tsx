import React from "react";
import { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  title: string;
}

const CollectionPage = ({ title }: Props) => {
  const router = useRouter();
  console.log(router); // eslint-disable-line no-console

  return (
    <div className="text-center py-12">
      <div className="text-4xl py-2">Product Category Page</div>
      <div className="text-4xl py-2">{title}</div>
      <div className="text-xl py-2">asPath: {router.asPath}</div>
      <div className="text-xl py-2">
        collectionSlug: {router.query.collectionSlug}
      </div>
    </div>
  );
};

const heroTitles = [
  { slug: "men", title: "Mens Clothing" },
  { slug: "women", title: "Women's Clothing" },
  { slug: "something-dashed", title: "Dashing Clothing" },
];

export const getStaticPaths = async () => {
  return {
    paths: heroTitles.map((d) => ({ params: { collectionSlug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { collectionSlug } = context.params as { collectionSlug: string };
  const data = heroTitles.find((d) => d.slug === collectionSlug) || {
    title: "Not Found",
  };

  return {
    props: { title: data.title },
  };
};

// export const getServerSideProps = async (context: GetStaticPropsContext) => {
//   const { collectionSlug } = context.params as { collectionSlug: string };
//   const data = heroTitles.find((d) => d.slug === collectionSlug) || {
//     title: "Not Found",
//   };

//   return {
//     props: { title: data.title },
//   };
// };

export default CollectionPage;
