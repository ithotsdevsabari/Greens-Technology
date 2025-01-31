"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/img/logo.png";

const GreensFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                // data-aos="fade-in" 
                // data-aos-duration="1000" 
                // data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={200}
                      height={40}
                    />
                  </Link>
                </div>

                <p>
                Greens Technology is the best IT Training Institutes in Chennai Adyar, OMR, Velachery, Tambaram with placements, offering 200 and more software courses with 100% Placement Assistance.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                // data-aos="fade-in" 
                // data-aos-duration="1000" 
                // data-aos-delay="200"
              >
                <h3>Our Courses</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Front End
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Back End
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      UI UX Designer
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                    Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                    Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                    MERN Stack
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                // data-aos="fade-in" 
                // data-aos-duration="1000" 
                // data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                // data-aos="fade-in" 
                // data-aos-duration="1000" 
                // data-aos-delay="400"
              >
                <h3>Contact Us</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>Plot No.19, Balamurugan Garden, OMR Road,Kancheepuram District, Okkiam, Thoraipakkam, Jain college bus stop.
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+91 8939915572">+91 8939915572</a> 
                    <br />
                    <a href="tel:+91 8939915572">+91 8939915572</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:contact@greenstechnologys.com">contact@greenstechnologys.com</a>
                    <a href="mailto:contact@greenstechnologys.com">contact@greenstechnologys.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Greens Technology. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default GreensFooter;
