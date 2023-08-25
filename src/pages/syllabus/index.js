import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Syllabus() {
  return (
    <Layout title="Schedule and Policies">
      <div className="container">
        <h1 style={{marginTop: "2%"}}>Instructor</h1>
        <p>
        Dr. Ali Darvish <br />
        <a href="darvish@jhu.edu">darvish@jhu.edu</a>, <br/>
        <Link to="https://www.cs.jhu.edu/~darvish">https://www.cs.jhu.edu/~darvish</Link>,<br/>
        Office hours: TBA
        </p>

        <h1>Schedule</h1>
        <p>
          Click <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxhcr1O4wZDrXvxtYJRaifaS3vQvYO_v8xUUB4PsYjabB60_mpEIpPJki1X_DyZ7l88Sr8NBYgtzrO/pubhtml" target="_blank">here</a> to see the schedule. The schedule is tentative and it might be updated as we make progress through the semester.
        </p>
        {/*<iframe src="https://calendar.google.com/calendar/embed?src=hivrfplagidt2kpq5h3k7rbvi8%40group.calendar.google.com&ctz=America%2FNew_York"  width="640px" height="420px" frameborder="1"></iframe> */}
                
        <br />
        <h1>Syllabus</h1>
        <div class="alert alert--danger" role="alert">
        The instructor reserves the right to make adjustments to any of the given syllabus policies and/or schedules (as deemed necessary with an advance notice.)    
        </div>
        
        <h2>Course Information</h2>
        
<p>This course covers object-oriented software construction methodologies and their application. The main component of the course is a large team project on a topic of students' choosing. Course topics covered include object-oriented analysis and design, UML, design patterns, refactoring, program testing, code repositories, team programming, and code reviews. [Area: Systems or Applications]</p>

<div class="alert alert--info" role="alert">
<strong>Prerequisites:</strong><br /><br />
EN.601.280 Full-Stack JavaScript or EN.601.290 User Interfaces & Mobile Applications or via instructor approval.
</div>
<br/>

<p>

Upon successful completion of this course, you should be able to: <br/>
<ul>
<li>Explain the client-server model and structure a software system that adheres to this software architecture. (SO6)</li>
<li>Write a software requirements specification (SRS) document that describes a medium-size software system's functional requirements. (SO3, SO6)</li>
<li>Prioritize the functional requirements of a software system according to its requirement specifications. (SO6)</li>
<li>Recognize software process models and distinguish between plan-driven models (such as waterfall) versus incremental development approaches (such as agile). (SO1)</li>
<li>Follow the agile software development process (short iteration, continuous delivery, etc.) to build medium-size software. (SO5)</li>
<li>Describe how version control can be used to help collaborative software development. (SO1)</li>
<li>Demonstrate the capability to use software tools (Git/GitHub, Wireframing tools, build tools like Gradle, dependency management tools like NPM, IDEs, \dots) to support the development of a software product of medium size. (SO6)</li>
<li>Articulate object-oriented design principles, including separation of concerns, information hiding, coupling and cohesion, and encapsulation. (SO1)</li>
<li>Use UML to express the design of a simple software system and explain how system design principles have been applied in this design. (SO3)</li>
<li>Design, implement, document, and test application programming interface (API) for a simple software system. (SO6)</li>
<li>Design and implement data persistence strategies (such as databases, caching, cookies, and sessions in web applications) for medium-size multiuser software applications. (SO6)</li>
<li>Describe the SOLID design principles and apply them to the design of small software systems. (SO1)</li>
<li>Provide examples of creational, structural and behavioral design patterns in the object-oriented programming paradigm. (SO1)</li>
<li>Within the context of the object-oriented paradigm, describe one or more design patterns that could apply to a simple software system design. (SO1)</li>
<li>Describe a form of refactoring and discuss when it may be applicable. (SO1)</li>
<li>Refactor an existing software implementation to improve some aspects of its design. (SO2)</li>
<li>Write a software component that performs some non-trivial task and is resilient to input and run-time errors (SO6)</li>
<li>Create and document a set of tests for a medium-size code segment. (SO2)</li>
<li>Demonstrate through involvement in a team project the central elements of team building and team management. (SO5)</li>
<li>Demonstrate effective presentation skills through involvement in a team project presentation (SO3)</li>
</ul>
</p>

This course will address the following Computer Science BS Program Student Outcomes:
<ul>
<li>SO1: Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.</li>
<li>SO2: design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.</li>
<li>SO3: Communicate effectively in a variety of professional contexts.</li>
<li>SO5: Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline.</li>
<li>SO6: Apply computer science theory and software development fundamentals to produce computing-based solutions.</li>
</ul>

        <h2>Course Components</h2>
        <p>
        This course has a number of homework assignments, a semester-long project along with a final presentation and an individual written quiz.
        </p>

        <h3>Homework</h3>

        <p>There are several mandatory individual homework assignments. These assignments are meant to help with solidifying your understanding of the core concepts in object-oriented software design and engineering. Each homework assignment will be
assigned a point value; the overall homework assignments grade will be computed as your total points earned divided by the total achievable points. Each Homework assignment has a deadline that will be enforced.

        </p>
        <p>
        <div class="alert alert--warning" role="alert">
        There are no late days for homework deadlines.
        </div>
        </p>
        <h3>Project & Presentation</h3>
        <p>
         A major component of the course is a semester long term project with (roughly) bi-weekly deliverables (iterations). Each iteration will be
assigned a point value; the overall iteration grade will be computed as your total points earned divided by the total achievable points. There will be a final presentation during part of the final examination period. The deliverables for each iteration will generally be based on "students plan" for that iteration; i.e., their progress is measured against their plan/goals.
        </p>

        <div class="alert alert--warning" role="alert">
        There are no late days for project iteration deadlines.
        </div>
        
        <br />
        <h3>Quiz</h3>
        <p>There will be a written individual comprehensive (covering all the materials taught) quiz with a focus on object-oriented software design (tentatively scheduled for <em>Monday 9/26 during the class time</em>.) <em>Students will not be asked to write code.</em> They must, however, be able to e.g. critique a design provided in a UML format. They must also be able to e.g. define (and elaborate on) each design principles/patterns covered in this course. The quiz is individual, timed, closed-book and closed-note, and proctored.
        </p>
        
        
        <div class="alert alert--warning" role="alert">
          Students will be provided with the necessary information about the quiz assessment as well as sample prep material.
        </div>



        <h2>Grading Scheme</h2>
        <p> Course grades will be based on homeworks, project and a quiz. (No final exam!) <br />
          <ul>
            <li>25% - Homework</li>
            <li>10% - Quiz (Written, individual, timed, closed-book/note and proctored)</li>
            <li>60% - The semester-long Project</li>
            <li>5% - Final Presentation</li>
          </ul>
        </p>
        Letter grades for the course will be subject to the instructor's evaluation of your overall class performance, generally based on this standard scale: 
        

        <table style={{padding: "20px 0px 20px 40px"}}>
          <tr>
            <th>Cutoff</th>
            <th>Letter</th>            
          </tr>
          <tr>
            <td>{">"} 90</td>
            <td>A-, A, A+</td>
          </tr>
          <tr>
            <td>{">"} 80</td>
            <td>B-, B, B+</td>
          </tr>
          <tr>
            <td>{">"} 70</td>
            <td>C-, C, C+</td>
          </tr>
          <tr>
            <td>&#8805; 60</td>
            <td>D, D+</td>
          </tr>
          <tr>
            <td>{"<"} 60</td>
            <td>F</td>
          </tr>
        </table>

        <p>The cutoff for assigning -/+ to each grade letter is further subject to the instructor's evaluation of your overall class performance.</p>

        <div class="alert alert--warning" role="alert">
          You should not expect a curve in this course.
        </div>
        <br />
        
        <h3>Attendance</h3>
        The lecture meetings will be held in person on the Homewood campus. All students are expected to attend all course meetings and actively participate in all class activities.
        <br />        
        <br/>

        <h3>
        Professionalism & Adequate Contribution/Performance
        </h3>
        <p>For most of the semester, you will be working on a group project. The success of the group depends on the participation of the members. Poor team members cause dysfunction and strife. Here are some characteristics of poor team members:
        </p>
        <p>
        <details><summary>Inconsideration</summary>
        <p>Missing deadlines; missing or being late to meetings; being unprepared for meetings; not doing what you were supposed to do; not contributing your fair share of the team's workload; being unavailable or unresponsive to communication; etc.</p>
        </details>  
        
        <details><summary>Rudeness</summary>
        <p>Being disrespectful to advisors/teammates; brashly rejecting the ideas or opinions of others; lack of appreciation for other team members' contributions; etc.</p>
        </details>  

        <details><summary>Apathy</summary>
        <p>Not taking an active role in team discussions; showing little or no interest in the team's activities; relying on others to make decisions and carry out the work; failing to listen, consistently asking teammates to repeat information; lack of focus and disengagement; etc.</p>
        </details>  

        <details><summary>Dominance</summary>
        <p>Dominate team activities and seek control over every aspect; do as many of the tasks as you can without seeking input or support from other teammates; being (over)possessive of your work and refuse to listen to teammates about ways to improve it; take credit for every success of the team without sharing credit with team members; etc.</p>
        </details>  

        <details><summary>Irresponsibility</summary>
        <p>Failure to own a mistake or accept responsibility for a missed deadline; blaming others for an error that occurred due to a decision or activity on the team's part; unwillingness to receive feedback or respond to instruction from advisor/instructor; etc.</p>
        </details>  
        </p>
        <p>
        Failing to deal with poor members can lead to low morale and, ultimately, team failure. In the work environment, this incompetency will not be tolerated. When a worker displays a poor work ethic or isn't doing their job correctly, an employer will typically call it to their attention through a verbal warning. If that didn't work, the next steps are a written warning (Letter of Reprimand), suspension, and finally, termination.
        </p>
        <p>
        <div class="alert alert--warning" role="alert">
        In this course, we will penalize individuals (or the whole team if needed!) for any unprofessionalism and/or lack of adequate contribution/performance. 
        </div>
        
        </p>
        <h3>Ethics</h3>
        <p>
        The strength of the university depends on academic and personal integrity. In this course, you must be honest and truthful, abiding by the <a href="https://www.cs.jhu.edu/academic-programs/academic-integrity-code/" target="_blank">Computer Science Academic Integrity Policy</a>; please carefully study it. Please report any violations you witness to the instructor.
        </p>
        
        <h3>Personal Well-being</h3>
        <ul>
          <li>All students with disabilities who require accommodations for this course should contact me at their earliest convenience to discuss their specific needs. If you have a documented disability, you must be registered with the JHU Office for Student Disability Services (385 Garland Hall; 410-516-4720; http://web.jhu.edu/disabilities/) to receive accommodations.        </li>
          <li>
          If you are struggling with anxiety, stress, depression, or other mental health-related concerns, please consider visiting the JHU Counseling Center. If you are concerned about a friend, please encourage that person to seek out our services. The Counseling Center is located at 3003 North Charles Street in Suite S-200 and can be reached at 410-516-8278 and online at http://studentaffairs.jhu.edu/counselingcenter/
          </li>
        </ul>

        <h3>
          Classroom Climate
        </h3>
        <p>
        I am committed to creating a classroom environment that values the diversity of experiences and perspectives that all students bring. Everyone here has the right to be treated with dignity and respect. I believe fostering an inclusive climate is important because research and my experience show that students who interact with peers who are different from themselves learn new things and experience tangible educational outcomes. Please join me in creating a welcoming and vibrant classroom climate. Note that you should expect to be challenged intellectually by me, the TAs, and your peers, and at times this may feel uncomfortable. Indeed, it can be helpful to be pushed sometimes in order to learn and grow. But at no time in this learning process should someone be singled out or treated unequally on the basis of any seen or unseen part of their identity.
        </p>
<p>
If you ever have concerns in this course about harassment, discrimination, or any unequal treatment, or if you seek accommodations or resources, I invite you to share directly with me or the TAs. I promise that we will take your communication seriously and to seek mutually acceptable resolutions and accommodations. Reporting will never impact your course grade. You may also share concerns with the Department Head (Randal Burns, randal@cs.jhu.edu), the Director of Undergraduate Studies (Joanne Selinski, joanne@cs.jhu.edu), the Assistant Dean for Diversity and Inclusion (Darlene Saporu, dsaporu@jhu.edu), or the Office of Institutional Equity (oie@jhu.edu). In handling reports, people will protect your privacy as much as possible, but faculty and staff are required to officially report information for some cases (e.g., sexual harassment).
        </p>

        <h3>
          Late Day Policy
        </h3>
        <div class="alert alert--danger" role="alert">
        There is no late day nor grace period for homework/project deadlines.
        </div> <br/>
        If, for any extenuating circumstances, you (or your team) are unable to meet a deadline, please reach out to the instructor as soon as possible. You may be granted an extension at the instructor's discretion on a case-by-case basis.
        <br/><br/>
        <h3>
          Personal Days
        </h3>
        <p>
        <div class="alert alert--danger" role="alert">
        <strong>From WSE Deans correspondence: </strong><br/>
        Religious holidays are valid reasons to be excused from class. Students who must miss a class or an examination because of a religious holiday must inform the instructor as early in the semester as possible to be excused from class or to make up any work that is missed.
        </div>
        <br/>
        I extend the same courtesy to cultural/national holidays and other engagements that cannot be avoided, such as athletics events, job interviews, etc.

Note that personal days (such as religious holidays) are usually not ground for an extension over a homework deadline. It would be best if you planned accordingly to avoid any conflict.
      </p>
      <h3>
      Drop/Withdraw/Incomplete
      </h3>
      <ul>
        <li>
        Last day to drop: October 9 (online).
        </li>
        <li>
        Last day to withdraw: November 11, 4:30pm
        </li>
      </ul>
      <p>For more info, go to <a href="https://studentaffairs.jhu.edu/registrar/students/registration/" target="_blank">https://studentaffairs.jhu.edu/registrar/students/registration/</a>
      </p>

      <div class="alert alert--danger" role="alert">
      <strong>Incomplete Grade</strong><br/>
<p>
A request for an "Incomplete" grade in this course will not be granted because the project you are working on would have to be completed without you. Therefore, there is no opportunity for "classwork" to be completed later! Exceptions may be made at the instructor's discretion on a case-by-case basis.
</p>
</div>
      </div>
    </Layout>
  );
}

export default Syllabus;