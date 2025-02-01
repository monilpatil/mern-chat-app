import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex justify-end">
        <Link className="  hover:text-indigo-500" to={"/"}>
          Back
        </Link>
      </div>

      <div className="flex flex-col p-10 shadow-2xl sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className=" mb-4">
          Welcome to our Chat Application! We aim to provide a fast, secure, and
          reliable messaging platform for seamless communication.
        </p>

        <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
        <p className="">
          Our mission is to connect people with a user-friendly chat experience
          that prioritizes security, privacy, and innovation.
        </p>

        <h2 className="text-xl font-semibold mt-4">Our Features</h2>
        <ul className="list-disc list-inside ">
          <li>End-to-End Encrypted Messages</li>
          <li>Group and Private Chats</li>
          <li>Fast and Secure Communication</li>
          <li>Cross-Platform Support</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Meet the Team</h2>
        <p className="">
          We are a group of passionate developers and designers committed to
          making communication easier for everyone.
        </p>

        <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
        <p className="">
          Have questions? Reach out at{" "}
          <a href="mailto:support@chatapp.com" className="text-gray-500">
            support@chatapp.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
