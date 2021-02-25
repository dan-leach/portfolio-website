<template>
  <div id="project">
    <v-card height="70px" flat></v-card>
    <v-layout row wrap align-center justify-center>
      <v-card
        elevation="5"
        style="border-radius: 20px"
        width="100px"
        height="100px"
        >
        <v-img :src="logo(selected.logo)"/>
      </v-card>
      <v-card width="50px" flat></v-card>
      <p class=" font-weight-light mt-5 display-3" style="font-size:35px;">
        {{selected.title}}
      </p>
    </v-layout>
    <v-divider ></v-divider>
    <p>{{selected.description}}</p>
    <v-divider ></v-divider>
    <v-carousel>
    <v-carousel-item
      v-for="(image,i) in selected.images"
      :key="i"
      :src="image.src"
      >
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>

export default {
 
  data(){
    return{
      selected: {
        title: "Error: no such project as '" + this.$route.params.project + "'",
        description: "You have navigated to a project page that does not exist or that I haven't got round to building yet. :(",
        logo: "portfolio-logo.png",
        images: [],
      },
      projects: {
        dkacalculator: {
          title: "DKA Calculator",
          description: "This page is under construction.",
          logo: "dka-logo.png",
          images: [
          {
            src: 'https://danleach.uk/code.jpg',
          },
        ],
        },
        paedshub: {
          title: "Paeds Hub",
          description: "This page is under construction",
          logo: "paedshub-logo.png",
          images: [
          {
            src: 'https://danleach.uk/code.jpg',
          },
        ],
        }
      }
    }
  },
  mounted(){
    for (var key in this.projects) {
      if (key===this.$route.params.project) {
        this.selected = this.projects[key]
        break;
      }
    }
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  }
}
</script>

