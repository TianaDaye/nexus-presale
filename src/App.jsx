import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  const [price, setPrice] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [showFullText, setShowFullText] = useState(false); // State to toggle full text

  const handlePurchase = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleFullText = () => {
    setShowFullText((prev) => !prev);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col items-center overflow-x-hidden">
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 w-full py-12 shadow-lg">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold animate__animated animate__fadeIn">
            (W+H)EALTH MINDSET ACTIVATED
          </h1>
          <p className="text-xl mt-4 animate__animated animate__fadeIn animate__delay-1s">
            Get your copy now! Limited time presale price: ${price}
          </p>
          <div className="mt-8 flex justify-center">
            <img
              className="w-72 h-auto rounded-lg border-4 border-white shadow-xl transform transition-all duration-300 hover:scale-110" // Added hover:scale-110
              src="bookcover.jpeg" // Keep the image static, no hover change
              alt="Book Cover"
            />
          </div>
          <button
            className="mt-8 px-8 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
            onClick={handlePurchase}
          >
            Buy Now
          </button>
        </div>
      </header>

      <main className="flex-grow w-full px-4 py-12">
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 animate__animated animate__fadeIn">
              About the Author
            </h2>
            <p className="text-lg text-gray-600">
              For 15 years, Aaron James provided banking and advising services at Fortune 100 Companies including Bank of America, Merrill, and J.P. Morgan before founding Nexus 360, LLC in 2024. He is passionate about empowering individuals to unlock their true potential and build wealth through a mindset of abundance and clarity.
            </p>
            {/* Conditionally render full text */}
            {showFullText && (
              <p className="text-lg text-gray-600 mt-4">
                Having qualified for the Series 7 and 66 licenses through FINRA, he also acquired the CRPC designation (Chartered Retirement Planning Counselor). He completed his postgraduate education with an MS in Financial Management at UMGC, and graduated cum laude with a BA in Psychology from UMBC. When he's not advising his clients, he conducts speaking engagements on financial literacy, develops real estate, volunteers at his home church, and spends time with his two kids, Zoey and Zayden. At Nexus 360, LLC, he educates his client with a (W+H)ealth Mindset Activation for financial freedom and goal achievement. He enjoys traveling, working out, history, and Sudoku Puzzles.
              </p>
            )}
            <a
              href="#"
              className="text-blue-600 hover:underline inline-block mt-2"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                toggleFullText();
              }}
            >
              {showFullText ? 'Read less' : 'Read more'}
            </a>
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-48 h-48 rounded-full border-4 border-gray-200 shadow-xl"
              src="author-photo.jpeg"
              alt="Author Photo"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">Contact</h2>
          <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
            <input
              className="p-3 border rounded-lg w-full"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="p-3 border rounded-lg w-full"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </section>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 space-y-4 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Payment Information</h3>
            <p className="text-gray-600">
              You can complete your purchase via Zelle. Please send the payment to the following Email:
            </p>
            <p className="font-bold text-gray-800">nexus360llc@gmail.com</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
