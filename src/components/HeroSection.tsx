import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-100 to-gray-200 space-y-10">
      <div className="container mx-auto text-center">
        <div className="text-6xl font-bold md:px-20 pb-10 bg-gradient-to-r from-blue-500 to-green-300 text-transparent bg-clip-text animate-fade-in">
          Build a brand and start selling in seconds
        </div>

        <p className="text-lg md:text-xl md-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold animate-fade-in">
          No matter what you sell, Asmit Software has everything you need to run
          your online store.
        </p>

        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-blue-500 text-white px-10 py-6 rounded-md text-lg font-bold transition-transform transform hover:scale-105">
            Get Started
          </Button>
          <Button className="bg-black text-white px-10 py-6 rounded-md text-lg font-bold transition-transform transform hover:scale-105">
            Learn More
          </Button>
        </div>

        <div className="pt-10">
          <video
            className="rounded-xl shadow-lg w-full max-w-5xl mx-auto animate-fade-in"
            autoPlay
            muted
            loop
          >
            <source src="/hero3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
