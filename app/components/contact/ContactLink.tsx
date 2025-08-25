import { ContactLinkType } from '@/types';

const ContactLink = ({ link, index }: { link: ContactLinkType; index: number }) => {
  return (
    <a
      key={index}
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className='group block'
    >
      <div className='relative flex items-center gap-4 rounded-xl border border-gray-300 bg-gradient-to-br from-white to-gray-50 p-6 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 dark:border-gray-700/50 dark:from-gray-800/80 dark:to-gray-900/80 dark:hover:border-purple-400/50'>
        <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
        <div
          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100/80 to-pink-100/80 text-purple-600 transition-all duration-300 dark:from-purple-500/20 dark:to-pink-500/20 dark:text-purple-400 ${link.color}`}
        >
          {link.icon}
        </div>
        <span
          className={`relative z-10 text-sm text-gray-700 transition-all duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white`}
        >
          {link.text}
        </span>
      </div>
    </a>
  );
};

export default ContactLink;
