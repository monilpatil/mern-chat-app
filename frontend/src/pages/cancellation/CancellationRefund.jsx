import React from "react";
import { Link } from "react-router-dom";
const CancellationRefund = () => {
  return (
    <div className=" flex flex-col">
      <div className=" flex  justify-between items-center ">
        <h1 className="text-3xl font-bold mb-2">
          Cancellation & Refund Policy
        </h1>
        <Link className="  hover:text-indigo-500" to={"/"}>
          Back
        </Link>
      </div>
      <div className="flex flex-col p-10 shadow-2xl sm:h-[450px] md:h-[550px] rounded-lg text-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-auto">
        <p className=" ">
          This Cancellation & Refund Policy explains our policies regarding the
          cancellation of subscriptions and refund requests for our chat
          application.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          1. Subscription Cancellation
        </h2>
        <p className="">
          - Users can cancel their subscription anytime from their account
          settings. - If canceled, the subscription will remain active until the
          end of the current billing cycle. - No partial refunds will be
          provided for unused time.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Refund Policy</h2>
        <p className="">We offer refunds under the following conditions:</p>
        <ul className="list-disc list-inside ">
          <li>If you were charged incorrectly due to a billing error.</li>
          <li>
            If you cancel within 24 hours of subscribing (first-time users
            only).
          </li>
          <li>
            If there are technical issues preventing app usage and we are unable
            to resolve them.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Non-Refundable Cases</h2>
        <p className="">
          Refunds will **not** be provided in the following cases:
        </p>
        <ul className="list-disc list-inside ">
          <li>Change of mind after using the service.</li>
          <li>Failure to cancel the subscription before renewal.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">
          4. How to Request a Refund?
        </h2>
        <p className="">
          To request a refund, contact us at
          <a href="mailto:support@chatapp.com" className="text-blue-500">
            {" "}
            support@chatapp.com{" "}
          </a>
          with your order details and the reason for your refund request.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Processing Time</h2>
        <p className="">
          Refunds (if applicable) will be processed within **5-10 business
          days** after approval.
        </p>

        <p className="mt-6 ">
          For any queries, please reach out to
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

export default CancellationRefund;
