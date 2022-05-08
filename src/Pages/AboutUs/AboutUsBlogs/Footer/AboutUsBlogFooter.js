// import "./Footer2.css";
import {
  FaAd,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaTelegram,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import "./AboutUsBlogFooter.css";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="Blog-Footer-two-container">
      <div className="Footer-two-list">
        <span>
          <Link to="/">
            <img
              src="https://metropolitanaddis.com/wp-content/uploads/2021/12/logo_Çalışma-Yüzeyi-3-220x300.png"
              className="Footer-image"
            />
          </Link>
          <div className="blog-footer-social-media-icons">
            <ul className="Footer-blog-icons">
              <li>
                <FaFacebook className="blog-footer-social-media-icon" />
              </li>
              <li>
                <FaTwitter className="blog-footer-social-media-icon" />
              </li>
              <li>
                <FaLinkedin className="blog-footer-social-media-icon" />
              </li>
              <li>
                <FaInstagram className="blog-footer-social-media-icon" />
              </li>
              <li>
                <FaYoutube className="blog-footer-social-media-icon" />
              </li>
            </ul>
          </div>
        </span>
        <ul className="blog-Footer-list">
          <li className="blog1-Footer-each-list-two-header">Navigation</li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/" className="metro-blog-footer">
              Metropolitan Real Estate
            </Link>
          </li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/LuxuryLines" className="metro-blog-footer">
              Metropolitan Luxury Apartments
            </Link>
          </li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/StandardLines" className="metro-blog-footer">
              Standard Apartments by Metropolitan
            </Link>
          </li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/NewsBlogs" className="metro-blog-footer">
              News & Blogs
            </Link>
          </li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/" className="metro-blog-footer">
              About Metropolitan Real Estate
            </Link>
          </li>
          <li className="blog1-Footer-each-list-two">
            <Link to="/ContactUs" className="metro-blog-footer">
              Contact Us
            </Link>
          </li>
        </ul>
        <ul className="blog-Footer-list">
          <li className="blog1-Footer-each-list-two-header">
            CONTACT ETHIOPIA
          </li>
          <li className="blog1-Footer-each-list-two">
            <FaPhone className="blog-icon" />
            9896
          </li>
          <li className="blog1-Footer-each-list-two">
            <FaPhone className="blog-icon" />
            +251 973 40 40 40
          </li>
          <li className="blog1-Footer-each-list-two">
            <FaPhone className="blog-icon" />
            +251 973 30 30 30
          </li>
          <li className="blog1-Footer-each-list-two">
            {" "}
            <FaMailBulk className="blog-icon" />
            info@metropolitanaddis.com
          </li>
          <li className="blog1-Footer-each-list-two">
            <FaLocationArrow className="blog-icon" />
            Bole, Around Friendship Hotel, Infront of Istanbul Restaurant, Addis
            Ababa, Ethiopia{" "}
          </li>
        </ul>
        <ul className="blog-Footer-list">
          <li className="blog1-Footer-each-list-two-header">CONTACT USA</li>
          <li className="blog1-Footer-each-list-three">
            <FaPhone className="blog-icon" />
            +1 480 280 2242
          </li>
          <li className="blog1-Footer-each-list-three">
            <FaMailBulk className="blog-icon" />
            marketing@metropolitanaddis.com
          </li>
          <li className="blog1-Footer-each-list-three">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2875 W Ray Rd
          </li>
          <li className="blog1-Footer-each-list-three">
            <FaLocationArrow className="blog-icon" />
            #6-444 Chandler,
          </li>
          <li className="blog1-Footer-each-list-three">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AZ 85224
          </li>
        </ul>
      </div>
      <div className="blog-Footer-end-container">
        <p className="blog-Footer-end">
          Metropolitan Real Estate PLC © All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer2;
