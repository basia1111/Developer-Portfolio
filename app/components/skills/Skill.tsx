import { SkillType } from '@/types';

const Skill = ({ index, skill }: { index: number; skill: SkillType }) => {
  return (
    <div key={index} className='group w-24 sm:w-32'>
      <div className='relative flex w-full flex-col items-center justify-center gap-4 rounded-2xl border border-gray-300 bg-gradient-to-br from-white to-white p-6 shadow-md backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-400 hover:from-gray-50 hover:to-white hover:shadow-2xl hover:shadow-purple-500/20 sm:h-32 dark:border-gray-700/50 dark:from-gray-800/80 dark:to-gray-900/80 dark:hover:border-purple-400/50 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80'>
        <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-purple-500/10 dark:to-pink-500/10'></div>
        <div className={`relative z-10 text-gray-600 transition-all duration-500 group-hover:scale-110 dark:text-gray-400 ${skill.color}`}>{skill.icon}</div>
        <span className='relative z-10 text-center text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white'>
          {skill.name}
        </span>
      </div>
    </div>
  );
};

export default Skill;
