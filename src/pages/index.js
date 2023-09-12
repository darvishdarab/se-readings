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
      to="https://github.com/orgs/jhu-oose-f23/dashboard">
      Github
    </Link>
    </div>
  )
}

function Home() {
  return (
    <Layout title="Software Engineering">
      
      <div className={styles.main}>
        <h1>SE Readings</h1>
      </div>
    </Layout>
  );
}

export default Home;
