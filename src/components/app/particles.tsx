import React from "react";
import Particles from "react-tsparticles";
import { IParticlesProps } from "react-tsparticles";

const ParticleComponent: React.FC = () => {
  const particlesOptions: IParticlesProps['options'] = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 50
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1
      },
      links: {
        enable: true,
        distance: 150
      }
    }
  };

  return <Particles options={particlesOptions} />;
};

export default ParticleComponent;
