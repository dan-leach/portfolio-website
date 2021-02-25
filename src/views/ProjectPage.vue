<template>

  <div id="project" class="mt-4">
    <v-layout row wrap class="home text-xs-center">
      <v-flex xs12 sm12 lg12>
        <p class=" font-weight-light mt-5 " style="font-size:35px;">{{selected.title}}</p>
        <v-divider ></v-divider>
        <p>{{selected.description}}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
 
  data(){
    return{
      selected: {
        title: "Error: no such project as '" + this.$route.params.project + "'",
        description: "You have navigated to a project page that does not exist or that I haven't got round to building yet. :("
      },
      projects: {
        dkacalculator: {
          title: "DKA Calculator",
          description: "DKA Calculator for BSPED."
        },
        paedshub: {
          title: "Paeds Hub",
          description: "Online education website for Severn and Peninsula Schools of Paediatrics."
        }
      }
    }
  },
  mounted(){
    for (var key in this.projects) {
      if (key===this.$route.params.project) {
        this.selected.title = this.projects[key].title
        this.selected.description = this.projects[key].description
        break;
      }
    }
  }

  
}
</script>

