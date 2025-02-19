"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Loads all tsparticles features
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{

			background: {
				color: "#0d1117", // Dark background
			},
			particles: {
				number: {
					value: 80, // More particles for better connectivity
					density: {
						enable: true,
						area: 1000, // Spread area
					},
				},
				color: {
					value: "#00ffcc", // Edge color
				},
				shape: {
					type: "circle", // Circular particles
				},
				opacity: {
					value: 0.7,
				},
				size: {
					value: { min: 2, max: 4 }, // Particle size variation
				},
				move: {
					enable: true,
					speed: 1.5, // Speed of movement
					direction: "none",
					random: false,
					straight: false,
					outModes: {
						default: "bounce",
					},
				},
				links: {
					enable: true,
					distance: 150, // Maximum distance between linked particles
					color: "#00ffcc", // Link color
					opacity: 0.8,
					width: 2, // Line thickness
				},
			},
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: "grab", // Grab effect on hover
					},
					onClick: {
						enable: true,
						mode: "push", // Add more particles on click
					},
				},
				modes: {
					grab: {
						distance: 200,
						line_linked: {
							opacity: 1,
						},
					},
					push: {
						quantity: 4,
					},
				},
			},
			detectRetina: true, // High resolution
		}}
    />
  );
};

export default ParticlesBackground;
