<template>
    <v-container class="ma-0 pa-0" row style="height:100%;">
    <v-container class="ma-0 pa-0" style="width:15%; height:100%;">
        <v-tabs v-model="tab" background-color="primary" dark vertical style="height:100%;">
        <v-tab v-for="item in items" :key="item.tab">
            {{ item.tab }}
        </v-tab>
        </v-tabs>
    </v-container>
    <v-container class="ma-0 pa-0" style="width:85%">
    <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
            <v-container v-if="item.tab=='차량 속도 측정'" class="ma-0 pa-0">
                <Carspeed></Carspeed>
            </v-container>
            <v-container v-else-if="item.tab=='온,습도 측정'" class="ma-0 pa-0">
                <Temp></Temp>
            </v-container>
            <v-container v-else-if="item.tab=='전방 관측 기능'" class="ma-0 pa-0">
                <Camera></Camera>
            </v-container>
            <v-container v-else-if="item.tab=='각속도 측정'" class="ma-0 pa-0">
                <Angle></Angle>
            </v-container>
            <v-container v-else-if="item.tab=='명령어 기록'" class="ma-0 pa-0">
                <Userin></Userin>
            </v-container>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-container>
    </v-container>
</template>

<script>
import Angle from '../components/Angle';
import Camera from '../components/Camera';
import Temp from '../components/Temp';
import Userin from '../components/Userin';
import Carspeed from '../components/Carspeed';


export default {
  name: 'Administer',

  components: {
    Angle,
    Camera,
    Temp,
    Userin,
    Carspeed
  },

  data: () => ({
    tab: null,
    items: [
      { tab: '차량 속도 측정'},
      { tab: '온,습도 측정'},
      { tab: '전방 관측 기능'},
      { tab: '각속도 측정'},
      { tab: '명령어 기록'},
    ],
  }),
};
</script>
