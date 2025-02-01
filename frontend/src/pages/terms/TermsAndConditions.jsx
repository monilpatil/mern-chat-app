import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex justify-end">
        <Link className="  hover:text-indigo-500" to={"/"}>
          Back
        </Link>
       
      </div>

      <div className="flex flex-col p-10 shadow-2xl sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className=" mb-4">
          Welcome to our chat application. By using our services, you agree to
          abide by the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p className="">
          By accessing and using this application, you agree to be bound by
          these terms and conditions. If you do not agree, please refrain from
          using the app.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. User Conduct</h2>
        <p className="">
          You are responsible for your interactions and must not engage in
          harassment, hate speech, or illegal activities.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Privacy Policy</h2>
        <p className="">
          Your personal data will be handled according to our Privacy Policy. We
          do not share your data without consent.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Liability Disclaimer</h2>
        <p className="">
          We are not responsible for any loss, damage, or harm caused by the use
          of this application.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Changes to Terms</h2>
        <p className="">
          We reserve the right to modify these terms at any time. Continued use
          constitutes acceptance of the revised terms.
        </p>

        <p className="mt-6">
          If you have any questions, contact us at{" "}
          <a href="mailto:support@chatapp.com" className="text-gray-500">
            support@chatapp.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
