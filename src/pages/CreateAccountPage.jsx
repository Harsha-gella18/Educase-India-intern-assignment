import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccountPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Create your</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">PopX account</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Company name</label>
            <input
              type="text"
              name="companyName"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  className="mr-2"
                  checked={formData.isAgency === "yes"}
                  onChange={() => handleRadioChange("yes")}
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  className="mr-2"
                  checked={formData.isAgency === "no"}
                  onChange={() => handleRadioChange("no")}
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;