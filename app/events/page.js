import React from "react";

const events = [
  { date: "March 15, 2025", title: "Global Climate Summit", location: "New York, USA" },
  { date: "April 22, 2025", title: "Earth Day Webinar", location: "Online" },
  { date: "June 5, 2025", title: "World Environment Conference", location: "London, UK" },
];

const news = [
  { title: "GEPO Partners with Harvard for Climate Research", date: "Jan 10, 2025" },
  { title: "New Scholarships for Environmental Studies Announced", date: "Feb 5, 2025" },
  { title: "Successful Completion of Ocean Cleanup Project", date: "Feb 20, 2025" },
];

export default function EventsNews() {
  return (
    <div className="bg-blue-50 min-h-screen p-8 text-blue-900">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">Events & News</h1>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Upcoming Events</h2>
        <ul className="mt-4 space-y-4">
          {events.map((event, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="font-semibold">{event.title}</p>
              <p>{event.date} - {event.location}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Latest News</h2>
        <ul className="mt-4 space-y-4">
          {news.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="font-semibold">{item.title}</p>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-blue-700">Photo & Video Gallery</h2>
        <div className="mt-4 bg-gray-200 w-full h-64 flex items-center justify-center">[Gallery Placeholder]</div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-700">Social Media Feed</h2>
        <div className="mt-4 bg-gray-200 w-full h-64 flex items-center justify-center">[Twitter, LinkedIn, Facebook Feeds Placeholder]</div>
      </section>
    </div>
  );
}
