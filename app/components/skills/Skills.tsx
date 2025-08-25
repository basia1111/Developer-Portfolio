'use client';
import React, { useState } from 'react';
import { tabs } from './TabsContent';
import Skill from './Skill';
import Tab from './Tab';
import SectionTitle from '../layout /SectionTitle';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id='skills' className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24'>
      <SectionTitle title='Technical' titleGradient='Skills' />

      <div className='mx-auto mt-16 flex justify-center gap-1 sm:gap-3'>
        {tabs.map((tab) => (
          <Tab tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>

      <div className='mt-16'>
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            <div className='mx-auto max-w-6xl'>
              <div className='grid grid-cols-3 justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-7'>
                {tab.skills.map((skill, index) => (
                  <Skill index={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
