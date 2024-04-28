import React from "react";

function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <title>About Us | Pet Food Website</title>
        <meta
          name="description"
          content="Learn about our mission and commitment to providing high-quality pet food."
        />
        <link rel="icon" href="/favicon.ico" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center px-4 py-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            className="max-w-full rounded-lg shadow-lg"
            src="/lets-eat-logo.png"
            alt="About"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-800 mb-6">
            At Pet Food Website, we are passionate about providing the best
            nutrition for your beloved pets. Our mission is to ensure that every
            pet receives high-quality, nutritious food that supports their
            health and well-being.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            We carefully select ingredients for our pet food products, focusing
            on quality, freshness, and nutritional value. Our team of experts
            works tirelessly to develop recipes that meet the dietary needs of
            pets and exceed industry standards.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            Whether you have a dog, cat, or any other furry friend, you can
            trust Pet Food Website to provide wholesome and delicious meals that
            your pet will love. Thank you for choosing us as your partner in pet
            nutrition!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
