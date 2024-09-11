// src/components/ContactUs.jsx
import React, { useState } from 'react';
import MyNavbar from '../../components/MyNavbar';
import MyFooter from '../../components/MyFooter';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a backend or API)
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form fields after submission
  };

  return (
    <div>
        <MyNavbar/>
        <div className="contact-container mt-[130px] py-10 px-5">
          <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
          <p className="text-lg text-center mb-10">
            We'd love to hear from you! If you have any questions, feedback, or inquiries, feel free to get in touch with us using the form below.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
              Send Message
            </button>
          </form>
          <div className="contact-info mt-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">Our Contact Information</h2>
            <p>Email: support@babyhome.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 BabyHome St, City, Country</p>
          </div>
        </div>
        <MyFooter/>
    </div>
  );
};

export default ContactUs;
