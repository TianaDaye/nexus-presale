import React, { useState } from 'react';
import axios from 'axios';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import icons

const App = () => {
  const [price, setPrice] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState(''); // State for email input
  const [showFullText, setShowFullText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

    // Send email to backend
    axios
      .post('http://localhost:5000/send-email', { email })
      .then((response) => {
        alert('Your email was sent successfully!');
        closeModal(); // Close modal after success
      })
      .catch((error) => {
        alert('Failed to send email. Please try again.');
      });
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
              className={`w-72 h-auto rounded-lg border-4 border-white shadow-xl transform transition-all duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              src={isHovered ? "Paperback Cover Rev 2.jpg" : "bookcover.jpeg"}
              alt="Book Cover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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

      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 space-y-4 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Enter Your Email</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                className="p-3 border rounded-lg w-full"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
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

      {/* Social Media Links */}
      <footer className="bg-gray-800 text-white w-full py-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl mb-4">Let's Connect</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-400" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;