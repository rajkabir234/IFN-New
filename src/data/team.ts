export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  twitter?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'razan',
    name: 'Razan Lamsal ',
    role: 'Chairperson',
    bio: '',
    photo: '/images/team-member-1.svg',
  },
    {
    id: 'hempal',
    name: 'Hempal Shrestha',
    role: 'Knowledge Management Specialist',
    bio: '',
    photo: '/images/team-member-1.svg',
  },
  {
    id: 'nidesh',
    name: 'Nidesh Maskey',
    role: 'Technical Lead',
    bio: '',
    photo: '/images/team-member-3.svg',
  },
  {
    id: 'sushil',
    name: 'Sushil Pokharel',
    role: '',
    bio: '',
    photo: '/images/team-member-3.svg',
  },
{
    id: 'hariram',
    name: 'Hariram Rimal',
    role: '',
    bio: '',
    photo: '/images/team-member-3.svg',
  },
{
    id: 'krishpana',
    name: 'Krishpana Poudel',
    role: 'Communications Officer',
    bio: '',
    photo: '/images/team-member-3.svg',
  },
  {
    id: 'sujal',
    name: 'Sujal Bhakta Shrestha',
    role: 'Project Lead',
    bio: '',
    photo: '/images/team-member-3.svg',
  },
    {
    id: 'kabir',
    name: 'Kabir Rajbanshi',
    role: 'Creative and Technical Officer',
    bio: '',
    photo: '/images/team-member-3.svg',
  }
];

export default teamMembers;
