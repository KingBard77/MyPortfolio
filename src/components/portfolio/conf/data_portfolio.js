import PORTFOLIO0 from '../../../assets/portfolio/portfolio-0.png'
import PORTFOLIO1 from '../../../assets/portfolio/portfolio-1.jpg'
import PORTFOLIO2 from '../../../assets/portfolio/portfolio-2.jpg'
import PORTFOLIO3 from '../../../assets/portfolio/portfolio-3.jpg'
import PORTFOLIO4 from '../../../assets/portfolio/portfolio-4.jpg'
import PORTFOLIO5 from '../../../assets/portfolio/portfolio-5.jpg'
import PORTFOLIO6 from '../../../assets/portfolio/portfolio-6.jpg'
import PORTFOLIO7 from '../../../assets/portfolio/portfolio-7.jpg'
import PORTFOLIO8 from '../../../assets/portfolio/portfolio-8.jpg'
import PORTFOLIO9 from '../../../assets/portfolio/portfolio-9.jpg'


const data_portfolio = [{
        id: 1,
        category: 'Web',
        image: PORTFOLIO1,
        title: '[Web-System] BurgerByte Inventory Management',
        description: 'Web-System for BurgerByte Retail Business that manages Inventory and Sales for every their daily business.',
        created: '3 Jun 2022',
        language: 'Bootstrap5, PHP, MySQL, JavaScript',
        role: 'Frontend, Backend',
        github: 'https://github.com/KingBard77/BurgerByte',
        youtube: 'https://youtu.be/9vmEpYy365M'
    },
    {
        id: 2,
        category: 'Web',
        image: PORTFOLIO2,
        title: '[Web-System] Railway Booking Management',
        description: 'Web-System for Railway Booking Management that allow user to book ticket for difference type of user, route with provided discount for selected user. ',
        created: '21 Apr 2021',
        language: 'Bootstrap4, C#, MySQL',
        role: 'Frontend, Backend',
        github: 'https://github.com/KingBard77/KTM_Komuter',
        youtube: 'https://youtu.be/EUr2ih0S8K4'
    },
    {
        id: 3,
        category: 'Python',
        image: PORTFOLIO3,
        title: '[AI-System] Face Recognizer Project',
        description: 'Graphical User Interface (GUI) that will use as a platform and an open webcam to detect faces and validation check is the user can enter a home not, then save the result into the database. ',
        created: '21 Apr 2021',
        language: 'Python',
        role: 'Frontend, Backend',
        github: 'Not Available',
        youtube: 'https://youtu.be/4SS0CmGLLi0'
    },
    {
        id: 4,
        category: 'Web',
        image: PORTFOLIO4,
        title: '[Web-System] My Portfolio',
        description: 'Web-System about myself that I can share my portfolio and my skills and experience.',
        created: '23 June 2022',
        language: 'React, JavaScript, HTML, CSS',
        role: 'Frontend',
        github: 'https://github.com/KingBard77/my-portfolio',
        youtube: 'Not Available'
    },
    {
        id: 5,
        category: 'Web',
        image: PORTFOLIO5,
        title: '[Web-System] Taxi Booking',
        description: 'Wb-System for Taxi Booking Management that allow user to book ticket for difference type of user, route with provided discount for selected user. ',
        created: '23 June 2022',
        language: 'React, JavaScript, HTML, CSS',
        role: 'Frontend',
        github: 'https://github.com/KingBard77/SCM-Taxi',
        youtube: 'Not Available'
    },
    {
        id: 6,
        category: 'App',
        image: PORTFOLIO6,
        title: '[App-System] BurgerByte Booking',
        description: 'Android Application for BurgerByte Retail Business for customers to purchase burgers and get total price with distance location.',
        created: '23 June 2022',
        language: 'Android Studio, Java, Firebase, Google Maps API',
        role: 'Backend',
        github: 'https://github.com/KingBard77/BurgerByte---App',
        youtube: 'Not Available'
    },
    {
        id: 7,
        category: 'Design',
        image: PORTFOLIO7,
        title: '[App-System] FreeCovid-19 Monitoring',
        description: 'Application Design for Free Covid-19 Monitoring that allows the user to check the current situation of Covid-19 in the world.',
        created: '23 June 2022',
        language: 'Figma',
        role: 'Frontend',
        github: 'Not Available',
        youtube: 'https://youtu.be/jUm61fMClsY'
    },
    {
        id: 8,
        category: 'Web',
        image: PORTFOLIO8,
        title: '[Web-System] Client & Counsellor Appointment Management',
        description: 'Web-System for Client & Counsellor Appointment Manament that allows the user to book an appointment with the counsellor.',
        created: '23 June 2022',
        language: 'Bootstrap5, PHP, MySQL, JavaScript',
        role: 'Frontend, Backend',
        github: 'Not Available',
        youtube: 'Not Available'
    },
    {
        id: 9,
        category: 'Web',
        image: PORTFOLIO9,
        title: '[Web-System] KitaFund NGO Haluan Kedah Management',
        description: 'Web-System for KitaFund NGO Haluan Kedah Management that allows the user to manage the donation and the event.',
        created: '23 June 2022',
        language: 'Bootstrap5, PHP, MySQL, JavaScript',
        role: 'Frontend, Backend',
        github: 'Not Available',
        youtube: 'Not Available'
    },
    {
        id: 10,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-afs.sh',
        description: 'Bash automation script for AFS service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-afs',
        youtube: 'Not Available'
    },
    {
        id: 11,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-cmk.sh',
        description: 'Bash automation script for CMK service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-cmk',
        youtube: 'Not Available'
    },
    {
        id: 12,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-dcp.sh',
        description: 'Bash automation script for DCP service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-dcp',
        youtube: 'Not Available'
    },
    {
        id: 13,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-dfy.sh',
        description: 'Bash automation script for DFY service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-dfy',
        youtube: 'Not Available'
    },
    {
        id: 14,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-dns.sh',
        description: 'Bash automation script for DNS service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-dns',
        youtube: 'Not Available'
    },
    {
        id: 15,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-gfm.sh',
        description: 'Bash automation script for GFM service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-gfm',
        youtube: 'Not Available'
    },
    {
        id: 16,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-gld.sh',
        description: 'Bash automation script for GLD service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-gld',
        youtube: 'Not Available'
    },
    {
        id: 17,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-igw.sh',
        description: 'Bash automation script for IGW service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-igw',
        youtube: 'Not Available'
    },
    {
        id: 18,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-ipm.sh',
        description: 'Bash automation script for IPM service. Includes setup.conf and related documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-ipm',
        youtube: 'Not Available'
    },
    {
        id: 19,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-k8s.sh',
        description: 'Bash automation script for Kubernetes (K8s) provisioning and setup. Includes conf and README.md.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-k8s',
        youtube: 'Not Available'
    },
    {
        id: 20,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-ldp.sh',
        description: 'Bash automation script for LDP service. Includes setup.conf and documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-ldp',
        youtube: 'Not Available'
    },
    {
        id: 21,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-log.sh',
        description: 'Bash automation script for LOG service. Includes setup.conf and documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-log',
        youtube: 'Not Available'
    },
    {
        id: 22,
        category: 'Infra',
        image: PORTFOLIO0,
        title: '[Script] service-ntp.sh',
        description: 'Bash automation script for NTP service. Includes setup.conf and documentation.',
        created: '13 Jul 2025',
        language: 'Shell',
        role: 'Infra, Cloud',
        github: 'https://github.com/KingBard77/service-ntp',
        youtube: 'Not Available'
    }
]
export default data_portfolio;