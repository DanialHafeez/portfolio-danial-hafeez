'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BiCode, BiCodeAlt, BiCodeBlock, BiCodeCurly } from "react-icons/bi";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white matrix-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md p-4 shadow-lg flex justify-center gap-6 z-50 border-b border-blue-500/20">
        {["about", "projects", "skills", "testimonials", "contact"].map((item) => (
          <ScrollLink
            key={item}
            to={item}
            smooth={true}
            duration={800}
            className="cursor-pointer text-gray-300 hover:text-blue-400 transition-colors capitalize relative group font-mono"
          >
            <span className="text-blue-400 mr-1">&lt;</span>
            {item}
            <span className="text-blue-400 ml-1">/&gt;</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </ScrollLink>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden binary-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent code-pattern"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.div 
            className="mb-8 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md"></div>
              <Image
                src="/profile.jpg"
                alt="M.Danial Hafeez"
                width={200}
                height={200}
                className="rounded-full relative border-2 border-white/50 shadow-2xl"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="font-mono mb-4">
              <span className="text-blue-400">const</span> <span className="text-purple-400">developer</span> = {"{"}
              <h1 className="text-6xl font-bold my-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                M.Danial Hafeez
              </h1>
              {"}"};
            </div>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              <span className="text-blue-400">function</span> <span className="text-purple-400">getRole</span>() =&gt; <span className="text-green-400">"Mobile App Developer"</span>
            </p>
          </motion.div>
          <motion.div 
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a 
              href="https://github.com/DanialHafeez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-all duration-300 bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm"
            >
              <FaGithub className="text-4xl hover:text-blue-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/danial-hafeez-64a364200/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-all duration-300 bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm"
            >
              <FaLinkedin className="text-4xl hover:text-blue-400" />
            </a>
            <a 
              href="mailto:danialhafeez1122@gmail.com"
              className="transform hover:scale-125 transition-all duration-300 bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm"
            >
              <FaEnvelope className="text-4xl hover:text-blue-400" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center relative px-4 code-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <BiCodeBlock className="text-6xl text-blue-400 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-mono">
            <span className="text-blue-400">&lt;</span>
            About Me
            <span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
            <p className="text-xl text-gray-300 leading-relaxed font-mono">
              <span className="text-blue-400">if</span> (
              <span className="text-purple-400">youWantToKnow</span>) {"{"}
              <br />
              &nbsp;&nbsp;Hi, I&apos;m a passionate Computer Science graduate,
              <br />
              &nbsp;&nbsp;driven by innovation and a love for solving complex problems through code
              <br />
              {"}"};
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-4 py-20 relative binary-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <BiCodeCurly className="text-6xl text-purple-400 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-mono">
            <span className="text-purple-400">&lt;</span>
            Projects
            <span className="text-purple-400">/&gt;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-blue-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 font-mono">
                <span className="text-purple-400">class</span> ARNavigation {"{"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Navigating complex indoor environments can be challenging, 
                but my AR-Based Indoor Navigation System simplifies the process using Augmented Reality (AR).
                This system overlays real-time directional guidance within indoor spaces, helping users find their destinations efficiently.
                Leveraging AR markers, 3D path visualization, and real-time positioning, 
                the application enhances user experience by providing an intuitive and interactive navigation solution.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono">Flutter</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono">AR</span>
              </div>
              <div className="text-blue-400 mt-2 font-mono">{"}"}</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400 font-mono">
                <span className="text-purple-400">class</span> AIChatbot {"{"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                This chatbot uses GPT-based NLP models to handle common customer queries. 
                It supports text-based responses, sentiment analysis, and customizable intents for businesses. 
                Built using Python, Flask, and TensorFlow, the chatbot can be deployed on a website or 
                integrated into messaging apps like Telegram.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-mono">Python</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-mono">AI/ML</span>
              </div>
              <div className="text-purple-400 mt-2 font-mono">{"}"}</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-green-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-400 font-mono">
                <span className="text-purple-400">class</span> SecureFileEncryption {"{"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A robust C++ application that provides military-grade file encryption using AES-256. 
                Features include password-based key generation, file integrity verification, and a 
                user-friendly CLI. The tool ensures data security by preventing unauthorized access 
                to sensitive files, making it ideal for protecting confidential information.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-mono">C++</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-mono">OpenSSL</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-mono">Crypto++</span>
              </div>
              <div className="text-green-400 mt-2 font-mono">{"}"}</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-pink-500/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-pink-400 font-mono">
                <span className="text-purple-400">class</span> SmartExpenseTracker {"{"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A comprehensive web-based expense tracking system built with Spring Boot and MySQL. 
                Features JWT-based authentication, intuitive expense management with CRUD operations, 
                and insightful data visualization using Chart.js. Users can categorize expenses, 
                analyze spending trends through interactive charts, and export reports in CSV/PDF formats.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-mono">Java</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-mono">Spring Boot</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-mono">MySQL</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-mono">React</span>
              </div>
              <div className="text-pink-400 mt-2 font-mono">{"}"}</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-4 py-20 relative code-pattern"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <BiCodeAlt className="text-6xl text-green-400 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text font-mono">
            <span className="text-green-400">&lt;</span>
            Testimonials
            <span className="text-green-400">/&gt;</span>
          </h2>
          <div className="space-y-6">
            {[
              { text: "A dedicated and talented developer! Always eager to learn and contribute.", author: "Dr Bilal Basheer" },
              { text: "A good and fast learner! Always ready to take on new challenges and contribute.", author: "Dr Muhmmad Ammar" },
              { text: "One of the most talented student I have worked with.", author: "Mam Aqsa Khalid" },
              { text: "a very good student always attentive in the class and among the students who always wanted to solve the complex problems", author: "Dr Nabeela Kausar" }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-green-500/20"
              >
                <div className="font-mono text-green-400 mb-2">console.log(testimonial[{index}]);</div>
                <p className="text-gray-300 italic">&quot;{testimonial.text}&quot;</p>
                <p className="text-gray-400 mt-2 font-mono">// {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-4 py-20 relative binary-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <BiCode className="text-6xl text-pink-400 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text font-mono">
            <span className="text-pink-400">&lt;</span>
            Skills
            <span className="text-pink-400">/&gt;</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20">
            <div className="font-mono text-pink-400 mb-4">const skills = {"{"};</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["JavaScript", "React", "Next.js", "Node.js", "Python", "Flutter", "Tailwind CSS", "Git" ,"Dart", "Firebase", "c++", "Java", "Spring Boot", "MySQL"].map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg text-center relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-800/50 backdrop-blur-sm rounded-lg border border-pink-500/20"></div>
                  <span className="relative z-10 font-mono">
                    <span className="text-pink-400">skills[{index}] = </span>
                    <span className="text-green-400">"{skill}"</span>
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="font-mono text-pink-400 mt-4">{"}"}</div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-4 relative code-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-mono">
            <span className="text-blue-400">&lt;</span>
            Contact
            <span className="text-blue-400">/&gt;</span>
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
            <p className="text-xl text-gray-300 mb-8 font-mono">
              <span className="text-blue-400">async function</span> <span className="text-purple-400">connect</span>() {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-400">// I&apos;m always open to discussing new projects and opportunities</span>
              <br />
              &nbsp;&nbsp;<span className="text-blue-400">await</span> <span className="text-purple-400">sendMessage</span>();
              <br />
              {"}"}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:danialhafeez1122@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow font-mono"
            >
              sendMessage()
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
