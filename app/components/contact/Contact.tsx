import React from 'react';
import { contactLinks } from './ContactInfo';
import ContactLink from './ContactLink';
import SectionTitle from '../layout /SectionTitle';

const ContactSection = () => {
  return (
    <section id='contact' className='py-12 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <SectionTitle title='Get in' titleGradient='Touch' additionalText="Let's build something amazing together" />

        <div className='grid gap-12 lg:grid-cols-[1fr,1.5fr]'>
          <div className='space-y-8'>
            <div className='font-mono text-sm text-purple-500 dark:text-purple-400'>❯ contact--info</div>
            <div className='space-y-4'>
              {contactLinks.map((link, index) => (
                <ContactLink link={link} index={index} />
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='mb-6 font-mono text-sm text-purple-500 dark:text-purple-400'>❯ message</div>
            <div className='relative space-y-8 rounded-xl border border-gray-300 bg-gradient-to-br from-white to-gray-50 p-8 shadow-md backdrop-blur-md dark:border-gray-700/50 dark:from-gray-800/80 dark:to-gray-900/80'>
              <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5'></div>

              <div className='relative z-10 space-y-3'>
                <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold text-transparent dark:from-purple-400 dark:to-pink-400'>
                  → Looking Forward
                </span>
                <p className='text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300'>
                  Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
                </p>
              </div>

              <div className='relative z-10 space-y-3'>
                <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-semibold text-transparent dark:from-purple-400 dark:to-pink-400'>
                  → Contact Methods
                </span>
                <p className='text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300'>
                  Feel free to reach out through any of the platforms listed. I'm most responsive via email and LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
