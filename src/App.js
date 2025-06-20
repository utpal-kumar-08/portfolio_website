import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App portfolio-container">
      <header className="portfolio-header">
        <h1>Utpal Kumar</h1>
        <p className="portfolio-title">Computer Science Student | Aspiring Software Engineer</p>
        <nav className="portfolio-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#positions">Positions</a>
          <a href="#achievements">Achievements</a>
          <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
        </nav>
      </header>

      <section id="about" className="portfolio-section">
        <h2>About Me</h2>
        <p>
          I'm a second-year Computer Science student at NIT Jamshedpur with a knack for turning ideas into interactive, efficient web experiences. Whether it's crafting responsive UIs or optimizing backend performance, I love building solutions that are both smart and scalable. My work blends strong fundamentals in data structures with a creative eye for user experience. I thrive in collaborative environments and am driven by the belief that great software should not only function well—but feel intuitive. Currently, I'm focused on mastering full-stack development and exploring the intersection of technology and real-world impact.
        </p>
      </section>

      <section id="education" className="portfolio-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>National Institute of Technology, Jamshedpur</strong><br/>
            Bachelor of Technology – Computer Science and Engineering<br/>
            Aug 2023 – Present | CGPA: 8.42/10
          </li>
          <li>
            <strong>Delhi Public School, Bokaro</strong><br/>
            Class XII (CBSE), Jul 2020 – Jun 2022 | Percentage: 96.6%
          </li>
          <li>
            <strong>HS DAV Public School</strong><br/>
            Class X (CBSE), Apr 2019 – Mar 2020 | Percentage: 95.4%
          </li>
        </ul>
      </section>

      <section id="skills" className="portfolio-section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> C, C++, Python, JavaScript</li>
          <li><strong>Problem Solving:</strong> Data Structures and Algorithms, Competitive Programming</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, Node.js, React.js, Express.js</li>
          <li><strong>Databases / Tools:</strong> MySQL, MongoDB, Git, GitHub, MUI</li>
          <li><strong>Fundamentals:</strong> Operating Systems (OS), Database Management Systems (DBMS), Object-Oriented Programming (OOPs)</li>
        </ul>
      </section>

      <section id="projects" className="portfolio-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Job-seeker-generator <a href="#" className="source-link">source code</a></h3>
          <p>
            A comprehensive full-stack platform designed to streamline the job search and recruitment process. I built secure authentication using JWT and Bcrypt, ensuring user data privacy. The frontend leverages React.js, React Router, and Bootstrap for a seamless user experience, while the backend APIs are powered by Node.js, Express.js, and MongoDB. By integrating Cloudinary, I optimized image handling and reduced upload times by 40%. This project challenged me to balance performance, security, and usability in a real-world application.
          </p>
          <ul>
            <li>Built a full-stack platform for job listings with secure authentication using <strong>JWT</strong> and <strong>Bcrypt</strong>.</li>
            <li>Developed frontend using <strong>React.js</strong>, React Router, and Bootstrap; backend APIs in <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>.</li>
            <li>Reduced upload time by <strong>40%</strong> (from 5s to 3s) by integrating <strong>Cloudinary</strong> for scalable image handling.</li>
          </ul>
        </div>
        <div className="project">
          <h3>File-sharing <a href="#" className="source-link">source code</a></h3>
          <p>
            This project is a secure file-sharing application that enables users to upload, preview, and download files with confidence. I implemented JWT-based authentication and AWS S3 integration for robust, scalable storage. The responsive UI, built with React.js, Tailwind CSS, Redux Toolkit, and React Router, ensures accessibility across devices. By optimizing backend processes with Axios and Express.js, I achieved a 25% improvement in response times. This project deepened my understanding of cloud services and secure data transfer.
          </p>
          <ul>
            <li>Developed a secure file-sharing app with <strong>JWT</strong>-based auth and uploads to <strong>AWS S3</strong>.</li>
            <li>Built responsive UI using <strong>React.js</strong>, Tailwind CSS, Redux Toolkit, and React Router.</li>
            <li>Optimized file preview and downloads; achieved <strong>25% faster response time</strong> using <strong>Axios</strong> and a streamlined backend in <strong>Node.js</strong> | <strong>Express.js</strong>.</li>
          </ul>
        </div>
        <div className="project">
          <h3>Inventory-Management <a href="#" className="source-link">source code</a></h3>
          <p>
            A real-time inventory and stock tracking platform tailored for businesses to manage products efficiently. I engineered JWT-secured authentication and role-based access to protect sensitive data. The application features fast inventory updates using Redux and optimized rendering with React.js and Tailwind CSS. By designing efficient REST APIs and leveraging microservices with Node.js, Express.js, and MongoDB, I reduced data sync latency by 30%. This project honed my skills in building scalable, maintainable backend systems.
          </p>
          <ul>
            <li>Engineered a real-time stock tracking platform with <strong>JWT</strong>-secured authentication and role-based access.</li>
            <li>Enabled fast inventory updates with Redux store and optimized rendering in <strong>React.js</strong> | <strong>Tailwind CSS</strong>.</li>
            <li>Reduced <strong>data sync latency by 30%</strong> via efficient REST APIs and microservices built with <strong>Node.js</strong> | <strong>Express.js</strong> | <strong>MongoDB</strong>.</li>
          </ul>
        </div>
      </section>

      <section id="positions" className="portfolio-section">
        <h2>Positions of Responsibility</h2>
        <ul>
          <li>Member of <strong>Web Team</strong> of Programming Club of NIT JAMSHEDPUR <span className="date">(March 2025 – Present)</span></li>
          <li>Member of <strong>Web Team and Creative Team</strong> at Society of Computer Science and Engineering (SCSE), NIT Jamshedpur <span className="date">(Nov 2024 – Present)</span></li>
          <li><strong>Branch Coordinator</strong> of Computer Science and Engineering, NIT Jamshedpur</li>
          <li>Vice Captain of Dramatics Club, NIT Jamshedpur <span className="date">(January 2025 – Present)</span></li>
          <li>Member of Official <strong>Table Tennis Team</strong>, NIT Jamshedpur <span className="date">(Nov 2023 – Present)</span></li>
        </ul>
      </section>

      <section id="achievements" className="portfolio-section">
        <h2>Achievements</h2>
        <ul>
          <li><strong>5 Star</strong> in Problem Solving on HackerRank</li>
          <li>Solved 600+ <strong>Data Structures and Algorithms</strong> problems across platforms</li>
          <li><strong>Top 5 rank</strong> in Class 12 at Delhi Public School, Bokaro</li>
          <li>Secured <strong>2nd rank</strong> in district in Class 10 board examination</li>
          <li>Awarded the prestigious <strong>Aditya Birla Capital Scholarship</strong> for academic excellence in engineering</li>
          <li>Participated in various hackathons</li>
          <li>Honored as <strong>Most Outstanding Speaker</strong> for articulating ideas clearly and confidently during competitive debates</li>
        </ul>
      </section>

      <footer className="portfolio-footer">
        <div>Contact: <a href="mailto:um697893@gmail.com">um697893@gmail.com</a> | <a href="https://linkedin.com/in/utpal-kumar-a1b3ba285" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/utpal-kumar-08" target="_blank" rel="noopener noreferrer">GitHub</a> | <span>+91-9973928133</span></div>
        <div>&copy; {new Date().getFullYear()} Utpal Kumar</div>
      </footer>
    </div>
  );
}

export default App;
