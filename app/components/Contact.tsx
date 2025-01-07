import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id='contact' className='py-24'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div>
          <span className='text-accent-primary dark:text-accent-light font-mono text-sm'>→ Contact</span>
          <h2 className='text-light-text-primary dark:text-dark-text-primary mb-8 mt-4 text-2xl font-bold md:text-4xl'>Get in Touch</h2>
        </div>

        <div className='space-y-4 font-mono'>
          <div className='text-accent-primary dark:text-accent-light text-sm'>❯ contact--details</div>

          <div className='grid gap-6 lg:grid-cols-2'>
            <div className='space-y-4'>
              <a href='mailto:basia.zygilewicz@gmail.com' className='group block'>
                <div className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary dark:hover:shadow-accent-light/5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-950/40'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='bg-accent-primary/10 rounded-lg p-2'>
                        <Mail className='text-accent-primary dark:text-accent-light h-5 w-5' />
                      </div>
                      <div>
                        <p className='text-light-text-muted dark:text-dark-text-secondary text-sm'>basia.zygilewicz@gmail.com</p>
                      </div>
                    </div>
                    <ArrowRight className='h-4 w-4 -translate-x-2 text-gray-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                  </div>
                </div>
              </a>

              <a href='https://github.com/basia1111' target='_blank' rel='noopener noreferrer' className='group block'>
                <div className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary dark:hover:shadow-accent-light/5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-950/40'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='bg-accent-primary/10 rounded-lg p-2'>
                        <Github className='text-accent-primary dark:text-accent-light h-5 w-5' />
                      </div>
                      <div>
                        <p className='text-light-text-muted dark:text-dark-text-secondary text-sm'>github.com/basia1111</p>
                      </div>
                    </div>
                    <ArrowRight className='h-4 w-4 -translate-x-2 text-gray-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                  </div>
                </div>
              </a>

              <a href='https://www.linkedin.com/in/barbara-%C5%BCygilewicz-905635332/' target='_blank' rel='noopener noreferrer' className='group block'>
                <div className='hover:border-accent-primary/30 hover:shadow-accent-primary/5 border-accent-primary/20 bg-light-bg-secondary dark:hover:shadow-accent-light/5 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-950/40'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='bg-accent-primary/10 rounded-lg p-2'>
                        <Linkedin className='text-accent-primary dark:text-accent-light h-5 w-5' />
                      </div>
                      <div>
                        <p className='text-light-text-muted dark:text-dark-text-secondary text-sm'>Connect with me</p>
                      </div>
                    </div>
                    <ArrowRight className='h-4 w-4 -translate-x-2 text-gray-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100' />
                  </div>
                </div>
              </a>
            </div>

            <div className='text-light-text-muted dark:text-dark-text-secondary space-y-6'>
              <div className='space-y-2'>
                <span className='text-accent-primary'>- Looking Forward</span>
                <p className='text-sm'>Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities and ideas.</p>
              </div>

              <div className='space-y-2'>
                <span className='text-accent-primary'>- Contact Methods</span>
                <p className='text-sm'>Feel free to reach out through any of the platforms listed. I'm most responsive via email and LinkedIn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
