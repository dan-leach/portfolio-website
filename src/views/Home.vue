<template>
  <div>
    <Banner/>
    <div id="portfolio">
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">My projects</p>
        </v-flex>
        <v-container >
          <v-layout wrap>
            <template v-for="(project, i) in projectList">
              <v-flex :key="i" xs12 sm6 md4>
                <Project :project="project" />
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-layout>
    </div>
  </div>
</template>

<script>

import Banner from '../components/Banner'
import Project from "../components/Project.vue";

export default {
  components: {
    Banner,
    Project
  },
  data() {
    return {
      projectList: [
          //Paeds Hub
          {
            name: "Paeds Hub",
            price: "UNDER DEVELOPMENT",
            logo: "paedshub-logo.png",
            route: "projects/paedshub",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://paedshub.co.uk"
              }
            ],
            description:
              "An education website for Severn and Peninsula Schools of Paediatrics that will host interactive eLearning on a range of paediatric topics where users can enroll, track progress and complete courses.",
            technologies: [
              {
                name: "Wordpress",
                icon: "mdi-wordpress",
                link: ""
              },
              {
                name: "LearnDash",
                icon: "mdi-school",
                link: ""
              },
              {
                name: "PHP",
                icon: "mdi-language-php",
                link: ""
              }
            ]
          },
          //Portfolio
          {
            name: "Portfolio Site",
            price: "LIVE",
            logo: "portfolio-logo.png",
            route: "projects/portfolio",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://danleach.co.uk"
              },
              {
                name: "github",
                icon: "mdi-github",
                link: "https://github.com/dan-leach"
              }
            ],
            description:
              "A portfolio website built to current responsive web-design standards to show my tech projects. Uses VueJS frontend with Vuetify UI framework and vue-router with dynamically rendered project cards and pages.",
            technologies: [
              {
                name: "VueJS",
                icon: "mdi-vuejs",
                link: ""
              },
              {
                name: "Vuetify",
                icon: "mdi-vuetify",
                link: ""
              }
            ]
          },
          //DKA Calculator
          {
            name: "DKA Calculator",
            price: "LIVE",
            logo: "dka-logo.png",
            route: "projects/dkacalculator",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://dka-calculator.co.uk"
              },
              {
                name: "github",
                icon: "mdi-github",
                link: "https://github.com/dan-leach"
              }
            ],
            description:
              "A registered medical device which generates an individualised patient protocol for the management of paediatric diabetic ketoacidosis with fluid rates prefilled to reduce errors, and stores audit data with ID linkage.",
            technologies: [
              {
                name: "Javascript",
                icon: "mdi-language-javascript",
                link: ""
              },
              {
                name: "PHP",
                icon: "mdi-language-php",
                link: ""
              },
              {
                name: "SQL",
                icon: "mdi-database",
                link: ""
              }
            ]
          },
          //Feedback Tool
          {
            name: "Feedback Tool",
            price: "LIVE",
            logo: "feedback-logo.png",
            route: "projects/feedbacktool",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://feedback.danleach.uk"
              },
              {
                name: "github",
                icon: "mdi-github",
                link: "https://github.com/dan-leach"
              }
            ],
            description:
              "A web app that generates feedback invitations for teaching session facilitators to share with their delegates who can then provide anonymous feedback including ratings that are delivered directly to a pre-specified email.",
            technologies: [
              {
                name: "Svelte",
                icon: "mdi-language-javascript",
                link: ""
              },
              {
                name: "PHP",
                icon: "mdi-language-php",
                link: ""
              },
              {
                name: "SQL",
                icon: "mdi-database",
                link: ""
              }
            ]
          },
          //The Mood Monitor
          {
            name: "The Mood Monitor",
            price: "LIVE",
            logo: "mood-logo.png",
            route: "projects/themoodmonitor",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://themoodmonitor.co.uk"
              },
              {
                name: "github",
                icon: "mdi-github",
                link: "https://github.com/dan-leach"
              }
            ],
            description:
              "A web app built for the quality improvement team on the Children's Ward in Bath. Collects anonymous submissions of morale indicators and comments, and displays these in a admin dashboard.",
            technologies: [
              {
                name: "Javascript",
                icon: "mdi-language-javascript",
                link: ""
              },
              {
                name: "PHP",
                icon: "mdi-language-php",
                link: ""
              },
              {
                name: "SQL",
                icon: "mdi-database",
                link: ""
              }
            ]
          },
          //Rota Manager
          {
            name: "Rota Manager",
            price: "LIVE",
            logo: "excel-logo.png",
            route: "projects/rotamanager",
            platforms: [],
            description:
              "An spreadsheet tool for managing medical rotas, this workbook automatically highlights gaps and locum shifts in advance, creates a outlook email with a weekly rota, amongst other functions for efficient rota management.",
            technologies: [
              {
                name: "Excel",
                icon: "mdi-microsoft-excel",
                link: ""
              },
              {
                name: "VBA",
                icon: "mdi-microsoft-excel",
                link: ""
              }
            ]
          },
          //SIFT Calculator
          {
            name: "SIFT Calculator",
            price: "LIVE",
            logo: "excel-logo.png",
            route: "projects/siftcalculator",
            platforms: [],
            description:
              "Produces a step-by-step plan with pre-calculated milk volumes based on the SIFT trial, using a neonate's weight and certain clinical characteristics, with input validation and rounding.",
            technologies: [
              {
                name: "Excel",
                icon: "mdi-microsoft-excel",
                link: ""
              },
              {
                name: "VBA",
                icon: "mdi-microsoft-excel",
                link: ""
              }
            ]
          },
          //Hedgehog Handover
          {
            name: "Hedgehog Handover",
            price: "DEPRECATED",
            logo: "access-logo.png",
            route: "projects/hedgehoghandover",
            platforms: [],
            description:
              "This tool tracked neonates on intravenous antibiotics at Southmead Hospital NICU and produced schedules for medication administration, blood sampling and auto-generated discharge letters.",
            technologies: [
              {
                name: "Excel",
                icon: "mdi-microsoft-access",
                link: ""
              },
              {
                name: "VBA",
                icon: "mdi-microsoft-access",
                link: ""
              }
            ]
          },
          //Paediatric CPR Scribe
          {
            name: "Paediatric CPR Scribe",
            price: "DEPRECATED",
            logo: "cpr-logo.png",
            route: "projects/paediatriccprscribe",
            platforms: [
              {
                name: "android",
                icon: "mdi-android",
                link: ""
              }
            ],
            description:
              "An android app that recorded events with timings during paediatric resuscitation episodes, including prompts for reassessment and drug administration.",
            technologies: [
              {
                name: "MIT App Inventor 2",
                icon: "mdi-code-braces-box",
                link: ""
              }
            ]
          },
      ]
    };
  }
};
</script>

