import React from "react";
import Image from "next/image";

const partners = [
  { name: "Harvard University", location: "USA" },
  { name: "Oxford University", location: "UK" },
  { name: "Toyota Corporation", location: "Japan" },
];

const successStories = [
  { title: "Renewable Energy Initiative", description: "A collaboration with Oxford University that led to a breakthrough in solar energy storage." },
  { title: "Ocean Cleanup Project", description: "Partnering with Toyota Corporation to remove plastic waste from the Pacific Ocean." },
];

export default function GlobalPartnership() {
  return (
    <div className="bg-blue-50 min-h-screen p-8 text-blue-900">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Global Partnerships</h1>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Interactive Map of Global Partners</h2>
        <p>Explore our network of universities, research institutes, and corporate partners.</p>
        <div className="mt-4 bg-gray-200 w-full h-64 flex items-center justify-center">[Interactive Map Placeholder]</div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Success Stories</h2>
        <div className="space-y-4 mt-4">
          {successStories.map((story, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700">{story.title}</h3>
              <p className="text-blue-900">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Partnership Inquiry Form</h2>
        <form className="space-y-4 mt-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 border rounded h-24"></textarea>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Guidelines for New Partnerships</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Partners must align with our mission of environmental protection.</li>
          <li>Commitment to long-term collaboration and impact-driven initiatives.</li>
          <li>Adherence to ethical and sustainability guidelines.</li>
        </ul>
      </section>
    </div>
  );
}
