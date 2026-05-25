// data/collaborators.ts
export interface Collaborator {
  id: string;
  name: string;
  logo: string;
  category: 'government' | 'industry' | 'international' | 'ngo';
  website?: string;
}

export const collaborators: Collaborator[] = [
  // Government Bodies
  {
    id: 'collab-1',
    name: 'Ministry of Communication and Information Technology',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'government',
    website: '#',
  },
  {
    id: 'collab-2',
    name: 'Department of Information Technology',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'government',
    website: '#',
  },
  {
    id: 'collab-3',
    name: 'Nepal Telecommunications Authority',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'government',
    website: '#',
  },
  {
    id: 'collab-4',
    name: 'National Information Technology Center',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'government',
    website: '#',
  },

  // Industry Partners
  {
    id: 'collab-5',
    name: 'Federation of Nepal Chamber of Commerce',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'industry',
    website: '#',
  },
  {
    id: 'collab-6',
    name: 'National Academy of Science and Technology',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'industry',
    website: '#',
  },
  {
    id: 'collab-7',
    name: 'Nepal Association for Software and IT Services',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'industry',
    website: '#',
  },
  {
    id: 'collab-8',
    name: 'Artificial Intelligence Association Nepal',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'industry',
    website: '#',
  },

  // International Partners
  {
    id: 'collab-9',
    name: 'The Asia Foundation',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'international',
    website: '#',
  },
  {
    id: 'collab-10',
    name: 'Huawei Technologies',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'international',
    website: '#',
  },
  {
    id: 'collab-11',
    name: 'upGrad',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'international',
    website: '#',
  },
  {
    id: 'collab-12',
    name: 'InDrive',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80',
    category: 'international',
    website: '#',
  },
];

export const collaboratorsByCategory = {
  government: collaborators.filter(c => c.category === 'government'),
  industry: collaborators.filter(c => c.category === 'industry'),
  international: collaborators.filter(c => c.category === 'international'),
  ngo: collaborators.filter(c => c.category === 'ngo'),
};
