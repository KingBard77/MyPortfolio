import SHOWCASE_10 from '../../../assets/portfolio/showcase-afs.webp';
import SHOWCASE_6 from '../../../assets/portfolio/showcase-burgerbyteapp.webp';
import SHOWCASE_1 from '../../../assets/portfolio/showcase-burgerbyteinventory.webp';
import SHOWCASE_11 from '../../../assets/portfolio/showcase-checkmk.webp';
import SHOWCASE_8 from '../../../assets/portfolio/showcase-counsellor.webp';
import SHOWCASE_12 from '../../../assets/portfolio/showcase-dcp.webp';
import SHOWCASE_14 from '../../../assets/portfolio/showcase-dns.webp';
import SHOWCASE_3 from '../../../assets/portfolio/showcase-facerecognizer.webp';
import SHOWCASE_7 from '../../../assets/portfolio/showcase-freecovid.webp';
import GRAFANA_SHOWCASE from '../../../assets/portfolio/showcase-grafana.webp';
import SHOWCASE_17 from '../../../assets/portfolio/showcase-igw.webp';
import SHOWCASE_9 from '../../../assets/portfolio/showcase-kitafund.webp';
import SHOWCASE_19 from '../../../assets/portfolio/showcase-kubernetes.webp';
import SHOWCASE_20 from '../../../assets/portfolio/showcase-ldp.webp';
import SHOWCASE_21 from '../../../assets/portfolio/showcase-log.webp';
import PORTFOLIO0 from '../../../assets/portfolio/showcase-placeholder.png';
import PORTFOLIO4 from '../../../assets/portfolio/showcase-portfolio.jpg';
import SHOWCASE_2 from '../../../assets/portfolio/showcase-railway.webp';
import SHOWCASE_5 from '../../../assets/portfolio/showcase-taxi.webp';

