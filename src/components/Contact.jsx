import React from 'react';

const Contact = () => (
  <section id="about-me" className="pt-5">
    <div className="abt-description">
      <h2 className="about-header text-center text-decoration-underline">
        About Me
      </h2>
      <p className="text-light">
        I am a freelance software developer and a student at Microverse, a fully
        remote software development school. In just 7 months, I have been able
        to successfully switch careers from being an analytical chemist to
        becoming a full-stack developer. I achieved this by going back to the
        basics of learning and being equipped to learn any language, tool or
        framework that I come across in the tech world. As a developer, I build
        projects using languages such as Javascript and Ruby and also frameworks
        such as React, Redux, and Ruby on Rails, among other technologies. My
        experience at Microverse includes weekly engagement in pair programming
        and peer-to-peer review, which helps me get the feel of a real-life
        software developer’s experience.
      </p>
      <a
        href="https://docs.google.com/document/d/1QTR8nUHFsQYa_t1My-C2_GEmGte4RvH9-o0a7TEB8Ew/edit?usp=sharing"
        className="resume btn rounded-1"
        target="_blank"
        rel="noreferrer"
      >
        Get My Resume
      </a>
    </div>
    <form
      id="contact-me"
      className="container d-flex flex-column justify-content-center"
      action="https://formsubmit.co/2b19f9cedf41319823f9bc594969b45a "
      method="POST"
    >
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="http://localhost:3000/" />
      <input
        type="text"
        className="mb-2 p-2 border-0 valid"
        name="Name"
        placeholder="Name"
        aria-label="Name"
        maxLength="30"
        required
      />
      <input
        type="email"
        className="mb-2 p-2 border-0 border-bottom"
        name="Email"
        placeholder="Email"
        aria-label="email"
        required
      />
      <textarea
        name="message"
        className="mb-3 p-2"
        rows="5"
        placeholder="Write your message here"
        maxLength="500"
        required
      />
      <button type="submit" className="git-btn rounded-1" id="submit">
        Get in Touch
      </button>
    </form>
  </section>
);

export default Contact;
