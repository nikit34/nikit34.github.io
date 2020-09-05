import python from '../../assets/icons/python.svg'
import js from '../../assets/icons/js.svg'
import cpp from '../../assets/icons/cpp.svg'
import django from '../../assets/icons/django.svg'
import react from '../../assets/icons/react.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import opencv from '../../assets/icons/opencv.svg'
import sql from '../../assets/icons/sql.svg'
import flask from '../../assets/icons/flask.svg'
import git from '../../assets/icons/git.svg'
import bitbucket from '../../assets/icons/bitbucket.svg'
import docker from '../../assets/icons/docker.svg'
import postgresql from '../../assets/icons/postgresql.svg'
import sqlite from '../../assets/icons/sqlite.svg'
import linux from '../../assets/icons/linux.svg'
import windows from '../../assets/icons/windows.svg'
import macos from '../../assets/icons/macos.svg'
import qa from '../../assets/icons/qa.svg'
import wireshark from '../../assets/icons/wireshark.svg'


const experiens = [
    {
        head: 'Internship in Mail.Ru Group - QA engineer',
        subhead: 'Odnoklassniki, OK.ru',
        date: 'September 2018 - February 2019',
        text1: 'Conducted',
        text2: 'functional testing, interaction testing, security and user interface design.',
        text3: 'He made bug reports, made up checklists and test cases (he was involved in test design). I tested such products as Odnoklassniki, my circle, instagram. Used site parsing, traffic sniffing, reducing the dimension of test data. Used fat live charles. Used tools like',
        text4: 'Jira, Confluence, Git, Charles, Wireshark, JavaScript.'
    },{
        head: 'Data - Engineer (Intern in Sberbank)',
        subhead: 'TeraData, departament Big Data',
        date: 'March 2019 - May 2019',
        text1: 'Performed tasks on writing',
        text2: 'complex SQL queries, (up to two selects). He was engaged in automation and unit testing for Python.',
        text3: 'worked in internal systems of the bank. Used tools like',
        text4: 'Jira, DBeaver, Python, Selenium, Various visualization tools.'
    },{
        head: 'Web & ML & NN - projects, hackathons, challenges, championships',
        subhead: 'Freelance ~ Full-Stack',
        date: 'May 2019 - now',
        text1: ' ',
        text2: 'I independently developed a software product in a short time (there were also long-term projects and teamwork, but in smaller quantities).',
        text3: 'I proceeded in most cases from the task, raised the question not “as I can,” but “as needed”. Some projects are not subject to disclosure. The projects are aimed at applying machine learning, introducing new systems into the market, and integrating into existing solutions. More information about some projects is written in the articles on Linkedin by the link. Used tools like',
        text4: 'C++, OpenCV, Win32api, Python, AsyncIO, BeautifulSoup, Matplotlib, Plotly, Keras, TensorFlow, Django, Flask, JavaScript, Node.js, Vue.js, Bootstrap and so on...'
    },{
        head: 'QA - Engineer (Python)',
        subhead: 'AT Consulting (project of Sberbank: SberCloud)',
        date: 'November 2019 - January 2020',
        text1: 'I carry out ',
        text2: 'unit tests, functional, implement automation.',
        text3: 'I am on a trial period, and the project is close to completion :(. But the team and the project are cool :) Used tools like',
        text4: 'Python, Selenium, Jira, Jira v2, Confluence, Jenkins, Git, Emulators, Security and Web Services.'
    },{
        head: 'Python Software Engineer',
        subhead: 'Sberbank - Custom Solutions Department',
        date: 'January 2020 - March 2020',
        text1: 'I do code',
        text2: 'web development and network engineering, refactoring, automation of testing processes and rolling out releases, version control.',
        text3: 'Used tools like',
        text4: 'Python, JavaScript, Selenium, Behave, BitBucket, Security and Parsing.'
    }
]

export const languages = [
    {
        icon: python,
        name: 'Python',
        level: '100'
    },{
        icon: js,
        name: 'JavaScript',
        level: '80'
    },{
        icon: cpp,
        name: 'C++',
        level: '80'
    },{
        icon: django,
        name: 'Django',
        level: '100'
    },{
        icon: react,
        name: 'React',
        level: '80'
    },{
        icon: nodejs,
        name: 'Node',
        level: '60'
    },{
        icon: opencv,
        name: 'OpenCV',
        level: '40'
    },{
        icon: sql,
        name: 'SQL',
        level: '70'
    },{
        icon: flask,
        name: 'Flask',
        level: '50'
    }
]

export const tools = [
    {
        icon: git,
        name: 'Git',
        level: '80'
    },{
        icon: bitbucket,
        name: 'Bitbucket',
        level: '60'
    },{
        icon: docker,
        name: 'Docker',
        level: '40'
    },{
        icon: sqlite,
        name: 'SQLite3',
        level: '100'
    },{
        icon: postgresql,
        name: 'PostgreSQL',
        level: '80'
    },{
        icon: linux,
        name: 'Linux Server',
        level: '80'
    },{
        icon: windows,
        name: 'Windows Server',
        level: '60'
    },{
        icon: macos,
        name: 'MacOS',
        level: '40'
    },{
        icon: qa,
        name: 'QA (pytest, selenium)',
        level: '100'
    },{
        icon: wireshark,
        name: 'Wireshark, etc...',
        level: '80'
    }
]

export default experiens;