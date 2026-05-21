'use client';

import { motion } from 'framer-motion';

type Props = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  twitter?: string;
  linkedin?: string;
};

export default function TeamCard({ name, role, bio, photo, twitter, linkedin }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo} alt={name} className="mx-auto mb-4 h-28 w-28 rounded-full object-cover" />
      <h3 className="text-lg font-semibold text-[#0E2557]">{name}</h3>
      <p className="mb-3 text-sm text-primary-light">{role}</p>
      <p className="mb-4 text-sm text-gray-600">{bio}</p>
      <div className="flex items-center justify-center gap-3">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0E2557]/70 transition hover:text-primary">
            Twitter
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0E2557]/70 transition hover:text-primary">
            LinkedIn
          </a>
        )}
      </div>
    </motion.article>
  );
}
