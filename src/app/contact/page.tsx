import React from "react";

function ContactPage() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1
          className="text-2xl font-semibold 
                   text-gray-800 mb-4 text-center"
        >
          Contact Us
        </h1>
        <form id="contactForm">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label
              for="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label
              for="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white 
                               rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
