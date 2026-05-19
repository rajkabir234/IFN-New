'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formMountedAt = useState(Date.now)[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-form-timestamp': String(formMountedAt),
        },
        body: JSON.stringify({
          ...data,
          website: '', // honeypot — must be empty
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Submission failed');

      toast.success('Message sent successfully!');
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Support Our Cause */}
      <div className="gradient-primary relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5" aria-hidden="true" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Support Our Cause
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80">
            Join ICT Foundation Nepal in creating a digitally inclusive Nepal — where every
            individual is empowered by the transformative potential of technology. Partner
            with us to shape Nepal&apos;s digital destiny.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg gradient-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:shadow-xl hover:brightness-110"
            >
              Become a Partner
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Contact Details & Form */}
      <AnimatedSection id="contact" className="bg-surface">
        <div className="mx-auto mb-4 section-divider" />
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-[32px]">
          Contact & Support
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm">
            {/* Honeypot — hidden from humans, bots will fill it */}
            <input
              type="text"
              {...register('website' as keyof FormData)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute h-0 w-0 overflow-hidden opacity-0"
              style={{ position: 'absolute' }}
            />
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-body-text/80">
                Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-body-text/80">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-body-text/80">
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.subject && (
                <p className="mt-1.5 text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-body-text/80">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-[15px] transition-all focus:border-primary focus:bg-white"
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-xl gradient-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:shadow-xl hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Contact Us
                </>
              )}
            </button>
          </form>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-xl font-bold gradient-text-primary">ICT Foundation Nepal</h3>
              <div className="space-y-5 text-[15px] text-body-text">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Address</p>
                    <p className="text-body-text/65">New Baneshwor, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaPhone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Phone</p>
                    <p className="text-body-text/65">+977-9851141348</p>
                    <p className="text-body-text/65">+977-9801263604</p>
                    <p className="text-body-text/65">+977-9801263601</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Email</p>
                    <a href="mailto:admin@ictfoundation.org.np" className="text-primary hover:underline">admin@ictfoundation.org.np</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    <FaGlobe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-body-text">Website</p>
                    <a
                      href="https://ictfoundation.org.np"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      ictfoundation.org.np
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
