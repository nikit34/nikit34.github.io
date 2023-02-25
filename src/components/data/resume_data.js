import python from '../../assets/icons/python.svg'
import js from '../../assets/icons/js.svg'
import cpp from '../../assets/icons/cpp.svg'
import golang from '../../assets/icons/golang.svg'
import arduino from '../../assets/icons/arduino.svg'
import git from '../../assets/icons/gitlab.svg'
import docker from '../../assets/icons/docker.svg'
import postgresql from '../../assets/icons/postgresql.svg'
import linux from '../../assets/icons/linux.svg'
import qa from '../../assets/icons/qa.svg'
import wireshark from '../../assets/icons/wireshark.svg'


const experiens = [
    {
        head: 'Middle QA Automation, Skyeng',
        subhead: 'Student Cabinet',
        date: 'October 2022 - March 2023',
        texts: [
            {
                text: 'Automating web and mobile applications.',
                bold: true,
                newline: false
            },
            {
                text: 'Supported pipelines in Jenkins and Gitlab CI/CD. Independently added ID for applications on Android and iOS.',
                bold: false,
                newline: false
            },
            {
                text: 'InfluxDB · TypeScript · Grafana · Jenkins · JavaScript · Docker',
                bold: true,
                newline: true
            }
        ]
    },
    {
        head: 'SDET, KASPERSKY',
        subhead: 'KasperskyOS, APROTECH',
        date: 'July 2021 - October 2022',
        texts: [
            {
                text: 'IoT in Industry, creating an environment for testing physical devices - gateways.',
                bold: true,
                newline: false
            },
            {
                text: 'Conducted performance testing. Prepared test plans. Implemented servers, sniffers, data generators, deployers. Parallelized tests on several physical devices. Working with the operating system loader. Development of utilities for developers for Linux and Windows.',
                bold: false,
                newline: false
            },
            {
                text: 'Worked with protocols via socket: MQTT, DHCP, DNS, OPCUA, TCP. Worked with memory markup, set up communication through network equipment on the base MikroTik, COM port, PoE mode.',
                bold: true,
                newline: false
            },
            {
                text: 'Organized a device farm and a power management system. Wrote multithreaded and multiprocessor modules. Planned the backlog. Handled sprint planning, decomposition, and tight time tracking.',
                bold: false,
                newline: false
            },
            {
                text: 'Arduino · MySQL · Mikrotik · FTP · Bash · pytest · CMake · Mqtt · OPC UA · Azure DevOps Server · DHCP · Fuzzing · Python · C++ · Docker',
                bold: true,
                newline: true
            }
        ]
    },
    {
        head: 'Middle QA Automation, Rambler',
        subhead: 'Afisha',
        date: 'October 2020 - July 2021',
        texts: [
            {
                text: 'Created unit tests, integration and mAPI tests.',
                bold: true,
                newline: false
            },
            {
                text: 'Created a pipeline for building iOS and Android applications and running tests with generating reports on the server. Conducted performance testing.',
                bold: false,
                newline: false
            },
            {
                text: 'Conducted code reviews and improved past developments as needed.',
                bold: true,
                newline: false
            },
            {
                text: 'Conducted team meetings for the exchange of experience and in activities to improve the level of English.',
                bold: false,
                newline: false
            },
            {
                text: 'GitLab CI · Redis · PostgreSQL · MITMproxy · Grafana · Allure · Python',
                bold: true,
                newline: true
            }
        ]
    },
    {
        head: 'Junior QA Automation, Sberbank',
        subhead: 'SberUser',
        date: 'March 2019 - March 2020',
        texts: [
            {
                text: 'Built automation, set up a test environment, conducted unit, performance, bulk and functional testing, exploratory, tested api.',
                bold: false,
                newline: false
            },
            {
                text: 'Created, prioritized and implemented plans for automated test coverage.',
                bold: true,
                newline: false
            },
            {
                text: 'Python · Kubernetes · Docker · Grafana · Selenium · Behave · Appium · Jenkins · Allure · Wireshark · Jira',
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