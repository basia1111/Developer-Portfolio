import { Variants } from 'framer-motion';
import { ReactElement } from 'react';

export interface AnimationDefaultsType {
  (
    duration: number,
    delay: number,
  ): {
    variants: Variants;
    initial: 'initial';
    animate: string;
    transition: {
      duration: number;
      delay: number;
    };
  };
}

export interface SkillType {
  icon: ReactElement;
  name: string;
  color: string;
}

export interface TabType {
  id: string;
  label: string;
  icon: ReactElement;
  skills: SkillType[];
}

export interface ProjectType {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export interface ContactLinkType {
  text: string;
  color: string;
  href: string;
  icon: ReactElement;
}

export interface TitleType {
  title: string;
  titleGradient: string;
  additionalText?: string;
}
