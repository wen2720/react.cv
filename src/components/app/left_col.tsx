import React from 'react';
import clsx from 'clsx';
import ProfileContact from './profile_contacts';
import ProfileSpecials from './profile_specials';
import ProfileCode from './profile_code';
import ProfileLanguage from './profile_languages';
import profile_image from '@/assets/IMG5866-modified1.png'

// Define the props type
interface CvSide {
  img_src?: string;
  name?: string;
  hash_tags?: string[];
  font_style?: string;
  font_color?: string
}

// React component
const LeftColumn: React.FC<CvSide> = ({ 
  img_src=profile_image, 
  name = "Wenhao Li", 
  hash_tags = ["#Software Engineer", "#Full-stack developer", "#MSc", "#Computer Science"],
  font_style = "font-serif",
  font_color = "text-white"
}) => {
  return (
    // <div className={`flex flex-col items-center mb-6 ${font_style} ${font_color} `}>
    <div className={clsx("flex flex-col items-center m-6", font_style, font_color)}>
      
      {/* Profile image */}
      <img
        src={img_src} 
        alt="Profile"
        width={128}
        height={128}
        className="rounded-full object-cover"
      />
    
      {/* Name */}
      <p className="mt-4 text-sm font-semibold">{name}</p>
      
      {/* Hash tags */}
      <div>
      {hash_tags.map((ht) =>(
        <p key={ht} className="mt-2 text-sm text-left">{ht}</p>  
      ))}
      </div>
      
    
      <div className="flex flex-col">
        <ProfileContact />  
        <ProfileSpecials />
        <ProfileCode />
        <ProfileLanguage />
      </div>

    </div>
  );
};

export default LeftColumn;