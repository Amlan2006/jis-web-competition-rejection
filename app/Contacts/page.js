import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-blue-50 min-h-screen p-8 text-blue-900">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you. Reach out to us using the form below.</p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" required></textarea>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-700">Our Contact Details</h2>
        <p>Email: contact@gepo.org</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Greenway Blvd, Sustainability City, Earth</p>
      </section>
    </div>
  );
}
