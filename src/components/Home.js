import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [moreLinksOpen, setMoreLinksOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Refs for navigation
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  
  // Other content refs
  const communicationRef = useRef(null);
  const feedbackRef = useRef(null);
  const feedbackCardRef = useRef(null);
  const feedbackImageRef = useRef(null);
  const feedbackTwoRef = useRef(null);
  const feedbackRef2 = useRef(null);
  const feedbackCardRef2 = useRef(null);
  const feedbackImageRef2 = useRef(null);
  const aboutImageRef = useRef(null);
  const teamRef = useRef(null);
    const teamHeadingRef = useRef(null);
  const teamTextRef = useRef(null);
  const teamCardRefs = [useRef(null), useRef(null), useRef(null)];
  const extraTeamCardRefs = [useRef(null), useRef(null), useRef(null)];




  // Scroll to section
const scrollToSection = (ref, sectionName) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
  setActiveSection(sectionName);
};


  // Animate visible sections
  useEffect(() => {
    const observers = [];
    const addVisibleClass = (ref) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const el = ref.current;
          if (el) {
            if (entry.isIntersecting) {
              el.classList.add('visible');
            } else {
              el.classList.remove('visible');
            }
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      observers.push(observer);
    };

    [
      featureRef, communicationRef, feedbackRef,
      feedbackCardRef, feedbackImageRef, feedbackTwoRef,
      feedbackRef2, feedbackCardRef2, feedbackImageRef2, aboutImageRef,teamRef,teamHeadingRef, teamTextRef,
      ...teamCardRefs,
      ...extraTeamCardRefs
    ].forEach(addVisibleClass);

    return () => observers.forEach(observer => observer.disconnect());
  }, []);
  const [current, setCurrent] = useState(0);

