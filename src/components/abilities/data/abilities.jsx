import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiShieldQuarter } from 'react-icons/bi';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';
import { FaServer, FaJava } from 'react-icons/fa';
import { MdAutoAwesome } from 'react-icons/md';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import {
  SiSketchup,
  SiDocker,
  SiComposer,
  SiAmazonaws,
  SiMysql,
  SiPostgresql,
  SiCsharp,
  SiPython,
  SiTypescript,
  SiMicrosoft,
  SiOpenai,
  SiUbuntu,
  SiLinux,
} from 'react-icons/si';
import {
  TbArrowsExchange,
  TbTopologyStar3,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandPhp,
  TbBrandGolang,
  TbBrandFigma,
  TbBrandPowershell,
} from 'react-icons/tb';

const abilityGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'User Interface Development',
    skills: [
      { name: 'HTML', level: 'Expert', percentage: 100, icon: <AiOutlineHtml5 /> },
      { name: 'CSS', level: 'Expert', percentage: 100, icon: <TbBrandCss3 /> },
      { name: 'JavaScript', level: 'Intermediate', percentage: 75, icon: <TbBrandJavascript /> },
      { name: 'React', level: 'Intermediate', percentage: 50, icon: <TbBrandReact /> },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Language Programming',
    skills: [
      { name: 'PHP', level: 'Expert', percentage: 100, icon: <TbBrandPhp /> },
      { name: 'Shell', level: 'Intermediate', percentage: 50, icon: <TbBrandPowershell /> },
      { name: 'GoLang', level: 'Intermediate', percentage: 50, icon: <TbBrandGolang /> },
      { name: 'TypeScript', level: 'Intermediate', percentage: 50, icon: <SiTypescript /> },
      { name: 'Java', level: 'Basic', percentage: 40, icon: <FaJava /> },
      { name: 'Python', level: 'Basic', percentage: 40, icon: <SiPython /> },
      { name: 'C# / ASP.NET', level: 'Basic', percentage: 40, icon: <SiCsharp /> },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: 'Systems & Application',
    skills: [
      { name: 'Ubuntu', level: 'Expert', percentage: 100, icon: <SiUbuntu /> },
      { name: 'CentOS Stream', level: 'Expert', percentage: 100, icon: <SiLinux /> },
      { name: 'Docker', level: 'Intermediate', percentage: 75, icon: <SiDocker /> },
      { name: 'Composer', level: 'Intermediate', percentage: 75, icon: <SiComposer /> },
      { name: 'Proxmox', level: 'Intermediate', percentage: 75, icon: <FaServer /> },
      { name: 'Hardening', level: 'Basic', percentage: 40, icon: <BiShieldQuarter /> },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    subtitle: 'Cloud Services & Platforms',
    skills: [
      { name: 'AWS (EC2, S3)', level: 'Intermediate', percentage: 75, icon: <SiAmazonaws /> },
      { name: 'TMCloud', level: 'Intermediate', percentage: 75, icon: <FaServer /> },
    ],
  },
  {
    id: 'network',
    title: 'Network',
    subtitle: 'Networking & Security',
    skills: [
      { name: 'pfSense', level: 'Basic', percentage: 40, icon: <BiShieldQuarter /> },
      {
        name: 'Application Load Balancer',
        level: 'Basic',
        percentage: 40,
        icon: <TbArrowsExchange />,
      },
      {
        name: 'Web Application Firewall',
        level: 'Basic',
        percentage: 40,
        icon: <RiShieldKeyholeFill />,
      },
      { name: 'Network Load Balancer', level: 'Basic', percentage: 40, icon: <TbTopologyStar3 /> },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Relational Database Systems',
    skills: [
      { name: 'MySQL', level: 'Intermediate', percentage: 75, icon: <SiMysql /> },
      { name: 'PostgreSQL', level: 'Intermediate', percentage: 75, icon: <SiPostgresql /> },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Artificial Intelligence Tools',
    skills: [
      { name: 'OpenAI', level: 'AI tool', percentage: null, icon: <SiOpenai /> },
      {
        name: 'Anthropic',
        level: 'AI tool',
        percentage: null,
        icon: <span className="skills__brand-letter">A</span>,
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Additional Tools',
    skills: [
      { name: 'Microsoft Software', level: 'Expert', percentage: 100, icon: <SiMicrosoft /> },
      { name: 'Photoshop', level: 'Intermediate', percentage: 50, icon: <DiPhotoshop /> },
      { name: 'Illustrator', level: 'Intermediate', percentage: 50, icon: <DiIllustrator /> },
      { name: 'After Effect', level: 'Intermediate', percentage: 50, icon: <MdAutoAwesome /> },
      { name: 'Figma', level: 'Beginner', percentage: 25, icon: <TbBrandFigma /> },
      { name: 'Sketch', level: 'Beginner', percentage: 25, icon: <SiSketchup /> },
    ],
  },
];

export default abilityGroups;
