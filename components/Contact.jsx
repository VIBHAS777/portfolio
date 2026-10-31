import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "service_default",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "template_default",
        {
          from_name: form.name,
          to_name: "Vibhas Reddy",
          from_email: form.email,
          to_email: "vibhasf17@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY || "key_default"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I will get back to you shortly.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Message could not be sent automatically. You can email directly at vibhasf17@gmail.com");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark/95 backdrop-blur-xl xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-xl shadow-primary/20 border border-white/10"
      id="contact"
    >
      <p className="sectionSubText text-ctnSecondaryDark">Get in touch</p>
      <h3 className="sectionHeadText text-ctnPrimaryDark">Contact.</h3>

      {/* Direct Contact Info */}
      <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2.5 text-[14px]">
        <div className="flex items-center gap-3 text-gray-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-gray-400">Email:</span>
          <a href="mailto:vibhasf17@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
            vibhasf17@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-200">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-gray-400">Location:</span>
          <span className="text-white font-medium">Bengaluru, India</span>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-6"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-2 text-[14px]">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your name?"
            className="bg-bgPrimaryDark/90 py-3.5 px-5 placeholder:text-gray-500 rounded-lg outline-none border border-white/10 focus:border-primary font-medium text-white text-[15px]"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-2 text-[14px]">
            Your Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-bgPrimaryDark/90 py-3.5 px-5 placeholder:text-gray-500 rounded-lg outline-none border border-white/10 focus:border-primary font-medium text-white text-[15px]"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-2 text-[14px]">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What would you like to discuss or collaborate on?"
            className="bg-bgPrimaryDark/90 py-3.5 px-5 placeholder:text-gray-500 rounded-lg outline-none border border-white/10 focus:border-primary font-medium text-white text-[15px] resize-none"
          />
        </label>

        <button
          type="submit"
          className="bg-primary hover:bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary/30 hover:shadow-primary transition-all duration-300"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
