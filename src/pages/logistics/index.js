import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Logistics() {
  return (
    <Layout title="Logistics">
      <div className="container">
        <h1 style={{marginTop: "2%"}}>Logistics</h1>
        <p>The course homepage will serve as the location for all documents (lecture notes, homework assignments, etc.).</p>
        <h2>Slack</h2>
        <p>We will use Slack for all communication. So please use this <Link to="https://join.slack.com/t/slack-mqg3625/shared_invite/zt-1et7w3syu-YHo6Ty7AdSAh~x1Af0BObw"></Link> to join the workspace for this course. It is preferred (but not required) to use your JHU email to join the workspace.</p>
        <p>
        <div class="alert alert--danger" role="alert">
        <strong>Update Profile</strong><br/><br/>
        <ul>
          <li>Your "Full name" must be your full name as it appears in SIS.</li>
          <li>Your "Display name" must be your given or preferred name.</li>
        </ul>
        </div>
        </p>
        <p>
        You are encouraged (but not required) to upload a recent photo (use a professional image). The changes you make to your profile are specific to this workspace; it will not affect your profile in other Slack workspaces that you may be a member of.
        </p>
        
        <h2>Git & Github</h2>
        <p>
        We use Git as Version Control System and GitHub for Collaborative Programming.
        </p>
        <ul>
          <li>
          Follow the instructions provided here to set up Git on your computer.
          </li>
          <li>
          If you don't already have a GitHub account, please make one by visiting https://github.com/. It is preferred (but not required) if you make your GitHub account linked to your JHU email and use your JHED as your GitHub username.
          </li>
          <li>
          <mark>Join the course Github organization page (jhu-oose-f22)</mark>: use this <Link to="https://jhu-oose-gogithub.herokuapp.com/"> link</Link>.
          </li>
        </ul>
        <p>
        <div class="alert alert--danger" role="alert">
        Your "name" on your GitHub profile must be your full name as it appears in SIS.
        </div>
        </p>
        <p>
        Your "name" on your GitHub profile must be your full name as it appears in SIS.
Your GitHub profile is public. If it is crucial to you that your GitHub profile does not contain your real name, then please make another GitHub account just for this course. As with the Slack profile, it is recommended (but not required) to upload a recent (professional) photo.
        </p>


      <h2>Gradescope</h2>
      <p>
      Homework and project submission and grading will be done in Gradescope. To start:
      </p>
      <ol>
        <li>Visit the course Gradescope page <Link to="https://www.gradescope.com/courses/420577">https://www.gradescope.com/courses/420577</Link></li>
        <li>Join via entry code <em>G2PZBK</em></li>
      </ol>
      <div class="alert alert--danger" role="alert">
        You must join Gradescope ONLY using your JHU credentials, otherwise you will be removed from the roster!
      </div>
    </div>
    </Layout>
  );
}

export default Logistics;