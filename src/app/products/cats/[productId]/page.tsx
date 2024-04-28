import React from "react";

function page({ params }: { productId: string }) {
  return <div>Cat Product Detail Page {params.productId}</div>;
}

export default page;
