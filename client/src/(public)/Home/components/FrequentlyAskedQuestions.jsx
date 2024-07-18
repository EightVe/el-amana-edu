import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex items-center justify-center bg-white flex-col lg:h-[150vh] h-screen">
      <h1 className="text-center paragfont uppercase text-2xl lg:text-6xl pb-8 px-6">
        frequently asked <span className="text-[#aaaa9b]">questions</span>
      </h1>
      <div className="faq-container bg-white p-6 lg:w-1/3 w-full">
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(0)}
          >
            <h3 className="text-xl paragfont pr-3">What are ElAmana Group services?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 0 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 0 || hoveredIndex === 0
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 0 || hoveredIndex === 0
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 0 ? "auto" : 0,
              opacity: activeIndex === 0 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              We aim to provide educational consultations based on our long experience in guiding students to choose the major and university that guarantees their success in the future. We carry out the registration process in Turkish universities, including ensuring that the student obtains university admission, and we follow all necessary procedures until he becomes an official university student.
            </p>
          </motion.div>
        </div>
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(1)}
          >
            <h3 className="text-xl paragfont pr-3">How can I track my application status?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 1 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 1 || hoveredIndex === 1
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 1 || hoveredIndex === 1
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 1 ? "auto" : 0,
              opacity: activeIndex === 1 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              You can track your application status through our online portal or by contacting our customer service.
            </p>
          </motion.div>
        </div>
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(2)}
          >
            <h3 className="text-xl pr-3 paragfont">What documents are required for registration?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 2 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 2 || hoveredIndex === 2
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 2 || hoveredIndex === 2
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 2 ? "auto" : 0,
              opacity: activeIndex === 2 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              Required documents include your academic transcripts, identification, and any other relevant certificates. A complete list will be provided upon application.
            </p>
          </motion.div>
        </div>
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(3)}
          >
            <h3 className="text-xl paragfont pr-3">Can I change my major after registration?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 3 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 3 || hoveredIndex === 3
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 3 || hoveredIndex === 3
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 3 ? "auto" : 0,
              opacity: activeIndex === 3 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              Yes, you can change your major after registration. However, certain conditions and deadlines apply. Please consult with our academic advisors for more details.
            </p>
          </motion.div>
        </div>
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(4)}
          >
            <h3 className="text-xl paragfont pr-3">What are the tuition fees?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 4 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 4 || hoveredIndex === 4
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 4 || hoveredIndex === 4
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 4 ? "auto" : 0,
              opacity: activeIndex === 4 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              Tuition fees vary depending on the university and program. We provide a detailed fee structure during the consultation process.
            </p>
          </motion.div>
        </div>
        <div
          className="faq-item mb-4 border-b pb-2"
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className="faq-question flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(5)}
          >
            <h3 className="text-xl paragfont pr-3">Do you offer scholarships?</h3>
            <motion.div
              initial={false}
              animate={{ rotate: activeIndex === 5 ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`p-1.5 rounded-full transition-colors duration-300 ${
                activeIndex === 5 || hoveredIndex === 5
                  ? "bg-[#aaaa9b]"
                  : "bg-transparent"
              }`}
            >
              <FaChevronDown
                className={`transition-colors duration-300 ${
                  activeIndex === 5 || hoveredIndex === 5
                    ? "text-white"
                    : "text-black"
                }`}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === 5 ? "auto" : 0,
              opacity: activeIndex === 5 ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 paragfont text-lg">
              Yes, we offer scholarships to eligible students based on merit and financial need. Please contact us for more information on available scholarships and how to apply.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
