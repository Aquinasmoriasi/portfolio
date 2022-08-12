import './App.css';
import { home, gh } from './images/images ';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="container-fluid navbar bg-primary fixed-top px-5">
          <div className="row container-fluid d-flex justify-content-between">
            <ul className="nav col-4 text-light ps-5">
              <li className="p-3 nav-item">
                <a href="#projects" className="text-decoration-none text-light">Portfolio</a>
              </li>
              <li className="p-3 nav-item">
                <a href="#about-me" className="text-decoration-none text-light">About</a>
              </li>
              <li className="p-3 nav-item">
                <a href="#contact-me" className="text-decoration-none text-light">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="homepage" className="container-fluid d-flex align-items-center min-vh-100 bg m-0">
        <div className="container ps-5 border-3 d-flex">
          <div className="col-11">
            <h1 className="display-2 main-header">
              Holla
              <br />
              I’m Moriasi
            </h1>
            <p className="h3 text-info">
              I’m a Software Developer and am here to help!
            </p>
          </div>
          <ul className="list-unstyled col-1">
            <li id="github" className="pt-5">
              <a href="https://github.com/Aquinasmoriasi">
                <img src={gh} alt="github profile" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aquinas-moriasi/">
                <img src={gh} alt="linkedin profile" />
              </a>
            </li>
            <li id="peace">
              <img src={gh} alt="peace" />
            </li>
            <li id="medium">
              <img src={gh} alt="microverse profile" />
            </li>
          </ul>
        </div>
      </section>
      <hr className="border border-1 border-primary" />
      <section id="projects" className="container-fluid pt-5 ps-5 pe-5 mb-5">
        <h2 className="h1 pt-5 ps-4 pb-5">
          My recent works
        </h2>
        <div className="other-projects text-light container-fluid d-flex flex-wrap justify-content-between align-items-between pt-5">
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={home} alt="highlight-project" />
            <div className="container d-flex flex-column justify-content-end align-items-start card-img-overlay">
              <h2 className="h4 card-title">
                Website Portfolio
              </h2>
              <p>
                A daily selection of printer took a standard dummy text.
              </p>
              <div className="btn me-5 pb-3">
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">html</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">bootstrap</button>
                <button type="button" className="btn btn-sm border-secondary rounded-0 btn-outline-warning text-light">Ruby</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me" className="container-fluid bg-dark d-flex pt-0 ps-5 pe-5 pt-5 mb-5 pb-5  min-vh-100">
        <div className="container border">
          <h2 className="display-1 pt-5 ps-5 about-header text-light">
            About Me
          </h2>
          <p className="text-light col-5 pe-0 me-0 ps-5 pb-3">
            Hello I’m a software developer!
          </p>
          <button type="button" className="text-dark border-0 rounded-0 col-3 ms-5 p-2 mb-5 resume-btn">
            Get My Resume
          </button>
        </div>
        <form className="container d-flex flex-column justify-content-between mx-4 pt-5 mt-5" action="https://formspree.io/f/xlezvgbv" method="post">
          <input type="text" className="mb-3 p-2 border-0 border-bottom valid" name="Name" placeholder="Full name" aria-label="Name" maxLength="30" required />
          <input type="email" className="mb-5 p-2 border-0 border-bottom" name="Email" placeholder="Email address" aria-label="email" required />
          <textarea name="message" className="mb-3 p-3 " rows="5" placeholder="write your message here" maxLength="500" required />
          <button type="submit" className="col-3 text-dark border-0 p-2 mb-5 git-btn" id="submit">Get in Touch</button>
        </form>
      </section>
      <div className="container d-flex">
        <div className="container">
          <h3 className="h4 text-dark pt-5 mt-5">Languages</h3>
          <ul className="list-unstyled">
            <li className="text-primary">Javascript</li>
            <li className="text-primary">React.js</li>
            <li className="text-primary">Html</li>
            <li className="text-primary">Css</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
