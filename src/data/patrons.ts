export type Patron = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  url?: string;
};

export const patrons: Patron[] = [
  {
    id: 'patron-1',
    name: 'Razan Lamsal',
    role: 'Chairperson Patron',
    bio: 'Championing digital policy and public engagement across Nepal.',
    photo: '/images/team-member-1.svg',
    url: '#',
  },
  {
    id: 'patron-2',
    name: 'Hempal Shrestha',
    role: 'Knowledge Patron',
    bio: 'Supporting strategic insights, learning and community outreach.',
    photo: '/images/team-member-2.svg',
    url: '#',
  },
  {
    id: 'patron-3',
    name: 'Nidesh Maskey',
    role: 'Technical Patron',
    bio: 'Advising on digital systems and innovation delivery.',
    photo: '/images/team-member-3.svg',
    url: '#',
  },
  {
    id: 'patron-4',
    name: 'Krishpana Poudel',
    role: 'Communications Patron',
    bio: 'Amplifying IFN stories and stakeholder connections.',
    photo: '/images/team-member-4.svg',
    url: '#',
  },
];

export default patrons;
