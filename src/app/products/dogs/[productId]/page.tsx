import { ProductDetails } from "@/components/productDetails";
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
  const productData = await fetchProductDetail(productId);

  console.log("Rendering Server Side Products: ", productData);
  return (
    <div className="min-h-screen">
      <h1 className="text-2xl p-5 bg-green-400 px-16"> Product Detail </h1>
      {productData ? (
        <ProductDetails productData={productData} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
