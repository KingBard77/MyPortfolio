const REQUEST_EMAIL = 'badamin771@gmail.com';

const buildRequestLink = (documentName) => {
  const subject = `${documentName} request - Badrul Amin`;
  const body = [
    'Hi Badrul,',
    '',
    `I visited your portfolio and would like to request a copy of your ${documentName.toLowerCase()}.`,
    '',
    'Name: ',
    'Company: ',
    'Role or opportunity: ',
    '',
    'Thank you.',
  ].join('\r\n');
  return `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const documentRequestLinks = {
  resume: buildRequestLink('Resume'),
  coverLetter: buildRequestLink('Cover letter'),
};

export default documentRequestLinks;
