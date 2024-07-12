import { Button } from "./ui/button";

export default function Featured() {
  return (
    <section className="md:py-20 py-10 container mx-auto text-center lg:grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col justify-center items-start lg:items-start text-left px-5 lg:px-0 space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
          From startup to enterprise, Asmit is built for every type of business.
        </h1>
        <p className="text-2xl md:text-xl bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent font-bold">
          Built for all businesses and communities, Asmit is the only platform
          you need to grow your business.
        </p>
        <Button className="bg-blue-500 text-white rounded-md text-lg font-bold transition-transform transform hover:scale-105">
          Start Business
        </Button>
      </div>
      <div className="pt-10 lg:pt-0 flex justify-center items-center">
        <video
          className="rounded-xl shadow-lg w-full max-w-2xl animate-fade-in"
          autoPlay
          muted
          loop
        >
          <source src="/hero4.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
