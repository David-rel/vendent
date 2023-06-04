import React from "react";
import {
  useRedirectFunctions,
  withAuthInfo,
  useLogoutFunction,
} from "@propelauth/react";
import Link from "next/link";

const ProfilePage = withAuthInfo((props) => {
  const { redirectToAccountPage } = useRedirectFunctions();
  const logoutFunction = useLogoutFunction();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <div className="p-6 bg-white border-2 border-gray-200 w-3/4 mx-auto rounded-lg">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700">
              <i className="fa fa-arrow-left"></i> Back
            </a>
          </Link>
          <h2 className="text-2xl font-bold">Your Profile</h2>
          <div></div>
        </div>

        <div className="mb-4">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src={props.user.pictureUrl}
            alt="Profile picture"
          />
        </div>

        <div className="mb-6">
          <p>
            <strong>Username:</strong> {props.user.username}
          </p>
          <p>
            <strong>Email:</strong> {props.user.email}
          </p>
          <p>
            <strong>First Name:</strong> {props.user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {props.user.lastName}
          </p>
        </div>

        <div className="mb-8 p-4 border-2 border-gray-200 rounded">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={redirectToAccountPage}
          >
            Update Security Information
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={logoutFunction}
          >
            Logout
          </button>
        </div>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
          Create a Product Review
        </button>
        {/* Add form for product review here */}

        <hr className="my-6" />

        <h3 className="text-xl font-bold mb-4">Your Product Reviews</h3>
        <div className="review-list">
          {/* Map over the reviews array to display each review */}
          {/* {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <h4>{review.productName}</h4>
              <p>{review.text}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
});

export default ProfilePage;
