import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

import Navbar from '../compoents/Navbar';
import Footer from '../compoents/Footer';
import invest from '../../public/invest.png';
import fixdepositefirstpart from '../../public/fixdepositefirstpart.png';
import depositesecondpart from '../../public/depositesecondpart.png'
import howtoapply from '../../public/howtoapply.png'
import Interestandcharges from '../../public/Interestandcharges.png'
const FinancialService = () => {
  return (
    <>
      <div>
        <Navbar color="#d6932c" name="Financial Services"></Navbar>
        <div>
          <img src={invest} alt="" />
        </div>
        <div>
            <img src={fixdepositefirstpart} alt="" />
           <img src={depositesecondpart} alt="" />
        </div>
        <div>
            <img src={howtoapply} alt="" />
        </div>
        <div>
            <img src={Interestandcharges} alt="" />
        </div>
        <div className='bg-white mb-[-50px]'>
            <FAQComponent/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FinancialService;



const FAQComponent = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "Can I add funds to my Fixed Deposit?",
      answer: "No, funds cannot be added at any time of the tenure once your FD is booked."
    },
    {
      id: 2,
      question: "How will I receive the interest amount?",
      answer: "The interest on FD will be credited to your registered bank account"
    },
    {
      id: 3,
      question: "What is a maturity date?",
      answer: "A maturity date is when all funds due are paid into your nominated account."
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-[50vw] mx-auto p-6 bg-white">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        FAQs
      </h1>
      
      <div className="space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <div className="flex-shrink-0">
                {expandedItems[item.id] ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </div>
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-lg text-gray-700 font-medium pr-4">
                {item.question}
              </span>
              
            </button>
            
            {expandedItems[item.id] && (
              <div className="pb-4 pl-0 pr-8">
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};