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
    <Layout title="Lectures">
      

      <div className= "container">
        <table className={styles.table}>
          <thead>
              <tr>
                  <th >Date</th>
                  <th >Slides</th>
                  <th >Video</th>
                  <th> <a href="docs" target=""_blank>Reading</a> Assignments</th>
              </tr>
          </thead>
          
          <tbody className={styles.tbody}>
              <tr>
                <td>Tue (8/31)</td>
                <td><a href="slides/lecture1.pdf" target="_blank">Lecture 1 Slides</a></td>
                <td><a href="https://wse.zoom.us/rec/play/jfNFEvOJQELlb8oCg6ncserdQBrUa_hsflVCMQFQo6F2DfazwZ3xBDP1Yf8pvNMc8szStYALRMf36Wt_.6zVbQ3AUQkUkRWLU?autoplay=true&startTime=1630430053000" target="_blank">Lecture 1 Video</a></td>
                <td>Introduction, Building Software</td>
              </tr>
              <tr>
                <td>Thu (9/2)</td>
                <td><a href="slides/lecture2.pdf" target="_blank">Lecture 2 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2b44b078-666e-4e42-b502-ad97013fb329" target="_blank">Lecture 2 Video</a></td>
                <td>Core Concepts & Technologies</td>
              </tr>
              <tr>
                <td>Tue (9/7)</td>
                <td><a href="slides/lecture3.pdf" target="_blank">Lecture 3 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=877cab76-7b23-464b-83a8-ad9c013ea7f9" target="_blank">Lecture 3 Video</a></td>
                <td>Software Design Basics</td>
              </tr>
              <tr>
                <td>Thu (9/9)</td>
                <td><a href="slides/lecture4.pdf" target="_blank">Lecture 4 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=148d1f34-cf27-42d0-9dd9-ad9e01402172" target="_blank">Lecture 4 Video</a></td>
                <td>Design Principles, Refactoring</td>
              </tr>
              <tr>
                <td>Tue (9/14)</td>
                <td><a href="slides/lecture5.pdf" target="_blank">Lecture 5 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d3f7698b-5379-40ef-82ae-ada3013ca650" target="_blank">Lecture 5 Video</a></td>
                <td>Design Patterns</td>
              </tr>
              <tr>
                <td>Tue (9/21)</td>
                <td><a href="slides/lecture6.pdf" target="_blank">Lecture 6 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1c65b06e-3d65-41b2-9169-adaa01404a34" target="_blank">Lecture 6 Video</a></td>
                <td>Persistence with Databases, RESTful API</td>
              </tr>
              <tr>
                <td>Tue (9/28)</td>
                <td><a href="slides/lecture7.pdf" target="_blank">Lecture 7 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c0d507b5-b528-4a33-be77-adb101406965" target="_blank">Lecture 7 Video</a></td>
                <td>Model-View-Controller, Cookies</td>
              </tr>
              <tr>
                <td>Tue (10/5)</td>
                <td><a href="slides/lecture8.pdf" target="_blank">Lecture 8 Slides</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9cd3380e-d099-40de-a5fc-adb8013de493" target="_blank">Lecture 8 Video</a></td>
                <td>Front-end Development</td>
              </tr>
              <tr>
                <td>Tue (10/12)</td>
                <td><a href="" target="_blank">N/A</a></td>
                <td><a href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c06fa084-9534-450e-844b-adbf01406708" target="_blank">Lecture 9 Video</a></td>
                <td>Deployment, CI/CD</td>
              </tr>

          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Home;
