import React from "react";

import Particles from "react-tsparticles";

function TechParticles() {

  return (

    <Particles

      id="tsparticles"

      options={{

        fullScreen:false,

        background:{
          color:"transparent"
        },

        fpsLimit:120,

        interactivity:{

          events:{

            onHover:{
              enable:true,
              mode:"grab"
            },

            resize:true
          },

          modes:{

            grab:{
              distance:180,

              links:{
                opacity:1
              }
            }
          }
        },

        particles:{

          color:{
            value:"#2563eb"
          },

          links:{

            color:"#3b82f6",

            distance:150,

            enable:true,

            opacity:0.35,

            width:1
          },

          collisions:{
            enable:false
          },

          move:{

            direction:"none",

            enable:true,

            outModes:{
              default:"bounce"
            },

            random:false,

            speed:1.2,

            straight:false
          },

          number:{
            density:{
              enable:true,
              area:900
            },

            value:55
          },

          opacity:{
            value:0.5
          },

          shape:{
            type:"circle"
          },

          size:{
            value:{
              min:1,
              max:4
            }
          }
        },

        detectRetina:true
      }}
    />

  );
}

export default TechParticles;