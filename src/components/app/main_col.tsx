import React from 'react';
import TestParticles from './test_particles';

// Define the props type
interface ColumnSpaceProps {
  title?: string;
  content?: string;
}

// Using React.FC to define the component with the props type
const MainCol: React.FC<ColumnSpaceProps> = ({ title = "Default Title", content = "Default Content" }) => {
  return (
    <div className="flex flex-col bg-gray-200 p-6 m-6 rounded-lg">
      <div className="bg-white p-4 rounded-md shadow-md z-0">
        <TestParticles/>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow-md z-10">
        <h2 className="text-2xl text-gray-800">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default MainCol;

