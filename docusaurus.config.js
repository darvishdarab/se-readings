const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EN.601.421: Object-Oriented Software Engineering (OOSE)',
  tagline: 'OOSE',
  url: 'https://jhu-oose-f23.github.io',
  baseUrl: '/cs421/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_oose.svg',
  organizationName: 'jhu-oose-f23', // Usually your GitHub org/user name.
  projectName: 'cs421', // Usually your repo name.
  
  
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['java'],
    },
    announcementBar: {
      id: 'announcement', // Any value that will identify this message.
      content:
        // '<a target="_blank" href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b9fa4890-edbc-48ab-b892-ac3901364a70">Lecture 5</a> posted! Also, <a href="/cs421_f20/docs/hw/hw2">Homework 2</a> is out! (due 9/24 11pm)',
        'Welcome to CS421/621 OOSE!',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      hideOnScroll: true,
      title: 'Home',
      items: [
        {
          to: 'syllabus',
          // activeBasePath: 'pages',
          label: 'Schedule & Policies',
          position: 'left',
        },
        {
          to: 'logistics',
          // activeBasePath: 'pages',
          label: 'Logistics',
          position: 'left',
        },
        {
          to: 'staff',
          // activeBasePath: 'pages',
          label: 'Course Staff',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: '/',
          label: 'Readings',
          position: 'left',
        },
        {
          label: 'Homeworks',
          position: 'left',
          items: [/*
            {
              to: 'docs/hw/hw1',
              label: 'Homework 1'
            },
            {
              to: 'docs/hw/hw2',
              label: 'Homework 2'
            },
            {
              to: 'docs/hw/hw3',
              label: 'Homework 3'
            },
            {
              to: 'docs/hw/hw4',
              label: 'Homework 4'
            },
            {
              to: 'docs/hw/hw5',
              label: 'Homework 5'
            },
            {
              to: 'docs/hw/hw6',
              label: 'Homework 6'
            }*/
            
          ],
        },
        {
          label: 'Project',
          position: 'left',
          items: [
            /*{
              label: 'Project Outline', 
              to: 'docs/proj/outline'
            },
            {
              label: 'Team Formation', 
              to: 'docs/proj/formation'
            },
            {
              label: 'Project Ideation', 
              to: 'docs/proj/ideation'
            },
            {
              label: 'Project Repository', 
              to: 'docs/proj/teamrepo'
            },
            {
                label: 'Project SRS Template', 
                to: 'https://docs.google.com/document/d/1xsof7GoMBMUrotWfhQoi5YFlcOT0bSS93RN3pCJ-Ukw/edit?usp=sharing'
            },
            {
                label: 'Suggested Ideas', 
                to: 'docs/proj/ideas'
            },
            {
              label: 'Iteration 0', 
              to: 'docs/proj/it0'
            },
            {
              label: 'Iteration 1', 
              to: 'docs/proj/it1'
            },
            {
              label: 'Iteration 2', 
              to: 'docs/proj/it2'
            }/*,
            {
              label: 'Iteration 3', 
              to: 'docs/proj/it3'
            },
            {
              label: 'Iteration 4', 
              to: 'docs/proj/it4'
            },
            {
              label: 'Iteration 5', 
              to: 'docs/proj/it5'
            },
            {
              label: 'Presentation', 
              to: 'docs/proj/presentation'
            }*/
          ],
        },
        {
          label: 'Quiz',
          position: 'left',
          items: [
            /*{
              label: 'Practice Questions', 
              to: 'docs/quiz/questions'
            },
            {
              label: 'Practice Questions Answers', 
              to: 'docs/quiz/answers'
            }*/
          ],
        }
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} CS421 at JHU. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://jhu-oose-f23.github.io/cs421/',
        },
      
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
