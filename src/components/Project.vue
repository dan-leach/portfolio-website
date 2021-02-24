<template>
  <v-card flat color="transparent" max-width="350px">
    <v-card-title>
      <v-layout>
        <v-flex>
          <router-link :to="project.route">
          <v-card
            elevation="5"
            style="border-radius: 20px"
            width="100px"
            height="100px"
          >
            <v-img :src="logo(project.logo)" />
          </v-card>
          </router-link>
        </v-flex>
        <v-flex xs7>
          <a v-bind:href="project.route">{{project.name}}</a>
          <div>
            <v-chip small pill color="blue" dark>{{project.price}}</v-chip>
          </div>

          <template v-for="(platform, i) in project.platforms">
            <!-- <div> -->
            <v-btn :href="platform.link" target="_blank" icon :key="i">
              <v-icon>{{platform.icon}}</v-icon>
            </v-btn>
            <!-- </div> -->
          </template>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <div>{{project.description}}</div>
      <br>
      <v-layout>
        <template v-for="(tech, i) in project.technologies">
          <v-flex xs3 :key="i">
            <div class="text-center">
              <v-btn icon>
                <v-icon>{{tech.icon}}</v-icon>
              </v-btn>
              <div class="caption">{{tech.name}}</div>
            </div>
          </v-flex>
        </template>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  }
};
</script>

<style>
</style>