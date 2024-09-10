import { Carousel, Typography, Button } from "@material-tailwind/react";
import aboutimage from "../images/portfolio.jpg";
import heroImage from "../images/buildings.jpg";

export function Home2() {
  return (
    <Carousel className="">
      <div className="relative h-full w-full">
        <img
          src={aboutimage}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Where Quality Meets Excellence
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Moraya Group of Companies is a renowned name in the real estate
              development industry in Pimpri Chinchwad Municipal Corporation
              (PCMC). Established in 2005, We have been providing exceptional
              real estate services & building exclusive homes that meet the
              highest standards of quality & craftsmanship.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Projects
              </Button>
              <Button size="lg" color="white" variant="text">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={heroImage}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Morya Enclave
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Moraya Enclave offers premium living in Pune-Nashik highway with
              modern amenities and strategic location. Enjoy close proximity to
              facilities like gardens, playgrounds, and educational centers.
              Experience posh yet understated architecture.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
