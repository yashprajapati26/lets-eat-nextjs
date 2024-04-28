"use client";

import Link from "next/link";
import React, { use } from "react";
import { useRouter } from "next/navigation";

function Card({ imagePath, title, description, redirectTo }) {
  const router = useRouter();

  const detailHandler = (redirectTo: string) => {
    router.push("/products/" + redirectTo);
  };

  return (
    <div className="mx-5">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        onClick={() => detailHandler(redirectTo)}
      >
        <img
          className="w-full min-h-64"
          src={imagePath}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            View Products
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
