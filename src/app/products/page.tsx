import Card from "@/components/card";
import React from "react";

function page() {
  return (
    <div className="h-screen">
      <h1 className="text-2xl p-5 bg-blue-200 my-5">Products Categories</h1>
      <div className="flex">
        <Card
          imagePath="dogs.jpg"
          title="Dogs"
          description=""
          redirectTo="dogs"
        />
        <Card
          imagePath="cats.png"
          title="Cats"
          description=""
          redirectTo="cats"
        />
      </div>
    </div>
  );
}

export default page;
