import React from 'react';
import { Fade } from 'react-reveal';
import Header from './Header';

const Home = () => (
  <>
    <Header />
    <section id="homepage" className="d-flex align-items-center min-vh-100 m-0">
      <div className="container ps-5 border-3 d-flex">
        <div>
          <Fade>
            <h1 className="display-2 main-header">
              Hello
              <br />
              I’m Moriasi
            </h1>
          </Fade>
          <Fade bottom>
            <p className="description text-light">
              I’m a full-stack developer and I can help you build your website.
              Look through some of my work and experience it! If you like what
              you see and have a project you need coded, don’t hesitate to
              contact me using the form below or visit any of listed links on the left.
            </p>
          </Fade>
        </div>
        <ul className="contact-icons list-unstyled">
          <li>
            <a
              href="https://github.com/Aquinasmoriasi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aquinas-moriasi/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://angel.co/u/aquinas-moriasi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-angellist" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/aquinas747/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@aquinasmoriasi/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-medium" />
            </a>
          </li>
          <li>
            <a
              href="mailto:aquinasmoriasi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Home;
