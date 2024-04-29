"use client";

import React, { useEffect, useState } from "react";

function page() {
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const f = async () => {
      const segments = window.location.pathname.split("/");
      const productId = segments[segments.length - 1];
      const response = await fetch(
        `http://localhost:3000/api/products/${productId}`
      );
      const data = await response.json();
      console.log("===>", data);
      setProductDetails(data);
    };
    f();
  }, []);
  return (
    <div>
      Dogs Product Detail Page{" "}
      {productDetails ? productDetails : <span>loading...</span>}{" "}
    </div>
  );
}

export default page;
