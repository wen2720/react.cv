import React from 'react';
import clsx from 'clsx';
import ProfileContact from './profile_contacts';
import ProfileSpecials from './special_skills';
import CodeSkills from './code_skills';

// Define the props type
interface AProfile {
  img_src?: string;
  name?: string;
  hash_tags?: string[];
  font_style?: string;
  font_color?: string
}

// React component
const OneProfile: React.FC<AProfile> = ({ 
  img_src="/src/assets/IMG5866-modified1.png", 
  name = "Wenhao Li", 
  hash_tags = ["#Computer Science", "#Software Engineer", "#Full-stack developer"],
  font_style = "font-serif",
  font_color = "text-white"
}) => {
  return (
    // <div className={`flex flex-col items-center mb-6 ${font_style} ${font_color} `}>
    <div className={clsx("flex flex-col items-center mb-6", font_style, font_color)}>
      
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
        {hash_tags.map((ht,i) =>(
          <p key={i} className="mt-2 text-sm text-left">{ht}</p>  
        ))}
      </div>
      

      <div className="flex flex-col">
      
        <ProfileContact />  
        <ProfileSpecials />
        <CodeSkills />
      
      </div>

    </div>
  );
};

export default OneProfile;