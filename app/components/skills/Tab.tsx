import { TabType } from '@/types';

const Tab = ({ tab, activeTab, setActiveTab }: { tab: TabType; activeTab: string; setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`inline-flex items-center gap-2 rounded-full px-2 py-3 text-xs font-medium shadow-md transition-all duration-500 sm:px-6 sm:py-3 sm:text-sm ${
        activeTab === tab.id
          ? 'border border-purple-400 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/40 dark:border-purple-400/50'
          : 'border border-gray-300 bg-white text-gray-700 shadow-2xl shadow-gray-500/5 hover:border-purple-400 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-600/50 dark:bg-gray-800/60 dark:text-gray-300 dark:shadow-purple-500/5 dark:hover:border-purple-400/50 dark:hover:bg-gray-700/80 dark:hover:text-white'
      }`}
    >
      {tab.icon}
      {tab.label}
    </button>
  );
};

export default Tab;
