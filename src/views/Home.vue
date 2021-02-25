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
              "DKA Calculator for BSPED",
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
              "Online education website for Severn and Peninsula Schools of Paediatrics",
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
          {
            name: "The Mood Monitor",
            price: "LIVE",
            logo: "mood-logo.png",
            route: "projects/themoodmonitor",
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
              "Mood Monitor for the Children's Ward at RUH Bath",
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
          {
            name: "Feedback Tool",
            price: "LIVE",
            logo: "feedback-logo.png",
            route: "projects/feedbacktool",
            platforms: [
              {
                name: "web",
                icon: "mdi-web",
                link: "https://feedback.danleach.co.uk"
              },
              {
                name: "github",
                icon: "mdi-github",
                link: "https://github.com/dan-leach"
              }
            ],
            description:
              "Feedback Tool for providing requesting and providing anonymous feedback on teaching sessions.",
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
              "Portfolio site for my projects.",
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
          {
            name: "Rota Manager",
            price: "LIVE",
            logo: "excel-logo.png",
            route: "projects/rotamanager",
            platforms: [],
            description:
              "Rota Manager for medical rotas.",
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
          {
            name: "SIFT Calculator",
            price: "LIVE",
            logo: "excel-logo.png",
            route: "projects/siftcalculator",
            platforms: [],
            description:
              "SIFT Ladder for NICU.",
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
          {
            name: "Hedgehog Handover",
            price: "DEPRECATED",
            logo: "access-logo.png",
            route: "projects/hedgehoghandover",
            platforms: [],
            description:
              "Hedgehog Handover for NICU.",
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
              "Hedgehog Handover for NICU.",
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

