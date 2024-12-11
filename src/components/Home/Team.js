import './CSS/team.css'
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { SocialIcon } from 'react-social-icons'
import image1 from './CSS/image1.jpg'
import image2 from './CSS/image2.jpg'
import image3 from './CSS/image3.jpg'
import image4 from './CSS/image4.jpg'

const Team = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    return (
        <div className="Team">
            <h2 ref={revealRefTop}> Our Team</h2>
            <div className='Team-Content'>
                <div className='Team-Content-Card' ref={revealRefLeft}>
                    <img src={image1} className='image'></img>
                    <h3>OMM Kumar | <span>MERN Stack Developer</span></h3>
                    <p>Passionate Software Developer | Developing strong skills in Data Structures and Algorithms, JavaScrip, NodeJs development | Software Development Enthusiast | Innovator.
                    My journey is driven by the pursuit of innovative software solutions. I believe in utilizing my strategic planning skills to create impactful projects while also inspiring others through motivational speaking.</p>
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/omm-kumar/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/OmmJishu" target='_blank' url="www.github.com" />
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image2} className='image'></img>
                    <h3>Nitya Oberoi | <span>MERN Stack Developer</span></h3>
                    <p>Energetic Software Developer with a BTech in Computer Science & Engineering, proficient in C++, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/nitya-oberoi-78b054239/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/nityaoberoi09" target='_blank' url="www.github.com" />
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image3} className='image'></img>
                    <h3>Payal Chauhan | <span>MERN Stack Developer</span></h3>
                    <p>Passionate Python Developer 🚀

I'm a Python enthusiast with a keen eye for detail and a knack for problem-solving. With a solid foundation in Python programming, I excel in developing clean, efficient, and scalable solutions across various domains, including web development, data analysis, and automation. Known for my positive attitude, strong communication skills, and collaborative approach, I thrive in interdisciplinary team environments, fostering a culture of innovation and growth. Committed to continuous improvement.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/payal-chauhan-0950b1230/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/payalchauhan2003" target='_blank' url="www.github.com" />
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image4} className='image'></img>
                    <h3>Pranav Pandey | <span>MERN Stack Developer</span></h3>
                    <p>Aspiring Software Developer with a BTech in Computer Science & Engineering, proficient in C/C++, Python, and JavaScript, React, NodeJs. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/pranav-pandey-11ba27289/" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/pranav1712" target='_blank' url="www.github.com" />
                </div>


            </div>
        </div>
    )
}
export default Team;