import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-[#011a42] text-white">
      {/* Ensure all images are the same size */}
      <img className="w-full h-64 object-cover" src={imageSrc} alt={title} />
      <div className="px-6 text-center py-4">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
        <div className="block items-center mt-4">
          <a
            href="#"
            className="inline-block bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
