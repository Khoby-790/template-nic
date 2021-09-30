/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import avatar from "../../../assets/23511370.jpg";
interface Props {}

const WelcomeSection = (props: Props) => {
  return (
    <>
      <section aria-labelledby="h-full w-full">
        <div className="rounded-lg bg-gradient-to-r h-full from-yellow-400 via-red-500 to-pink-500 overflow-scroll shadow">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-purple-500 p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img
                    className="mx-auto h-20 w-20 rounded-full"
                    src={avatar}
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-sm font-medium text-gray-100">
                    Welcome back,
                  </p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Rebecca Nicholas
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Managing Director
                  </p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                <a
                  href="#"
                  className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-indigo-700 via-indigo-500 to-purple-500 grid grid-cols-1 divide-y divide-purple-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-100 mr-1">12</span>
              <span className="text-gray-100">Placement Requests</span>
            </div>

            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-100 mr-1">4</span>
              <span className="text-gray-200">Payment Approval Requests</span>
            </div>

            <div className="px-6 py-5 text-sm font-medium text-center">
              <span className="text-gray-100">{new Date().toDateString()}</span>
              {/* <span className="text-gray-600">Personal days left</span> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
