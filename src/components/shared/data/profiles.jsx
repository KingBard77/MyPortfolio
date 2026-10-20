import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';
import { SiGlassdoor, SiIndeed } from 'react-icons/si';

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/KingBard77',
    icon: <BsGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/badrul-amin-762000225/',
    icon: <BsLinkedin />,
  },
  {
    label: 'JobStreet',
    href: 'https://my.jobstreet.com/profiles/badrul-amin-thjpbrgh4c',
    icon: <FaBriefcase />,
  },
  {
    label: 'Glassdoor',
    href: '',
    icon: <SiGlassdoor />,
  },
  {
    label: 'Indeed',
    href: '',
    icon: <SiIndeed />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bard_7/',
    icon: <BsInstagram />,
  },
  {
    label: 'Email',
    href: 'mailto:badamin771@gmail.com',
    icon: <BsEnvelope />,
  },
];

export default profileLinks;
