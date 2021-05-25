<template>
<v-flex class="ma-0 pa-0">
  <v-app v-if="!IsLogin">

    <v-app-bar app color="#FFF">
      <v-flex>
        <v-img src="./assets/ssafy.png" width="140" height="50"/>
      </v-flex>
      <v-spacer></v-spacer>
      SSAFY15반 8팀
      <!-- <v-select :items="IdentityItems" v-model="Identity"></v-select> -->
    </v-app-bar>

    <v-content v-if="Identity=='administer'">
      <Administer></Administer>
    </v-content>

  </v-app>

</v-flex>
</template>

<script>

import Administer from './views/Administer';

export default {
  name: 'App',

  components: {
    Administer,
  },

  data: () => ({
    tab: null,
    IsLogin:false,
    Identity:"administer",

    IdentityItems: ['administer'],

    name:'',
    member_id:'',

  }),
  methods:{

    parentsMethod: function(message){
      console.log(message)
      this.name = message.name
      this.member_id = message.member_id
      this.Identity = message.type
      this.IsLogin=true
    }
  }
};
</script>
