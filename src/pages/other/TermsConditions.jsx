import React from 'react';
import MyNavbar from '../../components/MyNavbar';
import MyFooter from '../../components/MyFooter';

const TermsAndConditions= () => {
  return (
    <div>
        <MyNavbar/>
            <div className="bg-gray-100 py-10 px-6 mt-[130px]">
            <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
                
                <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Introduction</h2>
                <p className="text-gray-600">
                    Welcome to Baby Home. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully before using our services.
                </p>
                </section>

                <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Use of Our Website</h2>
                <p className="text-gray-600">
                    You agree to use this website only for lawful purposes and in accordance with these terms. Any unauthorized use of the website may result in the termination of your access to our services.
                </p>
                </section>

                <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Intellectual Property</h2>
                <p className="text-gray-600">
                    All content on this website, including text, graphics, logos, images, and software, is the property of Baby Home and protected by copyright laws. Unauthorized use of our content is strictly prohibited.
                </p>
                </section>

                <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Changes to Terms</h2>
                <p className="text-gray-600">
                    Baby Home reserves the right to update these terms at any time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the new terms.
                </p>
                </section>
            </div>
            </div>
            <MyFooter/>
    </div>
  );
};

export default TermsAndConditions;
