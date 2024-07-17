import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
   <div id="contact" className="w-[1348px]">
     <div className="mt-10 mb-20">
        <h1 className="flex justify-center items-center text-black font-semibold text-[50px] mt-5 mb-7 dark:text-white">Contact
        <span className=" text-black ml-3 text-[45px] font-bold dark:text-white" >Us</span></h1>
        <p className="flex justify-center items-center text-center text-xl mr-[350px] ml-[350px] text-gray-600 dark:text-white">
          It is a long established fact that a reader will be of a page when established fact looking at its layout.
        </p>
      </div>
    <div  className="flex justify-center items-center bg-gray-100 p-10">
      <div className="flex flex-row md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
        <div className="space-x-3">
          <FaPhone className="text-orange-500" />
          <div>
            <p className="font-bold">Call Us On</p>
            <p>+985 123 7856</p>
          </div>
        </div>
        <div className="space-x-3">
          <FaEnvelope className="text-orange-500" />
          <div>
            <p className="font-bold">Email Us At</p>
            <p>Website.Kerri@gmail.com</p>
          </div>
        </div>
        <div className="space-x-3">
          <FaMapMarkerAlt className="text-orange-500" />
          <div>
            <p className="font-bold">Visit Office</p>
            <p>202, Grasselli Street, Conway.</p>
          </div>
        </div>
      </div>
    </div>
    {/* Contact the form */} 
    <div className="flex justify-center items-center bg-gray-100 p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="subject">
            Your Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Your Subject"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            {...register('message', { required: 'Message is required' })}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:ring-0 rounded">
            Send Message
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Contact;
 





   