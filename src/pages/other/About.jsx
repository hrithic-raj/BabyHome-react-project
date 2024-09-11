// src/components/About.jsx
import React from 'react';
import MyNavbar from '../../components/MyNavbar';
import babypic from '../../Assets/Main/about.jpg';
import MyFooter from '../../components/MyFooter';
const About = () => {
  return (
    <div>
        <MyNavbar/>
        <div className="about-container py-10 px-5 mt-[140px] xl:ms-[100px] xl:me-[100px]">
          <h1 className="text-3xl font-bold text-center mb-10">About BabyHome</h1>
          <p className="text-lg mb-4">
            Welcome to <strong>BabyHome</strong>, your trusted destination for high-quality baby products. We know how important it is for parents to have access to safe, reliable, and affordable products for their little ones, and that's why we offer a wide range of items—from clothing and toys to feeding essentials and more.
          </p>
          <p className="text-lg mb-4">
            At BabyHome, we are committed to making parenting easier by providing the best products to help you take care of your baby. All of our items are carefully selected to meet the highest standards of quality and safety.
          </p>
          <div className='flex'>
            <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to bring joy and convenience to parents by offering a seamless shopping experience and delivering products that support the growth and happiness of your baby.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-lg">
            <li className="mb-2">High-quality products from trusted brands</li>
            <li className="mb-2">Affordable prices and great deals</li>
            <li className="mb-2">Fast and reliable shipping</li>
            <li className="mb-2">Exceptional customer service</li>
          </ul>
          </div>
          <div className='hidden xl:flex'>
            <img src={babypic} className='w-[100rem] rounded' alt="about"/>
          </div>
          </div>
          <p className="text-lg mt-8">
            Thank you for choosing <strong>BabyHome</strong>. We look forward to serving you and your family!
          </p>
        </div>
        <MyFooter/>
    </div>
  );
};

export default About;
