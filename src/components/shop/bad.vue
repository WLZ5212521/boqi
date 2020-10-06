<template>
  <body>
    <div class="alluser" v-for="(all,key) in alls" v-show="key<num">
      <div class="allimg">
        <div class="allimgs" :style="{background:all[0],borderRadius:'50% 50%',backgroundSize:'cover'}"></div>
        <div class="allusername">
          {{all[1]}}
          <el-rate v-model="all[2]" disabled text-color="#ff9900"></el-rate>
          <div class="alltime">{{all[3]}}</div>
        </div>
      </div>
      <div class="allcontent">
        <div class="allcontents">{{all[4]}}</div>
        <img :src="all[5]" alt="" width="10%">
      </div>
    </div>
    <div class="showMore" @click="showMore">{{txt}}</div>
  </body>
</template>
<script src="https://unpkg.com/vue"></script>
<script>
  import json from '../../../static/good.js'
  export default{
    data(){
      return{
        alls:[
          [json.data.allbgimg,json.data.alusername,json.data.allvalue,json.data.alltime,json.data.allcontent,json.data.allimg],
        ],
         json:json,
         isShow: true,
         num: 6,
         txt:"显示全部"
      }
    },
  methods: {
          showMore(){

          this.isShow = !this.isShow;

          this.num = this.isShow? 6: this.alls.length;
          this.txt = this.isShow?  '显示全部':'收起'
        }

  },
  }
</script>

<style lang="less">
  body{
    .alluser{
      font-size:3.3vw;
      color:#676767;
      padding:1vw 2vw;
      border-bottom:1px solid gray;
      .allimg{
        width:100%;
        height:10vw;
        .allimgs{
          width:10%;
          height:100%;
          float:left;
          margin-right:2vw;
        }
        .el-rate{
          display:inline;
          .el-rate__icon{
            margin:0;
          }
        }
      }
      .allcontent{
        width:76%;
        margin:3vw auto;
      }
    }
    .showMore{
      text-align: center;
      height:10vw;
      line-height: 10vw;
    }
    margin-bottom:20vw;
  }
</style>
