import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      href: 'mailto:basia.zygilewicz@gmail.com',
      icon: <Mail className='h-5 w-5' />,
      text: 'basia.zygilewicz@gmail.com',
    },
    {
      href: 'https://github.com/basia1111',
      icon: <Github className='h-5 w-5' />,
      text: 'github.com/basia1111',
    },
    {
      href: 'https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/',
      icon: <Linkedin className='h-5 w-5' />,
      text: 'Connect with me',
    },
  ];

  return (
    <section id='contact' className='py-12 md:py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <span className='inline-flex items-center justify-center gap-2 font-mono text-sm text-accent-primary dark:text-accent-light'>
            <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>❯ Contact
            <span className='h-px w-8 bg-accent-primary/20 dark:bg-accent-light/20'></span>
          </span>
          <h2 className='mt-4 text-2xl font-bold text-light-text-primary md:text-4xl dark:text-dark-text-primary'>Get in Touch</h2>
        </div>

        <div className='grid gap-12 lg:grid-cols-[1fr,1.5fr]'>
          <div className='space-y-6'>
            <div className='font-mono text-sm text-accent-primary dark:text-accent-light'>❯ contact--info</div>
            <div className='space-y-4'>
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className='group block'
                >
                  <div className='flex items-center gap-4 rounded-xl border border-accent-primary/20 bg-white p-4 transition-colors hover:border-accent-primary/30 dark:bg-dark-bg-secondary'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary dark:text-accent-light'>
                      {link.icon}
                    </div>
                    <span className='text-sm text-light-text-muted group-hover:text-accent-primary dark:text-dark-text-secondary dark:group-hover:text-accent-light'>
                      {link.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='mb-6 font-mono text-sm text-accent-primary dark:text-accent-light'>❯ message</div>
            <div className='space-y-6 rounded-xl border border-accent-primary/20 bg-white p-6 dark:bg-dark-bg-secondary'>
              <div className='space-y-2'>
                <span className='text-sm font-medium text-accent-primary dark:text-accent-light'>→ Looking Forward</span>
                <p className='text-sm leading-relaxed text-light-text-muted dark:text-dark-text-secondary'>
                  Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.
                </p>
              </div>

              <div className='space-y-2'>
                <span className='text-sm font-medium text-accent-primary dark:text-accent-light'>→ Contact Methods</span>
                <p className='text-sm leading-relaxed text-light-text-muted dark:text-dark-text-secondary'>
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
