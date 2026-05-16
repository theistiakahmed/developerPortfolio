import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../common/Container";
import Flex from "../common/Flex";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";
import Swal from "sweetalert2";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("⚠️ Please fill all fields!");
      setSuccess("");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(form.email)) {
      setError("⚠️ Invalid email address!");
      setSuccess("");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    emailjs.send(
  "service_iw740qt",
  "template_ep4my4s",
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
    to_email: "istiakahmed346@gmail.com",
  },
  "l9gnhlzViEkonKA4m"
)
      .then((success) => {
          Swal.fire({
        title: "Message Sent!",
        text: "Your email has been sent successfully.",
        icon: "success",
      });
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
    Swal.fire({
      title: "Failed!",
      text: "Something went wrong. Try again.",
      icon: "error"
    });

  })
  .finally(() => {
    setLoading(false);
      });
  };

  return (
    <article className=" pb-[80px] overflow-hidden">
      <Container>
        <Flex className="pt-[110px] md:pt-[130px] flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2  px-10 md:px-0" data-aos="fade-right">
            <h3 className="font-extrabold text-center md:text-start text-[36px] md:text-[48px]">
              Let's{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h3>

            <p className="text-gray-500 text-[16px] text-center md:text-start md:text-[18px] pt-5 pb-8">
              I specialize in <span className="text-cyan-400">React.js</span>{" "}
              and <span className="text-fuchsia-600">Next.js</span>. Whether you
              have a project in mind or just want to say hi, my inbox is always
              open!
            </p>

            <a
              href="https://www.linkedin.com/in/theistiakahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group w-full"
            >
              <div className="flex gap-4 items-center">
                <FaLinkedinIn className="text-5xl p-2 bg-purple-300 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white duration-300" />

                <div>
                  <h3 className="text-gray-600 font-bold text-sm">LINKEDIN</h3>
                  <h4 className="font-bold text-sm group-hover:text-purple-600">
                    theistiakahmed
                  </h4>
                </div>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=istiakahmed346@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group w-full mt-5"
            >
              <div className="flex gap-4 items-center">
                <CiMail className="text-5xl p-2 bg-purple-300 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white duration-300" />

                <div>
                  <h3 className="text-gray-600 font-bold text-sm">E-MAIL</h3>
                  <h4 className="font-bold text-sm group-hover:text-purple-600">
                    istiakahmed346@gmail.com
                  </h4>
                </div>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/THUTdczCR95Z6FSG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group w-full mt-5"
            >
              <div className="flex gap-4 items-center">
                <CiLocationOn className="text-5xl p-2 bg-purple-300 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white duration-300" />

                <div>
                  <h3 className="text-gray-600 font-bold text-sm">LOCATION</h3>
                  <h4 className="font-bold text-sm group-hover:text-purple-600">
                    Dhanmondi #4, Dhaka
                  </h4>
                </div>
              </div>
            </a>
          </div>

          <div className="w-[80%] lg:w-1/2">
            <div className="relative p-6 bg-white dark:bg-[#0f0f0f] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 shadow-[0_0_40px_rgba(192,38,211,0.15)] overflow-hidden">

              {error && <p className="text-red-500 mb-4">{error}</p>}
              {success && <p className="text-green-500 mb-4">{success}</p>}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl placeholder:text-gray-400 text-black dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl placeholder:text-gray-400 text-black dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl placeholder:text-gray-400 text-black dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl   placeholder:text-gray-400 text-black dark:text-white border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.4)] transition disabled:opacity-70"
                >
                  <div className="flex gap-x-2 items-center font-bold justify-center">
                    <BsFillSendFill />
                    <h4>{loading ? "Sending..." : "Send Message"}</h4>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </Flex>
      </Container>
    </article>
  );
};

export default Contact;
