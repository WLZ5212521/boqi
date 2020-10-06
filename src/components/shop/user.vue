<template>
  <body>
  	<nav>
      <div class="back" @click="goback"></div>
      <div class="text">波奇用户登录</div>
    </nav>
    <br>
    <br>
    <br>
    <div id="border_div">
              <input type="text" v-model="username" @blur="checkName" @keyup.enter="$event.target.blur" placeholder="请输入用户名称"><br>
              <input type="password" v-model="userword" @blur="checkWord" @keyup.enter="$event.target.blur" placeholder="请输入用户密码"><br>
          <div class="showYZM_div">
              <input type="text" v-model="check_yzm" @blur="checkYZM" @keyup.enter="$event.target.blur" placeholder="请输入验证码">
            <div class="yzm_picture_div" @click="changeYZM">
              <span v-model="yzm_code">{{yzm_code}}</span>
            </div>
          </div>
          <div class="sign">
              <button @click="login">注册并登录</button>
            <div class="red" style="color: red">
              <p v-show="showErrorMssage">{{ErrorMessage}}</p>
            </div>
            <!-- <router-link to="/shop/forget"><div class="forget">忘记密码</div></router-link> -->
          </div>
    </div>
    <br>
    <br>
    <br>
    <div class="line">
      <span>其他方式登录</span>
    </div>
    <br>
    <br>
    <div class="box">
      <a href="https://api.weibo.com/oauth2/authorize?client_id=4030222662&redirect_uri=http%3A%2F%2Fs.boqii.com%2FSinaWeibo%2Fapi%2Fcallback.php?utm_source=null&response_type=code###"><div class="weibo"></div></a>
      <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Dfff5b8969d703068a5c63141408b7cde"><div class="zhifubao"></div></a>
    </div>
  </body>
</template>

<script>
  export default{
    name: "login",
    data(){
      return{
        username:'',
          userword:'',
          yzm_code:'axaz',
          check_yzm:'',
          check_yzm_status:false,
          yzm_code_length:4,
          ErrorMessage:'',
          showErrorMssage:false,
          user:{name:'boqi',password:'123456'},
      }
    },
    updated:{
          init(){
            console.log("初始化验证码---axaz")
          }
          },
    methods:{
      goback(){
        this.$router.push("/shop/shopindex")
      },
      changeYZM:function(){
                let yzm_code = '';//点击更换时-初始验证码
                let yzm_code_length = this.yzm_code_length;//验证码长度获取
                let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//候选字符
                //通过循环获取yzm_code_length位codeChars中的字符下标，并通过下标获取指定字符，最后拼接
                for (let i = 0; i < yzm_code_length; i++ ) {
                  let charNum = Math.floor(Math.random() * 62);//获取随机验证码下标
                  yzm_code += codeChars[charNum];//根据下标获取指定字符并拼接
                }
                console.log("修改后验证码---"+yzm_code);
                return this.yzm_code = yzm_code;
              },
              checkName:function () {
                if(this.username == ''){
                  this.ErrorMessage = '用户名不能为空';
                  this.showErrorMssage = true;
                  return;
                }else if(this.username != this.user.name){
                  this.ErrorMessage = '用户名输入有误';
                  this.showErrorMssage = true;
                  return;
                }else {
                  this.ErrorMessage = '';
                  this.showErrorMssage = false;
                }
              },
              checkWord:function () {
                if(this.userword == ''){
                  this.ErrorMessage = '用户密码不能为空';
                  this.showErrorMssage = true;
                  return;
                }else if(this.userword != this.user.password){
                  this.ErrorMessage = '用户密码输入有误';
                  this.showErrorMssage = true;
                  return;
                }else {
                  this.ErrorMessage = '';
                  this.showErrorMssage = false;
                }
              },
              checkYZM:function () {
                if(this.check_yzm == ''){
                  this.ErrorMessage = '验证码不能为空';
                  this.showErrorMssage = true;
                  return;
                }else if(this.check_yzm.toUpperCase() != this.yzm_code.toUpperCase()){
                  console.log("待校验验证码---"+this.check_yzm.toUpperCase())
                  console.log("正确验证码---"+this.yzm_code.toUpperCase())
                  this.ErrorMessage = '验证码输入有误';
                  this.showErrorMssage = true;
                  return;
                }else {
                  this.ErrorMessage = '';
                  this.showErrorMssage = false;
                  this.check_yzm_status = true;
                }
              },
              login:function () {
                if(this.username == this.user.name && this.userword == this.user.password){
                  if(this.check_yzm_status){
                    console.log("用户登录---"+this.username+"---"+this.userword);
                    this.ErrorMessage = '登录成功，欢迎您';
                    this.showErrorMssage = true;
                    this.$store.commit('increment')
                    this.$router.push("/shop/shopindex")
                  }else {
                    this.ErrorMessage = '请再次校验验证码';
                    this.showErrorMssage = true;
                    return;
                  }
                }
              },
              reset:function () {
                this.username = '';
                this.userword = '';
                this.yzm_code = '';
                this.check_yzm = '';
                this.check_yzm_status = false;
                this.ErrorMessage = '请重新输入用户信息';
                this.showErrorMssage = true;
                this.check_yzm_status = false;
              }
    }
  }
</script>

<style lang="less">
  body{
    width:96%;
    margin:auto;
    nav{
      width:100%;
      height:10vw;
      border-bottom:1px solid gray;
      .back{
        width:10%;
        height:100%;
        background: url("/static/image/back.svg") no-repeat center;
        background-size: 50%;
        float:left;
      }
      .text{
        width:60%;
        height:10vw;
        margin:auto;
        text-align: center;
        line-height: 10vw;
        font-size: 4.5vw;
      }
    }
    #border_div{
      width:100%;
      input{
        width:70%;
        height:5vw;
        border:1px solid transparent;
        padding:.5rem;
      }
      .yzm_picture_div{
        margin:.5rem;
        color:#fff;
        background-color: #b4b4b4;
        padding:.2rem;
        float:right;
      }
      button{
        width:100%;
        height:12vw;
        margin:.5rem 0;
        text-align: center;
        line-height: 12vw;
        font-size: 5vw;
        color:#fff;
        background-color: #fc4a00;
        border-radius:10px;
      }
      .red{
        width:50%;
        height:4vw;
        margin:auto;
        text-align: center;
      }
      .forget{
        float:right;
        font-size:13px;
        color:#4c4c4c;
      }
    }
    .line{
      position:relative;
      border-top:1px solid #dbdbdb;
      text-align:center;
      span{
        display: inline-block;
        position: absolute;
        top: -9pt;
        left: 50%;
        font-size: 1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 118px;
        margin-left: -59px;
        background-color: #fff;
        color: #888;
      }
    }
    .box{
      width:50%;
      height:15vw;
      margin:auto;
      .weibo{
        width:40%;
        height:100%;
        background: url("/static/image/weibo.svg") no-repeat center;
        float:left;
      }
      .zhifubao{
        width:40%;
        height:100%;
        background: url("/static/image/zhifubao.svg") no-repeat center;
        float:right;
      }
    }
  }
</style>
