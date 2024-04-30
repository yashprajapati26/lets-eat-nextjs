import { ProductCard } from "@/components/productCard";
import React from "react";
// import { useRouter } from "next/navigation";

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    // cache: "force-cache", // SSG ( static site generation )
    cache: "no-store", // SSR ( static site rendering )
  });
  const data = await response.json();
  return data;
}

export default async function page() {
  const data = await fetchProducts();
  const products = data.filter((product: any) => product.type == "Dog Food");

  console.log("Rendering Server Side Products: ", products.length);
  return (
    <div>
      <h1 className="text-2xl p-5 bg-yellow-300"> Dogs Products</h1>
      <div className="mx-5 flex flex-wrap">
        <ProductCard products={products} />: (<p>Loading....</p>)
      </div>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   console.log("Server Side Rendering");
//   const data = (await fetch("https://dummyjson.com/products")).json();
//   return {
//     props: {
//       productsData: data,
//     },
//   };
// };
