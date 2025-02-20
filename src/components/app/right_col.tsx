import React from 'react';
import AboutProfile from './profile_about';
import clsx from 'clsx';
import ProfileWorked from './profile_worked';
import ProfileEducation from './profile_education';


interface CvContent {
  font_style?: string
  font_color?: string
}

const RightColumn: React.FC<CvContent> = ({ 
  font_style = "font-serif",
  font_color = "text-white"
}) => {
  return (
    <div className={clsx("flex-col p-6 rounded-lg", font_style, font_color )}>
      <AboutProfile/>
      <ProfileEducation/>
      <ProfileWorked/>
    </div>
  );
};

export default RightColumn;

