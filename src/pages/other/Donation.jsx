import React from 'react';
import { FaDonate } from 'react-icons/fa';
import MyNavbar from '../../components/MyNavbar';
import MyFooter from '../../components/MyFooter';
// import missionImage from '../Assets/mission.jpg'; // Add a mission-related image here
// import educationImage from '../Assets/education.jpg'; // Add a second image for education

const Donation = () => {
  return (
    <div>
        <MyNavbar/>
        <div className="bg-gray-100 py-10 px-6 mt-[130px]">
        {/* Mission Section */}
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
            <p className="text-lg text-gray-600">
                Our mission is to ensure that no child goes to bed hungry and to support the education of underprivileged children. Together, we can make a difference by donating to provide meals and educational resources for these children in need.
            </p>
            </div>

            {/* Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="overflow-hidden rounded-lg">
                <img src="https://imagesvs.oneindia.com/img/2021/10/rooti1-1635162889.jpg" alt="Our Mission" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg">
                <img src="https://www.narayanseva.org/wp-content/uploads/2022/10/14-help-poor-children-1.jpg" alt="Education for Children" className="w-full h-64 object-cover" />
            </div>
            </div>

            {/* Donation Call-to-Action */}
            <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Help Us Make a Difference</h2>
            <p className="text-lg text-gray-600 mb-8">
                With your help, we can provide food and education to children in need. Every donation counts, and even the smallest contribution can have a huge impact on their lives.
            </p>

            {/* Donation Button */}
            <button
                className="bg-pink-500 text-white py-3 px-6 rounded-lg text-lg flex items-center justify-center mx-auto hover:bg-pink-600 transition duration-300"
                onClick={() => alert('Thank you for your kindness')}
            >
                <FaDonate className="mr-2" size={24} />
                Donate Now
            </button>
            </div>
        </div>
        </div>
        <MyFooter/>
    </div>
  );
};

export default Donation;
