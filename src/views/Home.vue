<template>
  <div>
    <Banner/>
    <div id="portfolio">
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 lg12>
          <p class="font-weight-thin mt-2 ml-4" style="font-size:35px;">My projects</p>
        </v-flex>
        <v-container class="mt-5">
          <v-layout wrap my-5>
            <v-flex xs12 class="mt-5">
              <v-layout wrap>
                <template v-for="(project, i) in projectList">
                  <v-flex :key="i" xs12 sm6 md4>
                    <Project :project="project" />
                  </v-flex>
                </template>
              </v-layout>
            </v-flex>
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
            route: "dkacalculator",
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
            price: "DEVELOPMENT",
            logo: "paedshub-logo.png",
            route: "paedshub",
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
            route: "themoodmonitor",
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
      ]
    };
  }
};
</script>

