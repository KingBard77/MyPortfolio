import logoMimos from '../../../assets/qualification/experience/logo-mimos.webp';
import logoMydid from '../../../assets/qualification/experience/logo-mydigitalid.webp';

const infrastructureScopes = [
  {
    title: 'Hardware & Server Maintenance',
    descriptions: [
      'Assisted with physical infrastructure readiness for deployments, including power and cabling validation, asset tracking, and maintenance window coordination.',
      'Supported incident handling requiring data center involvement, including hardware faults, connectivity issues, and planned works, and coordinated escalation with relevant teams.',
    ],
  },
  {
    title: 'OS Administration',
    subtitle: 'Ubuntu, Rocky Linux & Windows',
    descriptions: [
      'Administered Linux servers through systemd service operations, journalctl troubleshooting, user and access administration, and performance and stability checks.',
      'Managed storage and filesystem operations, including /etc/fstab mounts, LVM administration, and recovery procedures using xfs_repair and fsck.',
      'Built and maintained Bash automation for operational tasks, including health checks, service restart workflows, verification steps, and housekeeping.',
      'Created and maintained runbooks, SOPs, and system documentation to standardize support and reduce recovery time.',
    ],
  },
  {
    title: 'Cloud Infrastructure',
    subtitle: 'TMCloud',
    descriptions: [
      'Operated TMCloud infrastructure, supporting VM provisioning, scaling, lifecycle operations, and incident recovery.',
      'Managed cloud network controls, including Security Groups and ACLs, to enforce least-privilege connectivity between services and environments.',
      'Supported observability and troubleshooting using Checkmk, Grafana, and Kibana for alert triage, log validation, and impact checks.',
      'Supported secure administration using OpenSSH and centralized identity management practices with LDAP and shared home directories through AutoFS.',
    ],
  },
  {
    title: 'On-Prem Virtualization & Storage',
    subtitle: 'Proxmox & Synology',
    descriptions: [
      'Operated Proxmox virtual infrastructure, including VM provisioning, templates, cloning, and lifecycle management.',
      'Managed Proxmox networking through Linux bridges, VLAN tagging and trunking, and segmentation for multi-environment connectivity.',
      'Administered Synology NAS for SMB, Samba, and NFS services, permissions and ACL management, and access troubleshooting.',
      'Managed NAS continuity features, including RAID and SHR, SMART and drive health monitoring, Snapshot Replication, and backup workflows through Hyper Backup and Active Backup for Business.',
      'Supported centralized home and workspace access via NFS and AFS, including mount validation, permissions, and availability troubleshooting.',
    ],
  },
  {
    title: 'Network & Security',
    subtitle: 'Cloud & On-Prem',
    descriptions: [
      'Diagnosed DNS and connectivity issues using dig, nslookup, ping, traceroute, ss, netstat, and tcpdump.',
      'Administered Ubiquiti gateways and switching for segmentation and policy enforcement across core, distribution, and PoE switching layers.',
      'Coordinated mydigital-id.my controls and validated public exposure routing through ALB and WAF as requested.',
      'Assisted vulnerability scanning using Nessus and tracked remediation actions for patching and configuration, contributing to risk evidence and compliance alignment.',
    ],
  },
  {
    title: 'Platform Operations',
    subtitle: 'Kubernetes',
    descriptions: [
      'Supported Kubernetes platform operations by coordinating infrastructure readiness, connectivity requirements, and environment configurations for application deployments.',
      'Assisted with ingress exposure validation through Ingress, Service, and LoadBalancer resources, and verified public routing through NLB and WAF where required.',
      'Supported operational checks for cluster health and workload stability, including node and pod status, resource usage, and event inspection, and escalated findings for remediation.',
    ],
  },
  {
    title: 'Data Center Support & Delivery',
    descriptions: [
      'Handled support tickets related to data center and backup support, providing onsite troubleshooting where required.',
      'Monitored infrastructure health, responded to incidents, and performed root cause troubleshooting to restore services and prevent recurrence.',
      'Supported project delivery by implementing changes safely with change planning, validation, rollback readiness, documentation, and cross-team coordination.',
      'Actively contributed to internal security communities supporting ISO/IEC 27001:2022 improvements and NCII initiatives, sharing inputs on risk assessment, controls, and operational security practices.',
      'Led Disaster Recovery activities for an active-active environment, including readiness planning, validation, and recovery coordination to maintain continuous service availability.',
    ],
  },
];

const researcherScopes = [
  {
    title: 'Stakeholders & Research',
    descriptions: [
      'Liaised with stakeholders and agencies to gather user requirements and document the project.',
      'Participated in development to establish an intellectual patent.',
    ],
  },
  {
    title: 'Blockchain & Automation',
    descriptions: [
      'Focused on mastering Hyperledger Fabric up to the latest version using Git for Halal Traceability development, and utilized AWS IAM and EC2 for cloud infrastructure.',
      'Delivered a generic middleware with a new signature endorsement policy for enhanced security.',
      'Designed and deployed a custom script to automate chaincode installation for multi-host Hyperledger Fabric.',
    ],
  },
  {
    title: 'Virtual Infrastructure',
    descriptions: [
      'Managed Ubuntu VM clusters across three on-premises locations, ensuring stable access, connectivity, configuration consistency, and infrastructure readiness.',
    ],
  },
];

const internshipScopes = [
  {
    title: 'Development & Delivery',
    descriptions: [
      'Developed decentralized applications using Hyperledger Fabric with Java, Golang, and Python.',
      'Designed and developed Halal Traceability and Authorized Economic Operator Systems, resulting in a 23% increase in overall development.',
      'Collaborated with government organizations and participated in creating and testing new software applications, supporting teamwork and software quality.',
    ],
  },
  {
    title: 'Automation & Blockchain Security',
    descriptions: [
      'Prepared UNIX shell scripts for daily production system testing and monitoring across multiple VM servers, supporting smooth operations and proactive issue resolution.',
      'Conducted Endorsement Tests and implemented Signature Policy for user authorization in blockchain projects, contributing to the successful operation of the Vaccine Management System.',
    ],
  },
];

const experienceEntries = [
  {
    id: 1,
    logo: logoMydid,
    company: 'MYDIGITAL ID (MKN, JPM)',
    title: 'Infrastructure Engineer',
    duration: 'Mar 2024 - Current (Full-Time)',
    scopes: infrastructureScopes,
    descriptions: infrastructureScopes.flatMap((scope) => scope.descriptions),
  },
  {
    id: 2,
    logo: logoMimos,
    company: 'MIMOS BERHAD',
    title: 'Associate Researcher',
    duration: 'Mar 2023 - Mar 2024 (Full-Time)',
    scopes: researcherScopes,
    descriptions: researcherScopes.flatMap((scope) => scope.descriptions),
  },
  {
    id: 3,
    logo: logoMimos,
    company: 'MIMOS BERHAD',
    title: 'Internship',
    duration: 'Aug 2022 - Dec 2022 (Full-Time)',
    scopes: internshipScopes,
    descriptions: internshipScopes.flatMap((scope) => scope.descriptions),
  },
];

export default experienceEntries;
