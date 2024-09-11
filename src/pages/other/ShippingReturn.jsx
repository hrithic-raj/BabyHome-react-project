import React from 'react';
import MyNavbar from '../../components/MyNavbar';
import MyFooter from '../../components/MyFooter';

const ShippingAndReturns = () => {
  return (
    <div>
        <MyNavbar/>
        <div className="bg-gray-100 py-10 px-6 mt-[130px]">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Shipping & Returns</h1>
            
            <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Shipping Policy</h2>
            <p className="text-gray-600">
                We offer shipping across the country for all our products. Orders are typically processed within 2-3 business days and shipped through our trusted partners. Shipping times may vary depending on your location. You will receive a confirmation email with tracking details once your order has been shipped.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Return Policy</h2>
            <p className="text-gray-600">
                If you are not completely satisfied with your purchase, you can return it within 30 days of the delivery date. Items must be unused, in their original packaging, and accompanied by proof of purchase. To initiate a return, please contact our customer service team at returns@babyhome.com for further instructions.
            </p>
            </section>

            <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Refunds</h2>
            <p className="text-gray-600">
                Once we receive and inspect your returned item, we will notify you via email of the status of your refund. If approved, the refund will be processed within 7-10 business days to your original payment method.
            </p>
            </section>
        </div>
        </div>
        <MyFooter/>
    </div>
  );
};

export default ShippingAndReturns;
