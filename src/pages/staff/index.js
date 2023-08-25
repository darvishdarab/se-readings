import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'
import styles from './styles.module.css'



function Home() {
    
  return (
    <Layout title="Course Staff">
        <div  style={{padding: "2% 0 0% 2%"}}>
            <h1 style={{padding: "0% 0 0% 0%"}}>Instructor</h1>
            <br />
            
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/darvish.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Dr. Ali Darvish, Senior Lecturer</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email: darvish /AT/ jhu DOT edu <br />
                            Web: <a href="http://cs.jhu.edu/~darvish/" target="_blank">http://cs.jhu.edu/~darvish/</a><br/>
                            Office Hours: Monday & Wednesday 3:00-4:00pm @ Zoom<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or by appointment<br />
                            Zoom Link: <a href="https://wse.zoom.us/my/darvish">https://wse.zoom.us/my/darvish</a><br/>
                            Office: Malone 205

                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            

                                 
            < br/>
            <h2>Head Teaching Assistant</h2>
            <br />
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/shreyas.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Shreyas Sriram</h4>
                        <small className="avatar__subtitle">
                            Head Teaching Assistant <br />
                        </small>
                        <small>
                            Office Hours: Monday 11:00 - 12:00 @ Zoom<br/>
                            Zoom Link: <a href="https://jhubluejays.zoom.us/my/shreyassriram">https://jhubluejays.zoom.us/my/shreyassriram</a>

                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            < br/>
            <br/>

            <h2>Teaching/Course Assistants</h2>
            <br />
            
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/lidia.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Lidia Berhe</h4>
                        <small className="avatar__subtitle">
                        </small>
                        <small>
                            Office Hours: Wednesday 10:30am - 11:30am @ Zoom<br/>
                            Zoom Link: <a href="https://jhubluejays.zoom.us/j/94847713253">https://jhubluejays.zoom.us/j/94847713253</a>

                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            

            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card">
                    <div className="card__header">
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/nikhil.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Nikhil Sharma</h4>
                        <small className="avatar__subtitle">
                            Office Hours: Thursday 11:00am - 12:00pm @ Zoom<br/>
                            Zoom Link: <a href="https://jhubluejays.zoom.us/j/2582950913">https://jhubluejays.zoom.us/j/2582950913</a>
                        </small>
                        </div>
                    </div>
                </div>
                </div>


            </div>     
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card">
                    <div className="card__header">
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/qifan.png')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Qifan Yu</h4>
                        <small className="avatar__subtitle">
                        
                            Office Hours: Tuesday 14:00 - 15:00 @ Zoom<br/>
                            Zoom Link: <a href="https://jhubluejays.zoom.us/j/92901266557">https://jhubluejays.zoom.us/j/92901266557</a>
                        
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>                   
            
            < br/>
            
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card">
                    <div className="card__header">
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/shanelle.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Shanelle Cao</h4>
                        <small className="avatar__subtitle">
                        Office Hours: Thursday 15:00 - 16:00 @ Zoom<br/>
                        Zoom Link: <a href="https://jhubluejays.zoom.us/j/3819776880">https://jhubluejays.zoom.us/j/3819776880</a>
                    </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            
            
{/*
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 3.5%"}}>
                <div className="card">
                    <div className="card__header">
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('staff-pics/zach.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Zach Zhou</h4>
                        <small className="avatar__subtitle">
                            Course Assistant <br />
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card">
                    <div className="card__header">
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('staff-pics/shreya.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Shreya Kulkarni</h4>
                        <small className="avatar__subtitle">
                            Course Assistant <br />
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
*/}             

        </div>
        


    </Layout>
  );
}

export default Home;
