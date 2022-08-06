import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollServices'
import Animations from '../../utilities/Animations'
import './Resume.css'

const Resume = (props) => {
    const [selectedBulletsIndex, setSelectedBulletsIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
      if(screen.fadeScreen !== props.id)
      return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };

    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
      {skill: "JavaScript", ratingPercentage: 50},
      {skill: "React JS", ratingPercentage: 70},
      {skill: "React Native", ratingPercentage: 40},
      {skill: "Express JS", ratingPercentage: 30},
      {skill: "PHP", ratingPercentage: 90},
      {skill: "Laravel 10", ratingPercentage: 30},
      {skill: "NodeJS", ratingPercentage: 80},
      {skill: "HTML5", ratingPercentage: 60},
      {skill: "CSS3", ratingPercentage: 90},
      {skill: "Bootstrap", ratingPercentage: 50},
    ];

    const projectDetails = [
      {
        title: "Personal Portfolio Website",
        deration: {fromDate: "2022", toDate: "2022"},
        description: "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
      {
        title: "Personal Portfolio Website",
        deration: {fromDate: "2022", toDate: "2022"},
        description: "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
      {
        title: "Personal Portfolio Website",
        deration: {fromDate: "2022", toDate: "2022"},
        description: "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
    ];

    const resumeDetails = [
      <div className='resume-screen-container' key="education">
        <ResumeHeading
        heading={"University of Zimbabwe, Zimbabwe"}
        subHeading={"CERTIFICATE INFORMATION TECHNOLOGY"}
        fromDate={"2018"}
        toDate={"2022"}
        />
        <ResumeHeading
        heading={"FOUNDATION TECHNICAL COLLEGE"}
        subHeading={"CERTIFICATE INFORMATION TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2017"}
        />
        <ResumeHeading
        heading={"SEKE 2 HIGH SCHOOL"}
        subHeading={"CERTIFICATE INFORMATION TECHNOLOGY"}
        fromDate={"2007"}
        toDate={"2012"}
        />
      </div>,
      <div className='resume-screen-container' key="work-experience">
        <ResumeHeading
        heading={"Company Name"}
        subHeading={"Junior Sofware Engineer"}
        fromDate={"2022"}
        toDate={"Present"}
        />
        <div className='experience-description'>
          <span className='resume-description'>
          Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>

        <div className='experience-description'>
          <span className='resume-description-text'>
          - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br/>
          <span className='resume-description-text'>
          - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.
          </span>
          <br/>
          <span className='resume-description-text'>
          - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
        </div>,
        <div className='resume-screen-container programming-skills-container' key="programming-skills">
          {programmingSkillDetails.map((skill, index)=>(
            <div className='skill-parent' key={index}>
              <div className='heading-bullet'></div>
              <span>{skill.skill}</span>
              <div className='skill-percentage'>
                <div style={{width: skill.ratingPercentage + ""}}
                className="active-percentage">

                </div>
              </div>
            </div>
          ))}
        </div>,

        <div className='resume-screen-container' key='projects'>
          {projectDetails.map((projectDetails, index)=>(
            <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.deration.fromDate}
            toDate={projectDetails.deration.toDate}
            />
          ))}
        </div>,

        <div className='resume-screen-container' key='Interest'>
          <ResumeHeading
          heading="Teaching"
          description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
          />
          <ResumeHeading
          heading="Music"
          description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
          />
          <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
          />
        </div>
      </div>,
    ];

    const handleCarousal = (index)=>{
      let offsetHeight = 360;
      let newCarousalOffset ={
        style: {transform: "translateY" + index * offsetHeight * -1 + "px"}
      };
      setCarousalOffSetStyle(newCarousalOffset);
      setSelectedBulletsIndex(index);
    };

    const getBullets =()=>{
      return resumeBullets.map((bullet, index)=>(
        <div 
        onClick={()=>handleCarousal(index)} className={index=== selectedBulletsIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
        >
          <img
          className="bullet-logo"
          src={require (`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };

    const getResumeScreen =()=>{
      return(
        <div style={carousalOffSetStyle.style}
        className='resume-details-carousal'
        >
          {resumeDetails.map((ResumeDetail)=> ResumeDetail)}
        </div>
      );
    };

    useEffect(() => {
      return () => {
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);

    
  return (
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
            <div className='resume-card'>
              <div className='resume-bullets'>
                <div className='bullet-container'>
                  <div className='bullet-icon'></div>
                  <div className='bullets'>{getBullets()}</div>
                </div>
              </div>
              <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    </div>
  );
}

export default Resume;

