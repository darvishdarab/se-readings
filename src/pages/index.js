import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';


const GithubBtn = () => {   


  return (
    <div className={styles.buttons}>
    <Link
      className={clsx('button button--lg', styles.bb0dark)}
      to="https://github.com/orgs/jhu-oose-f22/dashboard">
      Github
    </Link>
    </div>
  )
}

function Home() {
  return (
    <Layout title="EN.601.421/621 Object Oriented Software Engineering">
      <span className="alert alert--info" style={{display: "flex", justifyContent: "center", padding: "0 0 0 0"}}>
        <b>Announcement:&nbsp;</b>HW6 out! Practice quiz and solutions posted!
      </span>
      <div className={styles.main}>
        <h1>EN.601.421/621: Object Oriented Software Engineering - Fall 2022</h1>
        <p><strong>Course Description:</strong> This course covers object-oriented software construction methodologies and their application. A major component of the course is a large team project on a topic of your choosing. Course topics covered include object-oriented analysis and design, UML, design principles, refactoring, program testing, code repositories, team programming, and code reviews.</p>
        

        <GithubBtn />
        
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.bb1)}
            to="https://join.slack.com/t/slack-mqg3625/shared_invite/zt-1et7w3syu-YHo6Ty7AdSAh~x1Af0BObw">
            Slack
          </Link>
        </div>
      
        <div className={styles.buttons}>
          <Link
            className={clsx('button  button--lg', styles.bb2)}
            to="https://www.gradescope.com/courses/420577">
            Gradescope
          </Link>
        </div>
       <br /> 
        <br />
        <h2>Course Information</h2><br />
        
        <strong>Time:</strong> Monday, Wednesday & Friday 4:30 PM – 5:20 pm EST.
        <br /><strong>Location:</strong> All sessions are held in-person @ Hudson 210; See the <em>tentative</em> <Link to="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxhcr1O4wZDrXvxtYJRaifaS3vQvYO_v8xUUB4PsYjabB60_mpEIpPJki1X_DyZ7l88Sr8NBYgtzrO/pubhtml">schedule</Link>.
        <br /><strong>Contact and Communication</strong>: For all course inquiries and communications, please use its <Link to="https://join.slack.com/t/slack-mqg3625/shared_invite/zt-1et7w3syu-YHo6Ty7AdSAh~x1Af0BObw"> Slack</Link> workspace.
        <br /><strong>Homework Submission:</strong>: All homework assignments must be submitted on <Link className={clsx('button button--sm', styles.button2)} to="https://www.gradescope.com/courses/420577">Gradescope</Link>. Join via entry code <em> G2PZBK</em>. 
        </div>


    </Layout>
  );
}

export default Home;
