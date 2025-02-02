import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between items-center ">
       
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <Link className="  hover:text-indigo-500" to={"/"}>
          Back
        </Link>
      </div>
      <div className="flex flex-col p-10 shadow-2xl sm:h-[450px] md:h-[550px] rounded-lg overflow-auto text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <p className=" mb-4">
          Welcome to our chat application. We value your privacy and are
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p className="">We collect the following types of information:</p>
        <ul className="list-disc list-inside ">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number (if
            provided).
          </li>
          <li>
            <strong>Usage Data:</strong> Chat messages, login activity, and
            preferences.
          </li>
          <li>
            <strong>Device Information:</strong> IP address, browser type, and
            operating system.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          2. How We Use Your Information
        </h2>
        <p className="">We use your information for:</p>
        <ul className="list-disc list-inside ">
          <li>Providing and improving our chat services.</li>
          <li>Enhancing security and preventing fraud.</li>
          <li>Sending important updates and notifications.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Data Protection</h2>
        <p className="">
          We implement strict security measures to protect your personal data
          from unauthorized access or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          4. Sharing Your Information
        </h2>
        <p className="">
          We do not sell or share your data with third parties, except:
        </p>
        <ul className="list-disc list-inside ">
          <li>When required by law or legal authorities.</li>
          <li>To protect our users and maintain security.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">5. Cookies and Tracking</h2>
        <p className="">
          We use cookies to improve user experience. You can disable cookies in
          your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
        <p className="">You have the right to:</p>
        <ul className="list-disc list-inside ">
          <li>Access, update, or delete your personal data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          7. Changes to This Policy
        </h2>
        <p className="">
          We may update this Privacy Policy. Changes will be posted on this
          page.
        </p>

        <h2 className="text-xl font-semibold mt-4">8. Contact Us</h2>
        <p className="">
          For any questions about this Privacy Policy, contact us at
          <a href="mailto:support@chatapp.com" className="text-blue-500">
            {" "}
            support@chatapp.com{" "}
          </a>
          .
        </p>
      </div>{" "}
    </div>
  );
};

export default PrivacyPolicy;
