import { TitleType } from '@/types';

const SectionTitle = ({ title, titleGradient, additionalText }: TitleType) => {
  return (
    <div className='mb-16 text-center md:mb-20'>
      <h2 className='text-5xl font-bold text-gray-900 md:text-6xl dark:text-white'>
        {title}&nbsp;
        <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-blue-400'>
          {titleGradient}
        </span>
      </h2>
      <div>{additionalText && <p className='mt-6 text-lg font-normal text-gray-600 dark:text-gray-400'>{additionalText}</p>}</div>
    </div>
  );
};

export default SectionTitle;
