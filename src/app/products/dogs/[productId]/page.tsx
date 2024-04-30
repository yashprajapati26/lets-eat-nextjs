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
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden flex">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
              <div className="col-span-2">
                <img
                  src={productData.image}
                  alt="Product Image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="p-4">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {productData.name}
              </h1>
              <p className="text-xl font-bold text-gray-800 mb-4">
                RS. {productData.price}
              </p>
              <p className="text-gray-700 mb-6">{productData.description}</p>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Specifications
                </h2>
                <ul className="text-gray-700">
                  <li>Type: {productData.type}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Customer Reviews
                </h2>
                <p className="text-gray-700">No reviews yet.</p>
              </div>
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="mr-8 flex w-auto justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add to Cart
                </button>
                <button
                  type="submit"
                  className="flex w-auto justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
