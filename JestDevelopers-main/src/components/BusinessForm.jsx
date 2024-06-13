import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const BusinessForm = () => {
    const [data, setData] = useState([]);

    const FormSubmit = async (values) => {
        try {

            const response = await axios.post('http://localhost:4444/auth/business-form', values);
            alert(response.data.message);


            const newData = [...data, values];
            setData(newData);


        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error submitting the form');
        }
    };

    return (
        <div className="grid md:grid-cols-3 gap-10 mx-auto my-10 overflow-hidden shadow-md">
            <div className="flex flex-col col-span-1">
                <div>
                    <h2 className="text-xl font-semibold mb-8">Personal Information</h2>
                    <p className="font-thin">Use a permanent address where you can receive mail.</p>
                </div>
                <img
                    src="src/assets/form.png"
                    alt="Form-Image"
                    className="w-80 h-80 my-20 hidden md:block lg:block "
                />
            </div>
            <div className="col-span-2">
                <h1 className="text-xl font-semibold mb-8 text-white">Contact Form</h1>

                <Formik
                    initialValues={{
                        first_name: "",
                        last_name: "",
                        email: "",
                        company_name: "",
                        field: "",
                        budget: "",
                        mobile: "",
                        address: "",
                        city: "",
                        state: "",
                        pincode: "",
                    }}

                    validationSchema={Yup.object({
                        first_name: Yup.string().required("First Name is required"),
                        last_name: Yup.string().required("Last Name is required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Email is required"),
                        company_name: Yup.string().required("Company Name is required"),
                        field: Yup.string().required("Field is required"),
                        budget: Yup.number().required("Budget is required"),
                        mobile: Yup.string()
                            .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
                            .required("Mobile number is required"),
                        address: Yup.string().required("Address is required"),
                        city: Yup.string().required("City is required"),
                        state: Yup.string().required("State/Province is required"),
                        pincode: Yup.string()
                            .matches(/^\d{6}$/, "Invalid Pincode")
                            .required("Pincode is required"),
                    })}

                    onSubmit={(values, { setSubmitting }) => {
                        FormSubmit(values);
                        setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="">
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
                                <ErrorMessage
                                    name="first_name"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="">
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
                                <ErrorMessage
                                    name="last_name"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className="mb-8">
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
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="">
                                <label htmlFor="company_name" className="block text-white font-medium mb-2">
                                    Company Name
                                </label>
                                <Field
                                    type="text"
                                    id="company_name"
                                    name="company_name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    placeholder="ABC Company"
                                />
                                <ErrorMessage
                                    name="company_name"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="field" className="block text-white font-medium mb-2">
                                    Field
                                </label>
                                <Field
                                    type="text"
                                    id="field"
                                    name="field"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    placeholder="E-Commerce / Medical / Real Estate"
                                />
                                <ErrorMessage
                                    name="field"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="">
                                <label htmlFor="budget" className="block text-white font-medium mb-2">
                                    Estimated Budget
                                </label>
                                <Field
                                    type="number"
                                    id="budget"
                                    name="budget"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                    placeholder="20000 - 30000"
                                />
                                <ErrorMessage
                                    name="budget"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="">
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
                                <ErrorMessage
                                    name="mobile"
                                    component="div"
                                    className="text-red-500"
                                />
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
                                placeholder="123 Main St Fifth Evenue"
                            />
                            <ErrorMessage
                                name="address"
                                component="div"
                                className="text-red-500"
                            />
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
                                <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="text-red-500"
                                />
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
                                <ErrorMessage
                                    name="state"
                                    component="div"
                                    className="text-red-500"
                                />
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
                                <ErrorMessage
                                    name="pincode"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full md:w-40 bg-red-700 py-3 px-4 rounded-md text-center hover:bg-red-800 focus:outline-none focus:bg-red-800 float-end text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default BusinessForm;


// ADD TO GOOGLE SHEET

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const BusinessForm = () => {
//     const handleFormSubmit = async (values) => {
//         try {
//             const response = await fetch('https://script.google.com/macros/s/AKfycbwa4EOYl2Vq9CAk8micje7_Hd-VotrNIZjR0jAxd7HEOiJiz2J8AJV-ZyoIy2Pag8Y/exec', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(values),
//             });
    
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
    
//             const result = await response.json();
    
//             if (result.result === 'success') {
//                 alert("Data has been successfully sent to Google Sheets");
//             } else {
//                 alert("Failed to send data to Google Sheets");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Error sending data to Google Sheets");
//         }
//     };
    

//     return (
//         <div className="grid md:grid-cols-3 gap-10 mx-auto my-10 overflow-hidden shadow-md">
//             <div className="flex flex-col col-span-1">
//                 <div>
//                     <h2 className="text-xl font-semibold mb-8">Personal Information</h2>
//                     <p className="font-thin">Use a permanent address where you can receive mail.</p>
//                 </div>
//                 <img
//                     src="src/assets/form.png"
//                     alt="Form-Image"
//                     className="w-80 h-80 my-20 hidden md:block lg:block"
//                 />
//             </div>
//             <div className="col-span-2">
//                 <h1 className="text-xl font-semibold mb-8 text-white">Contact Form</h1>
//                 <Formik
//                     initialValues={{
//                         first_name: "",
//                         last_name: "",
//                         email: "",
//                         company_name: "",
//                         field: "",
//                         budget: "",
//                         mobile: "",
//                         address: "",
//                         city: "",
//                         state: "",
//                         pincode: "",
//                     }}
//                     validationSchema={Yup.object({
//                         first_name: Yup.string().required("First Name is required"),
//                         last_name: Yup.string().required("Last Name is required"),
//                         email: Yup.string().email("Invalid email address").required("Email is required"),
//                         company_name: Yup.string().required("Company Name is required"),
//                         field: Yup.string().required("Field is required"),
//                         budget: Yup.number().required("Budget is required"),
//                         mobile: Yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number").required("Mobile number is required"),
//                         address: Yup.string().required("Address is required"),
//                         city: Yup.string().required("City is required"),
//                         state: Yup.string().required("State/Province is required"),
//                         pincode: Yup.string().matches(/^\d{6}$/, "Invalid Pincode").required("Pincode is required"),
//                     })}
//                     onSubmit={(values, { setSubmitting }) => {
//                         handleFormSubmit(values);
//                         setSubmitting(false);
//                     }}
//                 >
//                     <Form>
//                         <div className="grid md:grid-cols-2 gap-4 mb-4">
//                             <div className="">
//                                 <label htmlFor="first_name" className="block text-white font-medium mb-2">
//                                     First Name
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="first_name"
//                                     name="first_name"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="John"
//                                 />
//                                 <ErrorMessage name="first_name" component="div" className="text-red-500" />
//                             </div>
//                             <div className="">
//                                 <label htmlFor="last_name" className="block text-white font-medium mb-2">
//                                     Last Name
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="last_name"
//                                     name="last_name"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="Doe"
//                                 />
//                                 <ErrorMessage name="last_name" component="div" className="text-red-500" />
//                             </div>
//                         </div>
//                         <div className="mb-8">
//                             <label htmlFor="email" className="block text-white font-medium mb-2">
//                                 Email Address
//                             </label>
//                             <Field
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                 placeholder="example@example.com"
//                             />
//                             <ErrorMessage name="email" component="div" className="text-red-500" />
//                         </div>
//                         <div className="grid md:grid-cols-2 gap-4 mb-4">
//                             <div className="">
//                                 <label htmlFor="company_name" className="block text-white font-medium mb-2">
//                                     Company Name
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="company_name"
//                                     name="company_name"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="ABC Company"
//                                 />
//                                 <ErrorMessage name="company_name" component="div" className="text-red-500" />
//                             </div>
//                             <div className="">
//                                 <label htmlFor="field" className="block text-white font-medium mb-2">
//                                     Field
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="field"
//                                     name="field"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="E-Commerce / Medical / Real Estate"
//                                 />
//                                 <ErrorMessage name="field" component="div" className="text-red-500" />
//                             </div>
//                         </div>
//                         <div className="grid md:grid-cols-2 gap-4 mb-4">
//                             <div className="">
//                                 <label htmlFor="budget" className="block text-white font-medium mb-2">
//                                     Estimated Budget
//                                 </label>
//                                 <Field
//                                     type="number"
//                                     id="budget"
//                                     name="budget"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="20000 - 30000"
//                                 />
//                                 <ErrorMessage name="budget" component="div" className="text-red-500" />
//                             </div>
//                             <div className="">
//                                 <label htmlFor="mobile" className="block text-white font-medium mb-2">
//                                     Mobile
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="mobile"
//                                     name="mobile"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="9876543210"
//                                 />
//                                 <ErrorMessage name="mobile" component="div" className="text-red-500" />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="address" className="block text-white font-medium mb-2">
//                                 Address
//                             </label>
//                             <Field
//                                 type="text"
//                                 id="address"
//                                 name="address"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                 placeholder="123 Main St Fifth Avenue"
//                             />
//                             <ErrorMessage name="address" component="div" className="text-red-500" />
//                         </div>
//                         <div className="grid md:grid-cols-3 gap-4 mb-4">
//                             <div>
//                                 <label htmlFor="city" className="block text-white font-medium mb-2">
//                                     City
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="city"
//                                     name="city"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="New York"
//                                 />
//                                 <ErrorMessage name="city" component="div" className="text-red-500" />
//                             </div>
//                             <div>
//                                 <label htmlFor="state" className="block text-white font-medium mb-2">
//                                     State / Province
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="state"
//                                     name="state"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="New York"
//                                 />
//                                 <ErrorMessage name="state" component="div" className="text-red-500" />
//                             </div>
//                             <div>
//                                 <label htmlFor="pincode" className="block text-white font-medium mb-2">
//                                     Zip / Postal Code
//                                 </label>
//                                 <Field
//                                     type="text"
//                                     id="pincode"
//                                     name="pincode"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                                     placeholder="123456"
//                                 />
//                                 <ErrorMessage name="pincode" component="div" className="text-red-500" />
//                             </div>
//                         </div>
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </Form>
//                 </Formik>
//             </div>
//         </div>
//     );
// };

// export default BusinessForm;




// import { useFormik } from "formik";
// import * as Yup from "yup";
// const BusinessForm = () => {
//   var formik = useFormik({
//     initialValues: {
//       fullname: "",
//       email: "",
//       businessname: "",
//       fieldname: "",
//       mobile: "",
//       budget: "",
//       address: "",
//     },
//     validationSchema: Yup.object({
//       fullname: Yup.string().required("Mandatory Field!"),
//       email: Yup.string().required("Email required!"),
//       businessname: Yup.string().required("Mandatory Field!"),
//       fieldname: Yup.string().required("Mandatory Field!"),
//       mobile: Yup.string()
//         .min(10, "Should be 10 digits!")
//         .max(10, "10 digits only!")
//         .matches(/^[6-9]\d{9}$/, "Invalid mobile number!")
//         .required("A phone number is required!"),
//       budget: Yup.number().required("Mandatory Field!"),
//       city: Yup.string().required("Mandatory Field!"),
//       pincode: Yup.string()
//         .min(6, "Should be 6 digits!")
//         .max(6, "6 digits only!")
//         .matches(/^[6-9]\d{9}$/, "Invalid Pincode!")
//         .required("Pincode is required!"),
//     }),
//     onSubmit: (values) => {
//       setSubmitted(true);
//       console.log(values);
//     },
//   });
//   return (
//     <div className="grid md:grid-cols-3 gap-10 mx-auto my-10 overflow-hidden shadow-md">
//       <div className="flex flex-col col-span-1">
//         <div>
//           <h2 className="text-xl font-semibold mb-8">Personal Information</h2>
//           <p className="font-thin">
//             Use a permanent address where you can receive mail.
//           </p>
//         </div>
//         <img
//           src="src\assets\form.png"
//           alt="Form-Image"
//           className="w-80 h-80 my-20 hidden md:block lg:block "
//         />
//       </div>
//       <div className="col-span-2">
//         <h1 className="text-xl font-semibold mb-8 text-white">Contact Form</h1>
//         <form action="#" method="POST">
//           <div className=" grid md:grid-cols-2 gap-4 mb-8">
//             <div className="">
//               <label
//                 htmlFor="first_name"
//                 className="block text-white font-medium mb-2"
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="first_name"
//                 name="first_name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="John   "
//                 required
//               />
//             </div>
//             <div className="">
//               <label
//                 htmlFor="last_name"
//                 className="block text-white font-medium mb-2"
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="last_name"
//                 name="last_name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="Doe"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-8">
//             <label
//               htmlFor="email"
//               className="block text-white font-medium mb-2"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//               placeholder="example@example.com"
//               required
//             />
//           </div>
//           <div className=" grid md:grid-cols-2 gap-4 mb-8">
//             <div className="">
//               <label
//                 htmlFor="company_name"
//                 className="block text-white font-medium mb-2"
//               >
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 id="company_name"
//                 name="company_name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="ABC Company"
//                 required
//               />
//             </div>
//             <div className="">
//               <label
//                 htmlFor="field"
//                 className="block text-white font-medium mb-2"
//               >
//                 Field
//               </label>
//               <input
//                 type="text"
//                 id="field"
//                 name="field"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="E-Commerce / Medical / Real Estate"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4 mb-8">
//             <div className="">
//               <label
//                 htmlFor="budget"
//                 className="block text-white font-medium mb-2"
//               >
//                 Estimated Budget
//               </label>
//               <input
//                 type="number"
//                 id="budget"
//                 name="budget"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="20,000 - 30,000"
//                 required
//               />
//             </div>
//             <div className="">
//               <label
//                 htmlFor="mobile"
//                 className="block text-white font-medium mb-2"
//               >
//                 Mobile
//               </label>
//               <input
//                 type="number"
//                 id="mobile"
//                 name="mobile"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="9876543210"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-8">
//             <label
//               htmlFor="address"
//               className="block text-white font-medium mb-2"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//               placeholder="123 Main St Fifth Evenue"
//               required
//             />
//           </div>
//           <div className="grid md:grid-cols-3 gap-4 mb-8">
//             <div>
//               <label
//                 htmlFor="city"
//                 className="block text-white font-medium mb-2"
//               >
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="New York"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="state"
//                 className="block text-white font-medium mb-2"
//               >
//                 State / Province
//               </label>
//               <input
//                 type="text"
//                 id="state"
//                 name="state"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="New York"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="pincode"
//                 className="block text-white font-medium mb-2"
//               >
//                 Zip / Postal Code
//               </label>
//               <input
//                 type="number"
//                 id="pincode"
//                 name="pincode"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
//                 placeholder="123456"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="w-full md:w-40 bg-red-700 py-3 px-4 rounded-md  text-center hover:bg-red-800 focus:outline-none focus:bg-red-800 float-end  text-white"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BusinessForm;
