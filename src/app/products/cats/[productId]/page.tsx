import React from "react";

async function fetchProductDetail(productId: string) {
  const fetchData = await fetch(
    `http://localhost:3000/api/products/${productId}`,
    {
      // cache: "force-cache", // SSG ( static site generation )
      cache: "no-store", // SSR ( static site rendering )
    }
  );

  const data = await fetchData.json();
  return data;
}

export default async function ProductDetail({ params }) {
  const { productId } = params;
  console.log("==========>>>>>>>>params", params);
  const data = await fetchProductDetail(productId);

  console.log("Rendering Server Side Products: ", data);
  return (
    <div>
      <h1 className="text-2xl p-5 bg-sky-300"> Product Detail </h1>
      <div className="mx-5 flex flex-wrap">loading...</div>
    </div>
  );
}
