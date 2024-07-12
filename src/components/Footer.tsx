import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full py-10 md:py-20">
      <div className=" container mx-auto text-center space-y-6 md:space-y-10">
        <h1 className="font-bold text-4xl">
          Start building your online store today.
        </h1>
        <p className="text-lg font-semibold max-w-2xl mx-auto">
          Curious about how Asmit can help your business? Get in touch with our
          team to learn more about our platform and how we can help you grow
          your business.
        </p>
        <Button className="py-3 px-8 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition">
          Contact Sales
        </Button>
        <div className="pt-24">
          <p className="font-bold text-md">
            All rights reserved. &copy;{new Date().getFullYear()} by Asmit Pvt
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