const testimonials = [
  {
    name: "John Smith",
    image: "/Images/10011.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    name: "Rober Agruilar",
    image: "/Images/10009.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    name: "Roger Spears",
    image: "/Images/Joe.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    name: "Kyle McDonald",
    image: "/Images/Kimberly.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
];
useEffect(() => {
  const handleScroll = () => {
    const sections = [
      { name: 'Home', ref: homeRef },
      { name: 'Features', ref: featureRef },
      { name: 'About', ref: aboutRef },
      { name: 'Testimonials', ref: testimonialRef },
      { name: 'Blog', ref: blogRef },
      { name: 'Contact', ref: contactRef },
    ];

    const scrollY = window.scrollY + window.innerHeight / 2;

    for (let section of sections) {
      const element = section.ref.current;
      if (element) {
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.name);
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">imagine<span className="dot">.</span></div>
        <ul className="nav-links">
          <li
  className={`nav-item ${activeSection === 'Home' ? 'active' : ''}`}
  onClick={() => scrollToSection(homeRef, 'Home')}
>
  Home
</li>

<li
  className={`nav-item ${activeSection === 'Features' ? 'active' : ''}`}
  onClick={() => scrollToSection(featureRef, 'Features')}
>
  Features
</li>

<li
  className={`nav-item dropdown ${activeSection === 'About' ? 'active' : ''}`}
  onMouseEnter={() => setAboutOpen(true)}
  onMouseLeave={() => {
    setAboutOpen(false);
    setMoreLinksOpen(false);
  }}
>
  About Us ▾
  {aboutOpen && (
    <ul className="dropdown-menu">
      <li onClick={() => scrollToSection(aboutRef, 'About')}>More Feature</li>
      <li onClick={() => scrollToSection(teamRef, 'About')}>Our Team</li>
      <li
        className="submenu-item"
        onMouseEnter={() => setMoreLinksOpen(true)}
        onMouseLeave={() => setMoreLinksOpen(false)}
      >
        More Links ▸
        {moreLinksOpen && (
          <ul className="submenu">
            <li>Menu One</li>
            <li>Menu Two</li>
            <li>Menu Three</li>
          </ul>
        )}
      </li>
    </ul>
  )}
</li>

<li
  className={`nav-item ${activeSection === 'Testimonials' ? 'active' : ''}`}
  onClick={() => scrollToSection(testimonialRef, 'Testimonials')}
>
  Testimonials
</li>

<li
  className={`nav-item ${activeSection === 'Blog' ? 'active' : ''}`}
  onClick={() => scrollToSection(blogRef, 'Blog')}
>
  Blog
</li>

<li
  className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}
  onClick={() => scrollToSection(contactRef, 'Contact')}
>
  Contact
</li>

        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" ref={homeRef}>
        <div className="hero-text">
          <h1>Make Your Business<br />More Profitable</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/Images/chart.svg" alt="Chart Growth" />
        </div>
      </section>
{/* Features Section */}
<section className="imagine-features" ref={featureRef}>
  <h2>Imagine Features</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>

  {/* First Row */}
  <div className="feature-cards">
    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-sync-alt"></i>
      </div>
      <h3>Marketing Consulting</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-home"></i>
      </div>
      <h3>Market Analysis</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-shopping-cart"></i>
      </div>
      <h3>Easy Purchase</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>
  </div>

  {/* Second Row */}
  <div className="feature-cards">
    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-undo"></i>
      </div>
      <h3>Free Updates</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-smile"></i>
      </div>
      <h3>100% Satisfied</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>

    <div className="feature-card">
      <div className="icon-circle">
        <i className="fas fa-plug"></i>
      </div>
      <h3>Easy Plugin</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
      <a href="#">Learn More</a>
    </div>
  </div>
</section>

<div className="communication-section" ref={communicationRef}   >

  <div className="communication-content">
    {/* Left Image */}
    <div className="left-image">
      <img src="/Images/10002.svg" alt="Feedback Illustration" />
    </div>

    {/* Right Content */}
    <div className="right-text">
      <h2>Communicate and gather feedback</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.
      </p>

      {/* Testimonial Card */}
      <div className="testimonial-card">
        <img className="profile-image" src="/Images/Joe.png" alt="Grey Simpson" />
        <div className="testimonial-text">
          <h4>Grey Simpson</h4>
          <p className="title">Co-Founder, XYZ Inc.</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="feedback-section" ref={feedbackRef}>
  <div className="feedback-content reverse-layout">
    {/* Left Side: Text + Card */}
    <div className="feedback-text">
      <h2>Communicate and gather feedback</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>

      <div className="feedback-card" ref={feedbackCardRef}>
        <img src="/Images/kimberly.png" alt="Kimberly Gush" className="profile-image" />
        <div className="testimonial-text">
          <h4>Kimberly Gush</h4>
          <p className="title">Co-Founder, XYZ Inc.</p>
        </div>
        <p className="testimonial-description">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”
        </p>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="feedback-image" ref={feedbackImageRef}>
      <img src="/Images/10003.svg" alt="Feedback Illustration" />
    </div>
  </div>
</section>

<section className="communication-section" ref={feedbackTwoRef}>
  <div className="communication-content">
    {/* Left Side: Image */}
    <div className="left-image">
      <img src="/Images/10002.svg" alt="Another Feedback Illustration" />
    </div>

    {/* Right Side: Text + Testimonial */}
    <div className="right-text">
      <h2>Communicate and gather feedback</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

      {/* Testimonial Card */}
      <div className="testimonial-card">
        <img className="profile-image" src="/Images/joe.png" alt="Grey Simpson" />
        <div className="testimonial-text">
          <h4>Grey Simpson</h4>
          <p className="title">Co-Founder, XYZ Inc.</p>
        </div>
        <p className="testimonial-description">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”
        </p>
      </div>
    </div>
  </div>
</section>

{/* 🔁 SECOND SECTION (SAME STRUCTURE) */}
<section className="feedback-section" ref={feedbackRef2}>
  <div className="feedback-content reverse-layout">
    {/* Left Side: Text + Card */}
    <div className="feedback-text">
      <h2>Communicate and gather feedback</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>

      <div className="feedback-card" ref={feedbackCardRef2}>
        <img src="/Images/kimberly.png" alt="Kimberly Gush" className="profile-image" />
        <div className="testimonial-text">
          <h4>Kimberly Gush</h4>
          <p className="title">Co-Founder, XYZ Inc.</p>
        </div>
        <p className="testimonial-description">
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”
        </p>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="feedback-image" ref={feedbackImageRef2}>
      <img src="/Images/10003.svg" alt="Feedback Illustration" />
    </div>
  </div>
</section>

<section className="about-us-section" ref={aboutRef} id="about">
  <h2 className="about-heading">About Us</h2>
  <div className="about-content">
    {/* Left: Image */}
    <div className="about-image" ref={aboutImageRef}>
      <img src="/Images/10004.svg" alt="About Us" />
    </div>

    {/* Right: Text */}
    <div className="about-text">
      <h3>Our Mission</h3>
      <p className="about-paragraph">
        Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.
      </p>
      <ul className="about-points">
        <li><span className="tick">✔</span> Laborum enim quasi at modi</li>
        <li><span className="tick">✔</span> Ad at tempore</li>
        <li><span className="tick">✔</span> Labore quaerat esse</li>
      </ul>
      <button className="learn-more-btn">Learn More</button>
    </div>
  </div>
</section>

<section className="our-team-section" ref={teamRef}>
  <div className="team-content">
    <h2 className="team-heading slide-up" ref={teamHeadingRef}>Our Team</h2>
    <p className="team-text slide-up" ref={teamTextRef}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.
    </p>
  </div>

  <div className="team-cards">
   {[{
  name: "Cloe Marena",
  role: "President",
  image: "Images/kimberly.png",
},
{
  name: "John Rooster",
  role: "Marketing",
  image: "Images/10009.png",
},
{
  name: "Will Turner",
  role: "Marketing",
  image: "Images/10011.png",
}].map((member, index) => (
  <div
    className="team-card slide-up"
    key={index}
    ref={teamCardRefs[index]}
  >
    <div className="image-container">
      <img src={member.image} alt={member.name} className="team-img" />
      <div className="social-footer">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <h3 className="member-name">{member.name}</h3>
    <p className="member-role">{member.role}</p>
    <p className="member-desc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.
    </p>
  </div>
))}
<div className="team-cards">
  {[
    {
      name: "Nicolas Stainer",
      role: "Financing",
      image: "Images/Joe.png", // Replace with actual image path
    },
    {
      name: "George Brook",
      role: "Founder",
      image: "Images/10008.jpg", // Replace with actual image path
    },
    {
      name: "Emely Hopson",
      role: "Marketing",
      image: "Images/10016.webp", // Replace with actual image path
    },
  ].map((member, index) => (
    <div
      className="team-card slide-up"
      key={index}
      ref={extraTeamCardRefs[index]}
    >
      <div className="image-container">
        <img src={member.image} alt={member.name} className="team-img" />
        <div className="social-footer">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p className="member-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.
      </p>
    </div>
  ))}
</div>
  </div>
</section>

<section className="testimonials-section" ref={testimonialRef}>
  <h2 className="testimonial-heading">Testimonials</h2>

  <div className="testimonial-slide">
    <img
      src={testimonials[current].image}
      alt={testimonials[current].name}
      className="testimonial-image"
    />
    <p className="testimonial-text">“{testimonials[current].text}”</p>
    <h4 className="testimonial-name">{testimonials[current].name}</h4>
  </div>

  <div className="testimonial-dots">
    {testimonials.map((_, index) => (
      <span
        key={index}
        className={`dot ${current === index ? 'active' : ''}`}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</section>

<section className="blog-section" ref={blogRef}>
  <h2 className="blog-heading">Blog Posts</h2>

  <div className="blog-container">
    <div className="blog-card">
      <img src="/Images/cat.jpg" alt="Blog 1" className="blog-image" />
      <h3 className="blog-title">Make Your Business More Profitable</h3>
      <p className="blog-meta">
  James Phelps • Jan 18, 2019 • <span className="blog-category">News</span>
</p>
      <p className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
        sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
      </p>
      <a href="#" className="blog-link">Continue Reading...</a>
    </div>

    <div className="blog-card">
      <img src="/Images/ipad.jpg" alt="Blog 2" className="blog-image" />
      <h3 className="blog-title">Make Your Business More Profitable</h3>
      <p className="blog-meta">
  James Phelps • Jan 18, 2019 • <span className="blog-category">News</span>
</p>
      <p className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
        sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
      </p>
      <a href="#" className="blog-link">Continue Reading...</a>
    </div>

    <div className="blog-card">
      <img src="/Images/men.jpg" alt="Blog 3" className="blog-image" />
      <h3 className="blog-title">Make Your Business More Profitable</h3>
    <p className="blog-meta">
  James Phelps • Jan 18, 2019 • <span className="blog-category">News</span>
</p>
      <p className="blog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
        sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
      </p>
      <a href="#" className="blog-link">Continue Reading...</a>
    </div>
  </div>
</section>
<section className="contact-section" ref={contactRef}>
  <h2 className="contact-title">Contact Us</h2>
  <div className="contact-overlay">
    <form className="contact-form">
      <h3 className="form-title">Contact Form</h3>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text"  className="form-input" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text"  className="form-input" />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email"  className="form-input full-width" />
      </div>

      <div className="form-group">
        <label>Subject</label>
        <input type="text"  className="form-input full-width" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea placeholder="Leave your message here..." className="form-textarea full-width"></textarea>
      </div>

      <button type="submit" className="form-button">Send Message</button>
    </form>
  </div>
</section>

<footer className="custom-footer">
  <div className="footer-icons">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
    <a href="#"><i className="fab fa-pinterest-p"></i></a>
  </div>

  <div className="footer-text">
    <p>
      Copyright ©2025 All rights reserved | This template is made with 
      <span className="heart"> ♥ </span> by 
      <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
    </p>
  </div>
</footer>


    </div>
  );
}

export default Home;
