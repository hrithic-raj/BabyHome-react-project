import React from 'react';
import MyFooter from '../../components/MyFooter';
import MyNavbar from '../../components/MyNavbar';

const PrivacyPolicy = () => {
  return (
        <div>
            <MyNavbar/>
            <div className="bg-gray-100 py-10 px-6 mt-[130px]">
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
                    
                    <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Information We Collect</h2>
                    <p className="text-gray-600">
                        We collect personal information that you provide to us when you use our website. This may include your name, email address, shipping address, and payment details. We use this information to process your orders and improve our services.
                    </p>
                    </section>

                    <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">How We Use Your Information</h2>
                    <p className="text-gray-600">
                        We use your personal information to process transactions, provide customer service, and send you updates about your orders. We do not sell or share your personal information with third parties for marketing purposes.
                    </p>
                    </section>

                    <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Security of Your Information</h2>
                    <p className="text-gray-600">
                        We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.
                    </p>
                    </section>

                    <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Rights</h2>
                    <p className="text-gray-600">
                        You have the right to request access to the personal information we hold about you and request corrections or deletions. You can also opt out of receiving promotional emails from us at any time.
                    </p>
                    </section>
                </div>
            </div>
            <MyFooter/>
        </div>
    );
};

export default PrivacyPolicy;
