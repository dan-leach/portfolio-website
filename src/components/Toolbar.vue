<template>
  <nav>
    <v-toolbar :color="barcolor" dark fixed>
      <v-toolbar-title>
        <span class="font-weight-light-uppercase white--text">&#160;&#160;&#62;_&#160;&#160;&#160;</span>
        <span class="text-uppercase grey--text">Dan Leach</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="grey" router to="/"><v-icon>mdi-home</v-icon></v-btn>
        <v-btn flat color="grey" @click.stop="dialog = true"><v-icon>mdi-email</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
          <v-dialog 
          max-width="250"
          v-model="dialog"
          >
        <v-card
          color="rgba(0, 0, 0, 0.5)"
        >
          <v-card-text class="text-xs-center">
              <v-btn href="mailto:web@danleach.uk">web@danleach.uk</v-btn>
              <v-divider></v-divider>
              <v-btn href="https://github.com/dan-leach"><v-icon>mdi-github</v-icon>dan-leach</v-btn>
          </v-card-text>
        </v-card>
    </v-dialog>

  </nav>

  
</template>

<script>

export default {
    data() {
      return {
        dialog: false,
        barcolor: "rgba(0, 0, 0, 0.7)"
      };
    }
}

</script>