const portfolioProjects = [
  {
    id: 1,
    objective: 'Centralise inventory and daily sales management for a burger retail business.',
    scope:
      'Develop the frontend, backend, and database using Bootstrap, PHP, JavaScript, and MySQL. Cover inventory records and sales transactions.',
    outcome:
      'A web application that brings inventory and sales records into one management interface.',
    category: 'Web',
    image: SHOWCASE_1,
    title: '[Web-System] BurgerByte Inventory Management',
    description:
      'Web-System for BurgerByte Retail Business that manages Inventory and Sales for every their daily business.',
    created: '3 Jun 2022',
    language: 'Bootstrap5, PHP, MySQL, JavaScript',
    role: 'Frontend, Backend',
    github: 'Not Available',
    youtube: 'https://youtu.be/9vmEpYy365M',
  },
  {
    id: 2,
    objective: 'Simplify railway ticket booking across different routes and passenger categories.',
    scope:
      'Build booking interfaces, passenger-category handling, route selection, discount calculations, and database integration using C# and MySQL.',
    outcome:
      'A booking application that calculates ticket prices and applies discounts for eligible passengers.',
    category: 'Web',
    image: SHOWCASE_2,
    title: '[Web-System] Railway Booking Management',
    description:
      'Web-System for Railway Booking Management that allow user to book ticket for difference type of user, route with provided discount for selected user. ',
    created: '21 Apr 2021',
    language: 'Bootstrap4, C#, MySQL',
    role: 'Frontend, Backend',
    github: 'Not Available',
    youtube: 'https://youtu.be/EUr2ih0S8K4',
  },
  {
    id: 3,
    objective: 'Explore facial recognition as a method of checking access eligibility.',
    scope:
      'Build a Python GUI with webcam capture, face detection and recognition, access validation, and database logging.',
    outcome:
      'A prototype that checks recognised faces against access rules and records the results.',
    category: 'Python',
    image: SHOWCASE_3,
    title: '[AI-System] Face Recognizer Project',
    description:
      'Graphical User Interface (GUI) that will use as a platform and an open webcam to detect faces and validation check is the user can enter a home not, then save the result into the database. ',
    created: '21 Apr 2021',
    language: 'Python',
    role: 'Frontend, Backend',
    github: 'Not Available',
    youtube: 'https://youtu.be/4SS0CmGLLi0',
  },
  {
    id: 4,
    objective:
      'Present my technical skills, experience, and projects through a professional online profile.',
    scope:
      'Build a responsive React website with project filtering, galleries, career information, navigation, and contact options.',
    outcome:
      'A central platform where visitors can explore my work and contact me about opportunities.',
    category: 'Web',
    image: PORTFOLIO4,
    title: '[Web-System] My Portfolio',
    description:
      'Web-System about myself that I can share my portfolio and my skills and experience.',
    created: '23 June 2022',
    language: 'React, JavaScript, HTML, CSS',
    role: 'Frontend',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 5,
    objective: 'Design a clear web interface for selecting routes and booking taxi journeys.',
    scope:
      'Develop the React frontend, including booking forms, route information, passenger options, and pricing or discount presentation.',
    outcome: 'A frontend prototype demonstrating the taxi-booking journey.',
    category: 'Web',
    image: SHOWCASE_5,
    title: '[Web-System] Taxi Booking',
    description:
      'Wb-System for Taxi Booking Management that allow user to book ticket for difference type of user, route with provided discount for selected user. ',
    created: '23 June 2022',
    language: 'React, JavaScript, HTML, CSS',
    role: 'Frontend',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 6,
    objective:
      'Allow customers to order burgers through an Android application with location-based price calculations.',
    scope:
      'Develop backend functionality using Java and Firebase, with Google Maps integration for location and distance calculations.',
    outcome:
      'An Android ordering application that combines customer orders with location-based total-price calculations.',
    category: 'App',
    image: SHOWCASE_6,
    title: '[App-System] BurgerByte Booking',
    description:
      'Android Application for BurgerByte Retail Business for customers to purchase burgers and get total price with distance location.',
    created: '23 June 2022',
    language: 'Android Studio, Java, Firebase, Google Maps API',
    role: 'Backend',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 7,
    objective: 'Make COVID-19 information easier to explore through a mobile application concept.',
    scope: 'Design screens, navigation, information layouts, and user flows in Figma.',
    outcome: 'A mobile UI prototype demonstrating how users could explore COVID-19 information.',
    category: 'Design',
    image: SHOWCASE_7,
    title: '[App-System] FreeCovid-19 Monitoring',
    description:
      'Application Design for Free Covid-19 Monitoring that allows the user to check the current situation of Covid-19 in the world.',
    created: '23 June 2022',
    language: 'Figma',
    role: 'Frontend',
    github: 'Not Available',
    youtube: 'https://youtu.be/jUm61fMClsY',
  },
  {
    id: 8,
    objective: 'Simplify appointment booking between clients and counsellors.',
    scope:
      'Develop booking interfaces, appointment records, backend processing, and MySQL integration using PHP, Bootstrap, and JavaScript.',
    outcome: 'A web application for submitting and managing counselling appointments.',
    category: 'Web',
    image: SHOWCASE_8,
    title: '[Web-System] Client & Counsellor Appointment Management',
    description:
      'Web-System for Client & Counsellor Appointment Manament that allows the user to book an appointment with the counsellor.',
    created: '23 June 2022',
    language: 'Bootstrap5, PHP, MySQL, JavaScript',
    role: 'Frontend, Backend',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 9,
    objective: 'Organise donation and event information for NGO activities.',
    scope:
      'Build frontend and backend workflows for donation records and event management using PHP, Bootstrap, JavaScript, and MySQL.',
    outcome: 'A central web application for managing NGO donation and event records.',
    category: 'Web',
    image: SHOWCASE_9,
    title: '[Web-System] KitaFund NGO Haluan Kedah Management',
    description:
      'Web-System for KitaFund NGO Haluan Kedah Management that allows the user to manage the donation and the event.',
    created: '23 June 2022',
    language: 'Bootstrap5, PHP, MySQL, JavaScript',
    role: 'Frontend, Backend',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 10,
    objective: 'Standardise the setup of shared storage for Linux hosts.',
    scope:
      'Automate NFS server installation, export configuration, service checks, and removal through a configurable Bash script.',
    outcome:
      'A reusable installer that replaces a sequence of manual NFS setup steps with a documented workflow.',
    category: 'Infra',
    image: SHOWCASE_10,
    previewType: 'image',
    title: '[Script] service-afs.sh',
    description:
      'Bash automation script for AFS service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 11,
    objective: 'Make monitoring-server setup consistent and repeatable.',
    scope:
      'Automate Checkmk installation, initial configuration, service checks, and removal through Bash.',
    outcome: 'A reusable workflow for preparing and checking a Checkmk monitoring server.',
    category: 'Infra',
    image: SHOWCASE_11,
    previewType: 'image',
    title: '[Script] service-cmk.sh',
    description:
      'Bash automation script for CMK service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 12,
    objective: 'Standardise the deployment of automatic IP-address allocation services.',
    scope: 'Automate ISC DHCP installation, configuration, service checks, and removal.',
    outcome:
      'A configurable DHCP-server setup workflow that reduces repeated manual configuration.',
    category: 'Infra',
    image: SHOWCASE_12,
    previewType: 'image',
    title: '[Script] service-dcp.sh',
    description:
      'Bash automation script for DCP service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 13,
    objective:
      'Connect newly provisioned Linux machines to shared infrastructure services consistently.',
    scope:
      'Configure or remove client integrations for the internet gateway, NTP, NFS, LDAP, DNS, and IPAM. Support individual services and grouped operations.',
    outcome: 'A common configuration entry point for preparing hosts to consume shared services.',
    category: 'Infra',
    image: PORTFOLIO0,
    title: '[Script] service-dfy.sh',
    description:
      'Bash automation script for DFY service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 14,
    objective: 'Make DNS-server setup repeatable and easier to maintain.',
    scope: 'Automate BIND9 installation, configuration, service checks, and removal through Bash.',
    outcome: 'A documented workflow for configuring and checking a DNS server.',
    category: 'Infra',
    image: SHOWCASE_14,
    previewType: 'image',
    title: '[Script] service-dns.sh',
    description:
      'Bash automation script for DNS service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 15,
    objective: 'Establish a consistent foundation for metrics collection and visualisation.',
    scope:
      'Automate Grafana and Prometheus installation, configuration, service management, and checks.',
    outcome:
      'A reusable provisioning workflow for a Grafana and Prometheus monitoring environment.',
    category: 'Infra',
    image: GRAFANA_SHOWCASE,
    previewType: 'image',
    title: '[Script] service-gfm.sh',
    description:
      'Bash automation script for Grafana provisioning and monitoring. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 16,
    objective:
      'Standardise the tools and service integrations included in reusable Linux baselines.',
    scope:
      'Automate baseline packages, shell setup, and selected client integrations, including monitoring, logging, shared storage, directory services, and IPAM registration.',
    outcome: 'A reusable host-preparation script that supports more consistent VM baselines.',
    category: 'Infra',
    image: PORTFOLIO0,
    title: '[Script] service-gld.sh',
    description:
      'Bash automation script for GLD service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 17,
    objective: 'Standardise the setup of a shared proxy for controlled outbound internet access.',
    scope: 'Automate Squid installation, proxy configuration, service checks, and removal.',
    outcome: 'A repeatable deployment workflow for a Squid-based proxy service.',
    category: 'Infra',
    image: SHOWCASE_17,
    previewType: 'image',
    title: '[Script] service-igw.sh',
    description:
      'Bash automation script for IGW service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 18,
    objective:
      'Establish a central platform for documenting infrastructure and managing IP-address information.',
    scope:
      'Automate NetBox installation, supporting dependencies, configuration, and service checks.',
    outcome: 'A reusable deployment workflow for a NetBox infrastructure-management instance.',
    category: 'Infra',
    image: PORTFOLIO0,
    title: '[Script] service-ipm.sh',
    description:
      'Bash automation script for IPM service. Includes setup.conf and related documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 19,
    objective: 'Standardise the preparation of Kubernetes control-plane and worker nodes.',
    scope:
      'Configure host prerequisites, swap, kernel networking, container runtime, and Kubernetes packages. Initialise the control plane with Calico or join worker nodes using a supplied command.',
    outcome: 'A role-based bootstrap script for preparing nodes and forming a Kubernetes cluster.',
    category: 'Infra',
    image: SHOWCASE_19,
    previewType: 'image',
    title: '[Script] service-k8s.sh',
    description:
      'Bash automation script for Kubernetes (K8s) provisioning and setup. Includes conf and README.md.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 20,
    objective:
      'Standardise the deployment of central directory services and their administration interface.',
    scope:
      'Automate OpenLDAP and LDAP Account Manager installation, directory configuration, and service checks.',
    outcome:
      'A repeatable setup workflow for an LDAP directory with a web-based administration interface.',
    category: 'Infra',
    image: SHOWCASE_20,
    previewType: 'image',
    title: '[Script] service-ldp.sh',
    description: 'Bash automation script for LDP service. Includes setup.conf and documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 21,
    objective:
      'Provide a consistent foundation for central log storage, search, and visualisation.',
    scope:
      'Automate Elasticsearch and Kibana installation, configuration, service management, and checks.',
    outcome:
      'A reusable deployment workflow for the central logging platform, with client log collection handled as a separate integration step.',
    category: 'Infra',
    image: SHOWCASE_21,
    previewType: 'image',
    title: '[Script] service-log.sh',
    description: 'Bash automation script for LOG service. Includes setup.conf and documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
  {
    id: 22,
    objective: 'Maintain consistent time synchronisation across infrastructure hosts.',
    scope: 'Automate Chrony installation, time-service configuration, service checks, and removal.',
    outcome: 'A repeatable workflow for preparing a shared NTP time service.',
    category: 'Infra',
    image: PORTFOLIO0,
    title: '[Script] service-ntp.sh',
    description: 'Bash automation script for NTP service. Includes setup.conf and documentation.',
    created: '13 Jul 2025',
    language: 'Shell',
    role: 'Infra, Cloud',
    github: 'Not Available',
    youtube: 'Not Available',
  },
];
export default portfolioProjects;
