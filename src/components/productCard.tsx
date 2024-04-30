"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export const ProductCard = ({ products }) => {
  const router = useRouter();
  const pathname = usePathname();

  const detailHandler = (productId: any) => {
    console.log("click on detail page", productId, pathname);
    const newUrl = `${pathname}/${productId}`;
    router.push(newUrl);
  };

  return (
    <div>
      <div className="mx-5 flex flex-wrap">
        {products && products?.length > 0 ? (
          products.map((product) => {
            return (
              <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-3">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={product?.image}
                      alt="Product Image"
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {product?.type}
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {product?.name}
                    </a>
                    <p className="mt-2 text-gray-500">{product?.description}</p>
                    <div className="mt-4">
                      <span className="text-gray-600">Price:</span>
                      <span className="text-gray-900 font-medium">$99.99</span>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => detailHandler(product?.id)}
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};
