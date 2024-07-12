import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/icon-fast.png",
    alt: "Fast",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/icon-journey.png",
    alt: "Integrations",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/icon-layer.png",
    alt: "Full Stack",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/icon-location.png",
    alt: "Loyalty",
  },
  {
    name: "Support",
    image: "/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Support",
  },
];

export default function ProductFeatured() {
  return (
    <section className="container mx-auto py-10 md:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-500">Product Features</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-40">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 border rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-105 shadow-lg"
          >
            <Image
              src={feature.image}
              alt={feature.alt}
              width={80}
              height={80}
              className="mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
              {feature.name}
            </h2>
            <p className="text-lg bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
