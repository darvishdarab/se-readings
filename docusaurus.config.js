const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SE Readings',
  tagline: 'SE',
  url: 'https://darvishdarab.github.io',
  baseUrl: '/se-readings/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_oose.svg',
  organizationName: 'jhu-oose-f23', // Usually your GitHub org/user name.
  projectName: 'se-readings', // Usually your repo name.
  
  
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['java'],
    },
    announcementBar: {
      id: 'announcement', // Any value that will identify this message.
      content:
        // '<a target="_blank" href="https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b9fa4890-edbc-48ab-b892-ac3901364a70">Lecture 5</a> posted! Also, <a href="/cs421_f20/docs/hw/hw2">Homework 2</a> is out! (due 9/24 11pm)',
        'SE Readings',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      hideOnScroll: true,
      title: 'Home',
      items: [
        {
          to: 'docs/',
          activeBasePath: '/',
          label: 'Readings',
          position: 'left',
        }, 
        {
          label: 'Project',
          position: 'left',
          items: [
            {
              label: 'Project Outline', 
              to: 'docs/proj/outline'
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
            },
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
            }
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
