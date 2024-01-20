import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("");
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_me",
        "template_6ti7fad",
        form.current,
        "ykyyAJDSWYbXrWU62"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Your message was sent successfully!");
          setFromName("");
          setFromEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setFormStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="container flex flex-col lg:px-40"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-5 font-medium title-font">
            Get in touch
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Send
          </button>
          <p className="text-white mt-3">{formStatus}</p>
        </form>
      </div>
    </section>
  );
}