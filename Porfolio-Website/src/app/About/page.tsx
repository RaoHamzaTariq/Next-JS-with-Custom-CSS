import Image from "next/image"
import "./about.css"

export default function About() {
  return (
    <div className="main-container">
      
  <section className="about-section">
    <div className="about-content">
      <h1>About Me</h1>
      <p>
        I am passionate data analyst, data scientist and developers, dedicated to crafting exceptional digital
        experiences. Our mission is to help businesses and individuals achieve their goals through innovative and
        user-centric solutions.
      </p>
    </div>
    <Image className="about-image" src="/images/2.png" height={"400" }width={"400"} alt=""/>
  </section>

  <section className="values-section">
    <div className="containers">
      <div className="values-intro">
        <h2>Our Values</h2>
        <p>We uphold a set of core values that guide our work and shape our culture.</p>
      </div>
      <div className="values-grid">
        <div className="value-card">
          <div className="icon rocket-icon"></div>
          <h3>Innovation</h3>
          <p>{"We embrace new ideas and technologies to push the boundaries of what's possible."}</p>
        </div>
        <div className="value-card">
          <div className="icon heart-icon"></div>
          <h3>Passion</h3>
          <p>We pour our hearts into every project, driven by a genuine love for our craft.</p>
        </div>
        <div className="value-card">
          <div className="icon users-icon"></div>
          <h3>Collaboration</h3>
          <p>We believe in the power of teamwork, fostering a culture of open communication and mutual support.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="achievements-section">
    <div className="containers">
      <div className="achievements-intro">
        <h2>Our Achievements</h2>
        <p>We are proud of the milestones we have reached and the impact we have made on our clients and the industry.</p>
      </div>
      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="icon award-icon"></div>
          <h3>Industry Awards</h3>
          <p>Our work has been recognized with prestigious industry awards, showcasing our commitment to excellence.</p>
        </div>
        <div className="achievement-card">
          <div className="icon briefcase-icon"></div>
          <h3>Satisfied Clients</h3>
          <p>We have a proven track record of delivering exceptional results and building long-lasting relationships with our clients.</p>
        </div>
        <div className="achievement-card">
          <div className="icon scaling-icon"></div>
          <h3>Continuous Growth</h3>
          <p>Our agency has experienced steady growth, allowing us to expand our services and reach new heights.</p>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

function AwardIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  )
}


function BriefcaseIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ScalingIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}


function UsersIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}