import Footer from '../compoents/Footer';
import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from '../compoents/Navbar';
const Contact = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar color="black" name="Contact Us" />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please check the first name you have entered';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please check the last name you have entered';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid Email ID e.g. abc@abc.com';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid Email ID e.g. abc@abc.com';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <div>
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                FIRST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 border-0 border-b-2 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:outline-none bg-transparent text-gray-800`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 border-0 border-b-2 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:outline-none bg-transparent text-gray-800`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                EMAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 border-0 border-b-2 ${
                  errors.email ? 'border-red-500' : 'border-blue-500'
                } focus:border-blue-500 focus:outline-none bg-transparent text-gray-800`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                PHONE NUMBER <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full px-0 py-3 border-0 border-b-2 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-800'
                } focus:border-blue-500 focus:outline-none bg-transparent text-gray-800`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                COMPANY NAME
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-800 focus:border-blue-500 focus:outline-none bg-transparent text-gray-800"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 transition-colors duration-200"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Information */}
        <div className="lg:pl-8">
          {/* Phone */}
          <div className="flex items-center mb-6">
            <Phone className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-gray-800 font-medium">+91 993 717 5522</span>
          </div>

          {/* Email */}
          <div className="flex items-center mb-8">
            <Mail className="w-5 h-5 text-gray-600 mr-3" />
            <span className="text-gray-800 font-medium">
              contact@lejhro.com
            </span>
          </div>

          {/* Mailing Address */}
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-4">
              Mailing Address
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-2">Lejhro Technology Pvt. Ltd.</p>
              <p className="mb-2">LB 193, Bhimatangi, Phase II,</p>
              <p>Bhubaneswar 751002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
