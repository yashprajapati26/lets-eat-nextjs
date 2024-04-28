import React from "react";

function page({ params }: { productId: string }) {
  return <div>Dogs Product Detail Page {params.productId}</div>;
}

export default page;
