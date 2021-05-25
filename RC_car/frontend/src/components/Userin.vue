<template>
  <div class="LookUpAttendence">
    <v-card class="ma-12" max-width="1000" outlined v-if="loading==false">
      <v-flex v-if="isClick==false">
        <v-data-table :headers="headers" :items="dataTable" :items-per-page="5" class="elevation-1" @click:row="handleClick">
        </v-data-table>
      </v-flex>
      <v-flex v-else-if="isClick==true&&detailLoading==false">
        <v-data-table :headers="detailHeaders" :items="dataDetailTable" :items-per-page="5" class="elevation-2">
        </v-data-table>
        <v-btn class="mt-6" @click="back">뒤로 가기</v-btn>
      </v-flex>
    </v-card>
    <v-card v-else-if="loading==true">
      로딩 중
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Temp',
  components: {
  },
  data () {
    return {
      temp:0,
      headers: [
        { text: '수행 명령어', value: 'code' },
        { text: '수행 시간', value: 'prof' },
        { text: '완료여부', value: 'room' },
        { text: '시각', value: 'time' },
      ],
      dataTable: [],
      loading:true,

      isClick:false,
      dataDetailTable:[],
      detailLoading:true,

      senseInfo:[],
    }
  },
  methods:{
    handleClick:function(value){
      this.isClick=true
    },
    back:function(){
      this.isClick=false
      this.detailLoading=true
      this.dataDetailTable=[]
    },
  },
  beforeCreate(){
    this.$http
      .get("/api/sense")
      .then(responseAttendance => {
        console.log("hi")
        var temp = 0
        for(var i=0; i<responseAttendance.data.length; i++){
              this.senseInfo[temp] = responseAttendance.data[i]
              temp = temp + 1
        }
        for(var i=0; i<this.senseInfo.length; i++){
            this.dataTable[i] = {
                code : this.senseInfo[i].cmd_string,
                prof : this.senseInfo[i].arg_string,
                room : this.senseInfo[i].is_finish,
                time : this.senseInfo[i].time
            }
        }
        this.loading=false
      })
      .catch(err => {
        alert("connection error occured2222");
      });
    this.loading=false
  },
  created(){
    
  },
  mounted(){
    
  }
}
</script>