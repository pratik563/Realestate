import React from "react";
import Card from "./Card.jsx";
import portimage from "../images/white.jpg";

// Import images for cards
import image1 from "../images/card-1.jpg";
/* import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg"; */

const Portfolio = () => {
  const ongoingProjects = [
    {
      imageSrc: image1,
      title: "Skyline Avenue",
      description: "2 BHK Luxurious Homes @ Moshi",
    },
    {
      imageSrc: image1,
      title: "Moraya Enclave",
      description: "3 BHK luxurious Homes @ Sector 13 Pradhikaran",
    },
    {
      imageSrc: image1,
      title: "Ongoing Project 3",
      description: "Description of ongoing project 3",
    },
    /*{
      imageSrc: image1,
      title: "Ongoing Project 3",
      description: "Description of ongoing project 3",
    }, */
  ];

  const completedprojects = [
    {
      imageSrc: image1,
      title: "Meera Heights",
      description: "1 BHK Homes & Commercial spaces @ chikali",
    },
    {
      imageSrc: image1,
      title: "Madhuban",
      description: "Premium 1 & 2 BHK Homes @ Thergaon",
    },
    {
      imageSrc: image1,
      title: "Nilay Heights",
      description: "1 & 2 BHK Luxurious Homes @ Pradhikaran Annexe",
    },
    {
      imageSrc: image1,
      title: "Raj Angan",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali More Vasti",
    },
    {
      imageSrc: image1,
      title: "Vaishnav Residency",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
    },
    {
      imageSrc: image1,
      title: "Kunal Heritage",
      description: "2 BHK Luxurious Homes @ Sector 20 Pradhikaran",
    },
    /* {
      imageSrc: image1,
      title: "Vineet Heights",
      description: "1 & 2 BHK Luxurious Homes @ Sane Chowk",
    },
    {
      imageSrc: image1,
      title: "Samarth Srushti",
      description: "1 & 2 BHK Luxurious Homes @ Chikhali",
    }, */
  ];

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center p-8 w-full h-auto py-16 bg-white"
      style={{ backgroundImage: `url(${portimage})` }}
    >
      <h1 className="text-5xl font-bold text-blue-900 mb-8">Our Portfolio</h1>
      <h2 className="text-4xl font-semibold text-green-800 mb-8">
        Ongoing Projects
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ongoingProjects.map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <h2 className="text-4xl text-center font-semibold text-green-800 mb-8">
          Completed Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {completedprojects.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
