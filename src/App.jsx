import React from "react";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    country: "",
    state: "",
    postal: "",
    iscomments: false,
    iscandidate: false,
    isoffers: false,
    notification: "",
  });
  // console.log(form);

  function changehandler(event) {
    const { name, value, checked, type } = event.target;
    setForm((prevform) => {
      return {
        ...prevform,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submithandler(event) {
    event.preventDefault();
    console.log(form);
  }
  return (
    <div className="flex flex-col gap-5  justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl underline font-medium text-gray-700 dark:text-gray-300  mb-2">Registration Form</h1>
      <form
        onSubmit={submithandler}
        className="bg-white dark:bg-gray-800 p-8 mb-5 rounded-lg shadow-md w-full max-w-lg"
      >
        
        <label
          htmlFor="firstname"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300  mb-2"
        >
          First Name
        </label>

        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          id="firstname"
          onChange={changehandler}
          value={form.firstname}
          className="py-[1px] block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <label
          htmlFor="lastname"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Last Name
        </label>

        <input
          type="text"
          placeholder="lastname"
          name="lastname"
          id="lastname"
          onChange={changehandler}
          value={form.lastname}
          className=" py-[1px] block w-full rounded-md border-gray-300 shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <label
          htmlFor="email"
          className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
        >
          Email Address
        </label>

        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={changehandler}
          value={form.email}
          className="py-[1px] block w-full rounded-md border-gray-300  shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <label
          htmlFor="street"
          className="block text-sm dark:text-gray-300 mb-2 font-medium text-gray-700"
        >
          Street Adress
        </label>

        <input
          type="text"
          placeholder="streetadress"
          name="street"
          id="street"
          onChange={changehandler}
          value={form.street}
          className="py-[1px] block w-full rounded-md border-gray-300  shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <label
          htmlFor="city"
          className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
        >
          City
        </label>

        <input
          type="text"
          placeholder="city"
          name="city"
          id="city"
          onChange={changehandler}
          value={form.city}
          className="py-[1px] block w-full  rounded-md border-black  shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <label
          htmlFor="country"
          className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
        >
          Country
        </label>

        <select
          name="country"
          id="country"
          value={form.country}
          onChange={changehandler}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Canada">Canada</option>
        </select>
        <label
          htmlFor="state"
          className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
        >
          State
        </label>

        <input
          type="text"
          placeholder="state"
          name="state"
          id="state"
          onChange={changehandler}
          value={form.state}
          className="py-[1px] block w-full  rounded-md border-black  shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <label
          htmlFor="postal"
          className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
        >
          Zip/Postal code
        </label>

        <input
          type="number"
          placeholder="postal code"
          name="postal"
          id="postal"
          onChange={changehandler}
          value={form.postal}
          className=" py-[1px] block w-full  rounded-md border-black  shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <label
          htmlFor="postal"
          className="block text-sm mb-2 font-bold dark:text-gray-200 font-medium text-gray-700"
        >
          By Emails
        </label>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-start gap-4">
            <input
              type="checkbox"
              name="iscomments"
              id="iscomments"
              onChange={changehandler}
              checked={form.iscomments}
              className=" h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className="text-sm ">
              <label
                htmlFor="iscomments"
                className=" text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
              >
                Comments
              </label>
              <p className="text-sm whitespace-nowrap overflow-hidden dark:text-gray-500 font-medium text-gray-700">
                Get notified when someone post post
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start gap-4">
            <input
              type="checkbox"
              name="iscandidate"
              id="iscandidate"
              onChange={changehandler}
              checked={form.iscandidate}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className="text-sm ">
              <label
                htmlFor="iscandidate"
                className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
              >
                Candidate
              </label>
              <p className="text-sm whitespace-nowrap overflow-hidden dark:text-gray-500 font-medium text-gray-700">
                Get notified when a candidate applied for job
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start gap-4">
            <input
              type="checkbox"
              name="isoffers"
              id="isoffers"
              onChange={changehandler}
              checked={form.isoffers}
              className=" h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className="text-sm ">
              <label
                htmlFor="iscandidate"
                className="block text-sm mb-2 dark:text-gray-300 font-medium text-gray-700"
              >
                Offers
              </label>
              <p className="text-sm whitespace-nowrap overflow-hidden dark:text-gray-500 font-medium text-gray-700">
                Get notified when a candidate accepts or reject an offer
              </p>
            </div>
          </div>
        </div>
        <label className="block text-sm mb-1 mt-2 font-bold dark:text-gray-200  text-gray-700">
          Push Notifications
        </label>
        <p className="block text-sm mb-2  font- dark:text-gray-500  text-gray-700">
          These are delivered via SMS to your mobile phone.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="notification"
              id="iseverything"
              value="Everything"
              onChange={changehandler}
              checked={form.notification === "Everything"}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="iseverything"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Everything
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="notification"
              id="issameasemail"
              value="Same as Email"
              onChange={changehandler}
              checked={form.notification === "Same as Email"}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="issameasemail"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Same as Email
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="notification"
              id="nopushnotification"
              value="No push notification"
              onChange={changehandler}
              checked={form.notification === "No push notification"}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor="nopushnotification"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              No push notification
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="px-4 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </form>
    </div>
  );
}

export default App;
