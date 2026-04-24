import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../pages/Home';
import './Footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h5>About Us</h5>
            <p>Providing the best digital solutions for your business. Contact us for web development, mobile apps, and digital marketing services.</p>
          </div>

        
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href={<Home/>} className="text-secondary text-decoration-none">Home</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Services</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">About</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: support@yourcompany.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: Hyderabad, India</li>
            </ul>
          </div>

    
          <div className="col-lg-3 col-md-6">
  <h5>Follow Us</h5>
  <div className="d-flex justify-content-start social-icons">
    <a href="#" className="icon-link">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" className="icon-link">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" className="icon-link">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" className="icon-link">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>

        </div>
        
        <hr className="border-secondary my-4" />
        <div className="row text-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 YourCompany. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none">Terms of Service</a></li>
              <li className="list-inline-item"><a href="#" className="text-secondary text-decoration-none">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;