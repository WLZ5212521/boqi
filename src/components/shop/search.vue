<template>
  <body>
  	<nav>
      <div class="close" @click="close"></div>
      <div class="search">
        <from>
          <select name="" id="" value="全部" style="outline:none;border:0px;">
            <option value="" checked>全部</option>
            <option value="狗狗">狗狗</option>
            <option value="猫咪">猫咪</option>
          </select><input type="search" :placeholder="eg" style="outline:none;border:0px;" v-model.lazy="input" @keydown.enter="fun" class="ipt">
        </from>
      </div>
        <div class="hunt" @click="fun"></div>
    </nav>
    <div class="btn">
      <div class="history" :class='{"change":gray}' @click="history">搜索历史</div>
      <div class="other" :class='{"change":chang}' @click="other">大家都在搜</div>
    </div>
    <br>
    <br>
    <br>
    <div class="body">
      <div class="boxtwo">
        <div class="box">

        </div>
        <br>
        <div class="clean" @click="clean">
          清除搜索历史
        </div>
        <p>不知道搜索什么？点击查看完整分类</p>
      </div>
    </div>
  </body>
</template>
<script>
  export default{
    data(){
      return{
        eg:"海洋之心",
        gray:true,
        chang:false,
        input:""
      }
    },
    methods:{
      fun:function(){
        var box=document.querySelector(".box")
        box.innerHTML+=`<div class='text'>${this.input}</div>`
        this.$router.push('/shop/wares');
      },
      clean(){
        var box=document.querySelector(".box")
        var ipt=document.querySelector(".ipt")
        box.innerHTML=""
        ipt.value=""
      },
      other(){
        this.gray=false;
        this.chang=true;
        // var body=document.querySelector(".body")
        // var boxtwo=document.querySelector(".boxtwo")
        // body.replaceChild(,boxtwo)
      },
      history(){
        this.gray=true;
        this.chang=false
      },
      close(){
        this.$router.push('/shop/shopindex');
      }
    }
  }
</script>
<style lang="less">
  body{
    width:96%;
    margin:.4rem auto;
    nav{
      width:100%;
      height:3rem;
      border-bottom:2px solid #e2e2e2;
      position:relative;
      .close{
        width:5%;
        height:40%;
        margin:.6rem .2rem;
        float:left;
        background: url("/static/image/close1.svg") no-repeat center;
      }
      select{
        background-color: #dedede;
        padding:.5rem 0 .5rem .5rem;
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari 和 Chrome */
      }
      [type=search]{
        background-color: #dedede;
        width:84%;
        padding:.6rem 3rem .6rem 0;
      }
      .hunt{
        width:8%;
        height:50%;
        position:absolute;
        top:.3rem;
        right:.3rem;
        background: url("/static/image/search.png") no-repeat center;
        background-size:contain;
      }
    }
    .btn{
      margin:.8rem;
      .history,.other{
        width:49%;
        height:2rem;
        border:1px solid #989898;
        float:left;
        text-align: center;
        line-height: 2rem;
        color:#989898;
      }
      .history{
        border-radius:5px 0 0 5px;

      }
      .other{
        border-radius:0 5px 5px 0;
      }
      .change{
        background-color: #989898;
        color:#fff;
      }
      .chang{
        background-color: #989898;
        color:#fff;
      }
    }
    .text{
      color:gray;
      padding:1rem 0;
      border-bottom:1px solid gray;
    }
    .clean{
      text-align: center;
      width:30%;
      margin:auto;
      height:2.5rem;
      line-height: 2.5rem;
      border:1px solid black;
      border-radius:8px;
    }
    p{
      color:#d51410;
      text-align: center;
    }

  }
</style>
