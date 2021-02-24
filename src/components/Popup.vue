<template>
    <v-dialog max-width="344">
        <v-btn flat color="grey" max-height="140px" slot="activator"><v-icon>mdi-email</v-icon></v-btn>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text class="text-xs-center">
              <v-btn href="mailto:web@danleach.uk">web@danleach.uk</v-btn>
              <v-btn href="https://github.com/dan-leach"><v-icon>mdi-github</v-icon>dan-leach</v-btn>
          </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    
}
</script>