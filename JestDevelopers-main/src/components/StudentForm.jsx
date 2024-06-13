import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [data, setData] = useState([]);

  const FormSubmit = async (values) => {
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

      const response = await axios.post('http://localhost:4444/auth/student-form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      alert("Your Data Submitted Successfully...");

      const newData = [...data, values];
      setData(newData);
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error submitting the form');
    }
  };
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        education: "",
        year: "",
        technologies: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        pdf_file: null,
      }}
      validationSchema={Yup.object({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        education: Yup.string().required("Education is required"),
        year: Yup.number().required("Year of Completion is required"),
        technologies: Yup.string().required("Technologies are required"),
        mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid phone number").required("Mobile number is required"),
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        pincode: Yup.string().matches(/^\d{6}$/, "Invalid Zip/Postal Code").required("Zip/Postal Code is required"),
        pdf_file: Yup.mixed().required("PDF file is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        FormSubmit(values);
        setSubmitting(false);
    }}
    >
      {({ setFieldValue }) => (
        <Form className="grid md:grid-cols-3 gap-10 mx-auto my-10 overflow-hidden shadow-md">
          <div className="col-span-1">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p className="font-thin">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl font-semibold mb-4 text-white">Contact Form</h1>
            <div className=" grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="first_name" className="block text-white font-medium mb-2">
                  First Name
                </label>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="John"
                />
                <ErrorMessage name="first_name" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-white font-medium mb-2">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Doe"
                />
                <ErrorMessage name="last_name" component="div" className="text-red-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="example@example.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className=" grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="education" className="block text-white font-medium mb-2">
                  Education
                </label>
                <Field
                  type="text"
                  id="education"
                  name="education"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="BTech"
                />
                <ErrorMessage name="education" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="year" className="block text-white font-medium mb-2">
                  Year of Completion
                </label>
                <Field
                  type="number"
                  id="year"
                  name="year"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="2024"
                />
                <ErrorMessage name="year" component="div" className="text-red-500" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="technologies" className="block text-white font-medium mb-2">
                  Technologies ready to work with
                </label>
                <Field
                  type="text"
                  id="technologies"
                  name="technologies"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Frontend / Backend"
                />
                <ErrorMessage name="technologies" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-white font-medium mb-2">
                  Mobile
                </label>
                <Field
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="9876543210"
                />
                <ErrorMessage name="mobile" component="div" className="text-red-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-white font-medium mb-2">
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="123, Main St, Fifth Avenue"
              />
              <ErrorMessage name="address" component="div" className="text-red-500" />
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-white font-medium mb-2">
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="New York"
                />
                <ErrorMessage name="city" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="state" className="block text-white font-medium mb-2">
                  State / Province
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="New York"
                />
                <ErrorMessage name="state" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-white font-medium mb-2">
                  Zip / Postal Code
                </label>
                <Field
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="123456"
                />
                <ErrorMessage name="pincode" component="div" className="text-red-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="pdf_file" className="block text-white font-medium mb-2">
                Upload PDF
              </label>
              <input
                id="pdf_file"
                name="pdf_file"
                type="file"
                accept=".pdf"
                onChange={(event) => {
                  setFieldValue("pdf_file", event.currentTarget.files[0]);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <small className="text-gray-500">Please upload a PDF file.</small>
              <ErrorMessage name="pdf_file" component="div" className="text-red-500" />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full md:w-40 bg-red-700 py-3 px-4 rounded-md text-center hover:bg-red-800 focus:outline-none focus:bg-red-800 float-end text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;
