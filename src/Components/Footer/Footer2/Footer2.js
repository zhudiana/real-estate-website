import "./Footer2.css";
import {FaAd, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaPhoneAlt, FaTelegram, FaTwitter, FaVoicemail, FaYoutube} from 'react-icons/fa';
import { useState } from "react";

const Footer2 = () => {
    return(
        <div className="Footer-two-container">
            <div className="Footer-two-list">
                <span>
                    <img src="https://metropolitanaddis.com/wp-content/uploads/2021/12/logo_Çalışma-Yüzeyi-3-220x300.png" className="Footer-image"/>
                </span>
                    
                <ul className="Footer-list">
                    <li className="Footer-each-list-two-header">CONTACT ETHIOPIA</li>
                    <li className="Footer-each-list-two"><FaPhone className="icon"/>9896</li>
                    <li className="Footer-each-list-two"><FaPhone className="icon"/>+251 973 40 40 40</li>
                    <li className="Footer-each-list-two"><FaPhone className="icon"/>+251 973 30 30 30</li>
                    <li className="Footer-each-list-two"> <FaMailBulk className="icon"/>info@metropolitanaddis.com</li>
                    <li className="Footer-each-list-two"><FaLocationArrow className="icon"/>Bole, Around Friendship Hotel, Infront of Istanbul Restaurant, Addis Ababa, Ethiopia </li>
                </ul>
                <ul className="Footer-list">
                    <li className="Footer-each-list-two-header">CONTACT USA</li>
                    <li className="Footer-each-list-three"><FaPhone className="icon"/>+1 480 280 2242</li>
                    <li className="Footer-each-list-three"><FaMailBulk className="icon"/>marketing@metropolitanaddis.com</li>
                    <li className="Footer-each-list-three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2875 W Ray Rd</li>
                    <li className="Footer-each-list-three"><FaLocationArrow className="icon"/>#6-444 Chandler,</li>
                    <li className="Footer-each-list-three">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AZ 85224</li>
                </ul>
                <ul className="Footer-list">
                    <li className="Footer-each-list-two-header">KEEP IN TOUCH</li>
                    <div className="Footer-list-icons">
                        <li className="Footer-each-list-four"><FaFacebook /></li>
                        <li className="Footer-each-list-four"><FaTwitter /></li>
                        <li className="Footer-each-list-four"><FaLinkedin /></li>
                        <li className="Footer-each-list-four"><FaInstagram /></li>
                        <li className="Footer-each-list-four"><FaYoutube /></li>
                    </div>
                    
                </ul>
                
            </div>
            <div className="Footer-end-container">
                    <p className="Footer-end">
                         Metropolitan Real Estate PLC © All rights reserved
                    </p>
                </div>
                
            
        </div>
    )
}

export default Footer2;