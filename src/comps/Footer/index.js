import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Get Emails weekly...</p>
              <form action method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    src="https://cdn.discordapp.com/attachments/695495864390778890/848812283631108126/guvi_1_logo_1.png"
                    alt="GCC logo"
                    style={{ height: "5rem" }}
                    className="img-fluid"
                  />
                </a>
              </div>
              <h3>Guvi Code Camp SRM</h3>
              {/* <p>
                Shop - 8, Prathna Pearl , Nr. Shayona Shikhar <br> Vandematram Icon Cross Road , Gota <br> Ahmedabad - 382481 <br>
                <br>
                <strong>Phone: </strong>+91 96018 10854
                <br>
                <strong>Email: </strong>Patel.hemant67@yahoo.in<br>
              </p> */}
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Information</h4>
              <ul>
                <li>
                  <Icon icon="bx:chevron-right" color="#eb5d1e" />
                  <a href="/">Home</a>
                </li>

                <li>
                  <Icon icon="bx:chevron-right" color="#eb5d1e" />
                  <a href="/domains">Domains</a>
                </li>

                <li>
                  <Icon icon="bx:chevron-right" color="#eb5d1e" />
                  <a href="/events">Events</a>
                </li>

                <li>
                  <Icon icon="bx:chevron-right" color="#eb5d1e" />
                  <a href="projects">Projects</a>
                </li>

                <li>
                  <Icon icon="bx:chevron-right" color="#eb5d1e" />
                  <a href="team">Our Team</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="bi bi-phone"></i>
                  <a href="tel:+91 83020 61473">Swapnil Roop Rai</a>
                </li>
                <li>
                  <i className="bi bi-phone"></i>
                  <a href="tel:+91 70424 78999">Sumrit Grover</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Follow us to get news first in Market !!</p>
              <div className="social-links mt-3">
                <a
                  href="https://github.com/Guvi-CodeCamp-SRM"
                  className="github"
                  style={{ paddingright: "10px" }}
                >
                  <i className="bx bxl-github" />
                  <FaGithub />
                </a>

                <a
                  href="https://www.instagram.com/gccatsrm/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram" />
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/guvi-code-camp-srm"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin" />
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>GCC</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
