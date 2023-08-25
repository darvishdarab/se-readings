import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Toolbox() {
  return (
    <Layout title="OOSE Toolbox">
      <div className= "container">
        <br />
        <h1>OOSE Toolbox</h1>
        <div class="row">
            <div class="alert alert--info col col--8" role="alert" style={{marginTop: "3%"}}>
            <h4> Info</h4>
            We provide some tutorial-style lessons during the lecture (accompanied with notes in the readings) to 
            get you started with the tools listed below. You are, however, ultimately in charge of learning these 
            just enough to use them for completing your course project.
            </div>
        </div>  

        <div class="row">
            <div class="alert alert--info col col--8" role="alert" style={{marginTop: "3%"}}>
            <h4> Info</h4>
            OOSE involves a lot of programming but it is not a programming course! It is a course about design and 
            engineering of software applications. That means, you will not be asked questions on the exam (quiz) 
            about any of the tools listed below.
            </div>
        </div>

        {/*<div class="row">
            <div class="alert alert--warning col col--8" role="alert" style={{marginTop: "3%"}}>
            <h4> Caution</h4>
            If you have significant experience with other tools and you would like to use them 
            (for your project) instead of the ones listed below, please make sure to get the instructor's approval.
            </div>
        </div>*/}


        <h2>The following is the list of tools we will cover in this class:</h2>
        
        <div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th >Category</th>
                    <th >Name</th>
                    <th >Resources and Tutorials</th>
                </tr>
            </thead>
            
            <tbody className={styles.tbody}>
                <tr>
                    <td>Integrated Development Environment (IDE)</td>
                    <td><a href="https://www.jetbrains.com/idea/" target="_blank">Intellij <img src={useBaseUrl("img/logo_ij.png")} style={{width: '28px', height: '28px', position: 'relative', top: '6px' }}></img></a></td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://www.jetbrains.com/idea/documentation/" target="_blank">Intellij documentation</a>
                            </li>
                            <li>
                                <a href="https://www.jetbrains.com/community/education/#students" target="_blank">Intellij Ultimate for students</a>
                            </li>
                        </ul>
                    </td>
                </tr>
                
                <tr>
                    <td>Build Automation</td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://gradle.org/" target="_blank">Gradle <img src={useBaseUrl("img/logo_gradle.png")} style={{width: '24px', height: '24px', position: 'relative', top: '5px' }}></img> 
                                </a>
                            </li>
                            <li><a href="https://maven.apache.org/" target="_blank">Maven <img src={useBaseUrl("img/logo_maven.png")} style={{width: '44px', height: '18px', position: 'relative', top: '4.5px'}}></img> 
                            </a>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://docs.gradle.org/current/userguide/userguide.html" target="_blank">Gradle user manual</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=JwPYjnhah3g" target="_blank">Gradle Intellij video</a>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Version Control</td>
                    <td><a href="https://git-scm.com/" target="_blank">Git <img src={useBaseUrl("img/logo_git.png")} style={{width: '44px', height: '18px', position: 'relative', top: '4px' }}></img> 
                            </a></td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://git-scm.com/doc" target="_blank">Git documentation</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=SWYqp7iY_Tc" target="_blank">Git & Github crash course video</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=FyAAIHHClqI" target="_blank">Git branching and merging video</a>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Project Management</td>
                    <td><a href="https://github.com/" target="_blank">Github <img src={useBaseUrl("img/logo_github.png")} style={{width: '22px', height: '22px', position: 'relative', top: '6px'}}></img> 
                        </a>
                    </td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://lab.github.com/githubtraining/introduction-to-github" target="_blank">Intro to Github</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/github/managing-your-work-on-github/about-issues" target="_blank">Github Issues</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests" target="_blank">Intro pull requests</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards" target="_blank">Github project boards</a>                                
                            </li>
                            <li>
                                <a href="https://www.datree.io/resources/github-best-practices" target="_blank">Github best practices</a>                                
                            </li>
                        </ul>

                    </td>
                </tr>
                <tr>
                    <td>Database Management System (DBMS)</td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li><a href="https://www.sqlite.org/" target="_blank">SQLite <img src={useBaseUrl("img/logo_sqlite.png")} style={{width: '48px', height: '22px', position: 'relative', top: '5px'}}></img></a></li>
                            <li><a href="https://www.postgresql.org/" target="_blank">PostgreSQL <img src={useBaseUrl("img/logo_postgres.svg")} style={{width: '25px', height: '26px', position: 'relative', top: '9px'}}></img></a></li>
                        </ul>
                    </td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://www.sqlite.org/docs.html" target="_blank">SQLite documentation</a>
                            </li>
                            <li>
                                <a href="https://www.postgresql.org/docs/12/index.html" target="_blank">Postgres documentation</a>
                            </li>
                        </ul>

                    
                    </td>
                </tr>
                <tr>
                    <td>Object Relational Mapping (ORM)</td>
                    <td>
                       <a href="https://www.sql2o.org/" target="_blank">SQLite <img src={useBaseUrl("img/logo_sql2o.png")} style={{width: '59px', height: '18px', position: 'relative', top: '5px'}}></img></a>
                    </td>
                    <td>
                        <a href="https://github.com/aaberg/sql2o/wiki" target="_blank">SQL2o documentation</a>
                    </td>
                </tr>

                <tr>
                    <td>Testing</td>
                    <td>
                        <a href="https://junit.org/junit5/" target="_blank">JUnit <img src={useBaseUrl("img/logo_junit.png")} style={{width: '44px', height: '18px', position: 'relative', top: '4px'}}></img> 
                        </a>
                    </td>
                    <td>
                        <a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank">JUnit user guide</a>
                        
                    </td>
                </tr>
                <tr>
                    <td>API Development and Testing</td>
                    <td>
                            <a href="https://www.postman.com/" target="_blank">Postman <img src={useBaseUrl("img/logo_postman.png")} style={{width: '22px', height: '22px', position: 'relative', top: '6px'}}></img></a>
                    </td>
                    <td>
                        <a href="https://learning.postman.com/docs/" target="_blank">Postman learning center</a>
                    </td>
                </tr>
                <tr>
                    <td>Data Interchange</td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://www.json.org/json-en.html" target="_blank">JSON <img src={useBaseUrl("img/logo_json.png")} style={{width: '34px', height: '30px', position: 'relative', top: '6px'}}></img></a>
                            </li>
                            <li>
                                <a href="https://www.xml.com" target="_blank">XML <img src={useBaseUrl("img/logo_xml.png")} style={{width: '26px', height: '29px', position: 'relative', top: '6px'}}></img></a>                                
                            </li>
                        </ul>                            
                    </td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank">JSON MDN web docs</a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction" target="_blank">XML MDN web docs</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=iiADhChRriM" target="_blank">JSON in 10 min video</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=KeLiQXqVgMI" target="_blank">XML video</a>
                            </li>
                        </ul>                            
                        
                    </td>
                </tr>
                <tr>
                    <td>Web Application Framework</td>
                    <td>
                        <a href="http://sparkjava.com/" target="_blank">SparkJava <img src={useBaseUrl("img/logo_spark.png")} style={{width: '40px', height: '22px', position: 'relative', top: '4px'}}></img></a>
                    </td>
                    <td>
                        <a href="http://sparkjava.com/documentation" target="_blank">SparkJava documentation</a>
                    </td>
                </tr>
                <tr>
                    <td>Template Engine</td>
                    <td>
                    <a href="https://velocity.apache.org/" target="_blank">Apache Velocity <img src={useBaseUrl("img/logo_velocity.png")} style={{width: '28px', height: '25px', position: 'relative', top: '4px'}}></img></a>
                    </td>
                    <td>
                        <a href="https://velocity.apache.org/engine/1.7/user-guide.html" target="_blank">Apache Velocity user guide</a>
                    </td>
                </tr>
                <tr>    
                    <td>Front-end Technologies</td>
                        <td>
                            <ul style={{listStyle: "none", paddingLeft: "0"}}>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML <img src={useBaseUrl("img/logo_html.png")} style={{width: '21px', height: '26px', position: 'relative', top: '5px'}}></img></a></li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS <img src={useBaseUrl("img/logo_css.png")} style={{width: '21px', height: '26px', position: 'relative', top: '4px'}}></img></a></li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript <img src={useBaseUrl("img/logo_js.png")} style={{width: '22px', height: '26px', position: 'relative', top: '5px'}}></img></a></li>
                            </ul>
                        </td>
                    <td>
                    <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML MDN web docs</a>
                            </li>
                                <a href="https://www.w3schools.com/html/" target="_blank">HTML w3schools tutorials</a>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS MDN web docs</a>
                            </li>
                            <li>
                                <a href="https://www.w3schools.com/css/" target="_blank">CSS w3schools tutorials</a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Javascript MDN web docs</a>
                            </li>
                            <li>
                                <a href="https://www.w3schools.com/js/" target="_blank">Javascript w3schools tutorials</a>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>Documentation Language</td>
                    <td><a href="https://www.markdownguide.org/" target="_blank">Markdown <img src={useBaseUrl("img/logo_markdown.png")} style={{width: '29px', height: '19px', position: 'relative', top: '5px'}}></img></a></td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://www.youtube.com/watch?v=HUBNt18RFbo" target="_blank">Markdown tutorial video</a>
                            </li>
                            <li>
                                <a href="https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github" target="_blank">Github markdown documentation</a>
                            </li>
                        </ul>    
                    </td>
                </tr>
                <tr>
                    <td>Deployment</td>
                    <td><a href="https://www.heroku.com/" target="_blank">Heroku <img src={useBaseUrl("img/logo_heroku.svg")} style={{width: '24px', height: '24px', position: 'relative', top: '5px'}}></img></a></td>
                    <td><a href="https://devcenter.heroku.com/categories/reference" target="_blank">Heroku documentation</a></td>
                </tr>
                <tr>
                    <td>Continuous Integration</td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://travis-ci.org/" target="_blank">Github Actions<img src={useBaseUrl("img/logo_github_actions.png")} style={{width: '26px', height: '26px', position: 'relative', top: '5px'}}></img></a>
                            </li>
                            <li>
                                <a href="https://travis-ci.org/" target="_blank">Travis CI<img src={useBaseUrl("img/logo_travis.png")} style={{width: '26px', height: '26px', position: 'relative', top: '5px'}}></img></a>
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                <a href="https://docs.github.com/en/actions" target="_blank">Github Actions documentation</a>
                            </li>
                            <li>
                                <a href="https://docs.travis-ci.com/" target="_blank">Travis CI documentation</a>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        </div> 
      </div>
    </Layout>
  );
}

export default Toolbox;