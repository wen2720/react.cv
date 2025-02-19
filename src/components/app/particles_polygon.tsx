"use client"
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask"

const EdgeParticles = () => {
	const [ init, setInit ] = useState(false);
  useEffect(() => {
		initParticlesEngine(async (engine) => {
				await loadFull(engine);
				await loadPolygonMaskPlugin(engine);
		}).then(() => {
				setInit(true);
		});
}, []);
	const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        blink: false,
        color: "#ffffff",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        limit: 0,
        value: 800
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: {
          min: 0.05,
          max: 0.4
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: "rgba(255,255,255,0.2)",
        lineWidth: 1
      },
      enable: true,
      move: {
        radius: 10
      },
      inline: {
        arrangement: "equidistant"
      },
      scale: 1,
      type: "inline",
      url: "https://particles.js.org/images/smalldeer.svg"
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  } as ISourceOptions;

  return (
		init ?
    <Particles
      id="tsparticles"
      options={options}
    />
		: null
  );
};

export default EdgeParticles;
