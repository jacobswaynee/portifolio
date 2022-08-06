import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollServices';
import "./Profile.css"

export default function profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/waynemike.jacx1/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=app&pli=1'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/mike_w_jacob/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/watch?v=Ke90Tje7VS0&t=5662s'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://twitter.com/i/flow/single_sign_on'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/wayne-mike-8a019522a/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Mike Wayne</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {""}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Junior Web Developer 😎",
                                1000,
                                "Full Stack Dev 💻",
                                1000,
                                "Software Engineer Dev 📱",
                                1000,
                                "React/React Native Dev🔴",
                                1000,
                                "PHP Junior Dev 🌐",
                                1000,
                                "Drupal Junior Dev",
                                1000,
                            ]}
                            />
                        </h1>
                    </span>
                    <span className='profile-role-tagline'>
                     A free tool that works anywhere you do. Say goodbye to grammatical.
                    </span>
                </div>

                <div className='profile-options'>
                     <button className="btn primary-btn"  onClick={() =>
                         ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
                     <a href='mikecv.pdf' download='wayne mike nyakabau mikecv.pdf'>
                     <button className="btn highlighted-btn">Get Resume</button>
                     </a>
                </div>
            </div>
            <div className='profile-picture'>
             <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  );
}
