import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CollectionPage: NextPage = () => {
  const router = useRouter();

  console.log({ router }); // eslint-disable-line no-console

  return (
    <div className="text-center py-12 text-6xl">
      <div>Product Category Page</div>
      <div>{router.asPath}</div>
      <div>{router.query.categorySlug}</div>
    </div>
  );
};

export default CollectionPage;
