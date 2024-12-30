<script  lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'

export default{
  components:{
    TopBar
  }
}

</script>

<template>
<v-app>
 <TopBar />

    <v-main class="bg-grey-lighten-1">
      <v-container>
        <RouterView :details="details" />
      </v-container>

    </v-main>

  </v-app>


</template>
