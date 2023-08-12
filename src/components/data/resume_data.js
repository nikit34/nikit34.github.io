import python from '../../assets/icons/languages/python.svg'
import js from '../../assets/icons/languages/js.svg'
import cpp from '../../assets/icons/languages/cpp.svg'
import golang from '../../assets/icons/languages/golang.svg'
import arduino from '../../assets/icons/languages/arduino.svg'
import git from '../../assets/icons/gitlab.svg'
import docker from '../../assets/icons/docker.svg'
import postgresql from '../../assets/icons/postgresql.svg'
import linux from '../../assets/icons/linux.svg'
import qa from '../../assets/icons/qa.svg'
import wireshark from '../../assets/icons/wireshark.svg'


const experiens = [
    {
        head: 'SDET (Python, Golang), KASPERSKY',
        subhead: 'KasperskyOS, APROTECH',
        date: 'July 2021 - now',
        texts: [
            {
                text: 'IoT in Industry, creating an environment for testing physical devices - gateways.',
                bold: true,
                newline: true
            },
            {
                text: 'Conducted performance testing. Prepared test plans. Implemented servers, sniffers, data generators, deployers. Parallelized tests on several physical devices. Working with the operating system loader. Development of utilities for developers for Linux and Windows.',
                bold: false,
                newline: true
            },
            {
                text: 'Worked with protocols via socket: MQTT, DHCP, DNS, OPCUA, TCP. Worked with memory markup, set up communication through network equipment on the base MikroTik, COM port, PoE mode.',
                bold: true,
                newline: true
            },
            {
                text: 'Organized a device farm and a power management system. Wrote multithreaded and multiprocessor modules. Planned the backlog. Handled sprint planning, decomposition, and tight time tracking.',
                bold: false,
                newline: true
            },
            {
                text: 'Golang, Python, Bash, MySQL, KasperskyOS, RouterOS, Arduino, CMake, Wireshark, C++, Azure DevOps, TFS',
                bold: true,
                newline: true
            }
        ]
    },
    {
        head: 'Python developer, Rambler',
        subhead: 'Afisha',
        date: 'October 2020 - July 2021',
        texts: [
            {
                text: 'Created unit tests, integration and mAPI tests.',
                bold: true,
                newline: true
            },
            {
                text: 'Created a pipeline for building iOS and Android applications and running tests with generating reports on the server. Conducted performance testing.',
                bold: false,
                newline: true
            },
            {
                text: 'Conducted code reviews and improved past developments as needed.',
                bold: true,
                newline: true
            },
            {
                text: 'Conducted team meetings for the exchange of experience and in activities to improve the level of English.',
                bold: false,
                newline: true
            },
            {
                text: 'Python, Django, Docker, GitLab CI, Bash, Swift, Redis, PostgreSQL, MITMproxy, Wireshark, Jira',
                bold: true,
                newline: true
            }
        ]
    },
    {
        head: 'Junior Python developer, Sberbank',
        subhead: 'SberUser',
        date: 'March 2019 - March 2020',
        texts: [
            {
                text: 'Built automation, set up a test environment, conducted unit, performance, bulk and functional testing, exploratory, tested api.',
                bold: false,
                newline: true
            },
            {
                text: 'Created, prioritized and implemented plans for automated test coverage.',
                bold: true,
                newline: true
            },
            {
                text: 'Python, Django (pytest, unittest), JavaScript, Kubernetes, Docker, Grafana, Selenium, Behave, Appium, Emulators, Jenkins, BitBucket, Allure, Wireshark, Jira',
                bold: true,
                newline: true
            }
        ]
    }
]

const languages = [
    {
        icon: golang,
        name: 'Golang',
        level: '80'
    },{
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
        icon: arduino,
        name: 'Arduino',
        level: '60'
    }
]

const tools = [
    {
        icon: git,
        name: 'GitLab',
        level: '80'
    },{
        icon: docker,
        name: 'Docker',
        level: '100'
    },{
        icon: postgresql,
        name: 'PostgreSQL',
        level: '80'
    },{
        icon: linux,
        name: 'Linux Server',
        level: '100'
    },{
        icon: qa,
        name: 'QA (Pytest, Selenium, etc...)',
        level: '100'
    },{
        icon: wireshark,
        name: 'Wireshark, SQLmap, etc...',
        level: '80'
    }
]

export { experiens, languages, tools };
