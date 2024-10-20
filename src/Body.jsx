import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import productImage1 from './assets/pic.jpg';
import productImage2 from './assets/pic.jpg';
import productImage3 from './assets/pic.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    image: productImage1,
    biddingPrice: 450,
    realPrice: 600,
  },
  {
    id: 2,
    name: 'Product 2',
    image: productImage2,
    biddingPrice: 400,
    realPrice: 550,
  },
  {
    id: 3,
    name: 'Product 3',
    image: productImage3,
    biddingPrice: 500,
    realPrice: 650,
  }
];

const Body = () => {
  const [timeLeft, setTimeLeft] = useState(600); // Countdown starts at 600 seconds (10 minutes)
  const [bid, setBid] = useState(''); // Store user's bid input
  const [submittedBids, setSubmittedBids] = useState([]); // Store submitted bids in a list
  const [maxBid, setMaxBid] = useState(500); // Maximum bidding price

  // Countdown logic
  useEffect(() => {
    if (timeLeft <= 0) return; // Stop countdown if it reaches 0
    const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timeLeft]);

  // Function to format the time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle bid submission
  const handleSubmitBid = () => {
    if (!bid) return;

    const bidValue = parseInt(bid, 10);

    // Add the new bid to the top of the list of submitted bids
    const newBids = [bidValue, ...submittedBids];

    // Update maximum bid if the new bid is higher
    if (bidValue > maxBid) {
      setMaxBid(bidValue);
    }

    setSubmittedBids(newBids);
    setBid(''); // Clear the input field
  };

  // Slider settings for swiping between products
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Slider {...settings} className="w-full max-w-5xl">
        {products.map((product) => (
          <div key={product.id}>
            {/* Card Container */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-2xl rounded-lg p-8 max-w-4xl w-full grid grid-cols-3 gap-6 transition-transform transform hover:scale-105">
              
              {/* Left Side: Product Image */}
              <div className="relative flex flex-col items-center">
                {/* Product Image */}
                <img 
                  src={product.image}  // Local image for each product
                  alt={product.name} 
                  className="w-56 h-72 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105"
                />
                
                {/* Real Price Overlay */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-lg shadow-md">
                  Real Price: ${product.realPrice}
                </div>

                {/* Live Bid Badge (below the image) */}
                <div className="mt-4 bg-red-600 text-white px-3 py-2 rounded-full flex items-center shadow-md">
                  <span className="animate-pulse mr-2 w-3 h-3 bg-white rounded-full"></span> {/* Pulsing circle */}
                  Live
                </div>
              </div>

              {/* Middle: Product Details and Bid Form */}
              <div className="flex flex-col justify-center items-center text-white">
                {/* Countdown Timer Above Product Name */}
                <div className="bg-blue-600 text-white px-4 py-2 rounded-md text-lg mb-4 shadow-md">
                  Time Left: {formatTime(timeLeft)} {/* Display remaining time */}
                </div>

                <h2 className="text-3xl font-extrabold mb-4">{product.name}</h2>
                <p className="text-xl mb-2">Bidding Price: <span className="font-bold text-green-400">${product.biddingPrice}</span></p>
                <p className="text-lg mb-6">Maximum Bidding Price: <span className="font-bold text-yellow-400">${maxBid}</span></p>

                {/* Bid Input and Button */}
                <div className="w-full">
                  <label className="block text-white text-sm mb-2">Your Bid:</label>
                  <input 
                    type="number" 
                    placeholder="Enter your bid" 
                    value={bid}
                    onChange={(e) => setBid(e.target.value)}
                    className="border rounded w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                  />
                  <button 
                    onClick={handleSubmitBid}
                    className="bg-yellow-400 text-black mt-3 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all w-full"
                  >
                    Submit Bid
                  </button>
                </div>
              </div>

              {/* Right Side: Recent Bids Flash (Live Chat Style) */}
              <div className="flex flex-col justify-start items-start space-y-2 text-white">
                <h3 className="font-bold text-lg mb-2">Recent Bids</h3>
                <div className="bg-gray-800 bg-opacity-75 p-4 rounded-md w-full h-48 overflow-y-auto">
                  {submittedBids.length === 0 && (
                    <p className="text-gray-300">No bids yet...</p>
                  )}
                  {submittedBids.map((bid, index) => (
                    <div key={index} className="bg-green-600 text-white px-4 py-2 rounded-md mb-2 shadow-md">
                      ${bid}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Body;
