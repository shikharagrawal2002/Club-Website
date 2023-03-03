import React, { useState } from 'react';
import './Eventss.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

const Eventpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <article class="accordion">
        <section id="acc1">
          <h2>
            <a href="#acc1">SYMPOSIUM 1.0</a>
          </h2>
          <p>This content appears on page 1.</p>
        </section>
        <section id="acc2">
          <h2>
            <a href="#acc2">SYMPOSIUM 1.1</a>
          </h2>
          <p>This content appears on page 2.</p>
        </section>
        <section id="acc3">
          <h2>
            <a href="#acc3">GCC Mixtapes</a>
          </h2>
          <div class="xyz">
            <img src="./mixtapes.png" alt="mixtapes"></img>
          </div>

          <p>
            Web development is the work involved in developing a Web site for
            the Internet or an intranet. Web development can range from
            developing a simple single static page of plain text to complex web
            applications, electronic businesses, and social network services.
          </p>
        </section>
        <section id="acc4">
          <h2>
            <a href="#acc4">Pirates Of CODEBBEAN</a>
          </h2>
          <p>This content appears on page 4.</p>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Eventpage;
