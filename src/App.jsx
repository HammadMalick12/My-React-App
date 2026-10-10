
function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2 className="logo">AboutUs.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#mission">Our Mission</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="tagline">WHO WE ARE</p>
          <h1>Building a Better Digital Future</h1>
          <p className="description">
            We help businesses grow through innovative technology,
            creative ideas, and reliable digital solutions.
          </p>
          <a className="button" href="#about">
            Discover More
          </a>
        </section>

        <section className="about" id="about">
          <h2>About Our Company</h2>
          <p>
            We are a technology-focused team dedicated to creating
            modern, user-friendly, and effective web solutions.
            Our goal is to turn ideas into digital experiences
            that make a difference.
          </p>
        </section>

        <section className="mission" id="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make technology simple, accessible,
            and valuable for everyone through quality software
            and continuous innovation.
          </p>
        </section>

        <section className="contact" id="contact">
          <h2>Let's Work Together</h2>
          <p>Have an idea? We would love to hear from you.</p>
          <a className="button" href="mailto:info@example.com">
            Contact Us
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 AboutUs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
