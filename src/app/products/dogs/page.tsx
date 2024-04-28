"use client";

import React, { useEffect, useState } from "react";

function page() {
  const [products, setProducts] = useState([]);

  const loadposts = () => {
    const f = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      console.log("===>", data);
      setProducts(data);
    };
    f();
  };

  useEffect(() => {
    console.log("called loadPosts:");
    loadposts();
  }, []);

  return (
    <div>
      Dogs Products
      <ul></ul>
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

export default page;
