import React from "react";
import Image from "next/image";

const leadershipTeam = [
  { name: "John Doe", role: "CEO", image: "/john.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/jane.jpg" },
  { name: "Alice Johnson", role: "CFO", image: "/alice.jpg" },
];

const faqs = [
  { question: "What does GEPO stand for?", answer: "GEPO stands for Global Environmental Protection Organization." },
  { question: "How can I get involved?", answer: "You can join our volunteer programs or donate to support our cause." },
];

export default function About() {
  return (
    <div className="bg-blue-50 min-h-screen p-8 text-blue-900">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">About GEPO</h1>
      </section>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Our Vision</h2>
        <p>To create a sustainable and environmentally responsible world for future generations.</p>
      </div>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
        <p>Empowering communities through education, conservation, and policy advocacy to protect the environment.</p>
      </div>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Our Objectives</h2>
        <ul className="list-disc list-inside">
          <li>Raise awareness about environmental issues.</li>
          <li>Implement conservation projects worldwide.</li>
          <li>Advocate for stronger environmental policies.</li>
        </ul>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <Image src={leader.image} alt={leader.name} width={100} height={100} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-2">{leader.name}</h3>
              <p className="text-blue-600">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Organizational Structure</h2>
        <Image src="/org-structure.png" alt="Organizational Structure" width={600} height={400} className="mx-auto mt-4" />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <summary className="font-semibold cursor-pointer text-blue-700">{faq.question}</summary>
              <p className="mt-2 text-blue-900">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
