import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: false,
              value_area: 2000,
            },
          },
          color: {
            value: "#003967",
          },
          // shape: {
          //   type: "polygon",
          //   options: {
          //     sides: 6,
          //   },
          // },
          opacity: {
            value: 0.05,
            random: true,
            anim: {
              enable: false,
              speed: 0.05,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 100,
            random: true,
            anim: {
              enable: false,
              speed: 0.05,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 0.05,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 600,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 0.05,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: ["grab"],
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
