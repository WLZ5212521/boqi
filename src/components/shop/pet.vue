<template>
  <body>
  	<el-tabs :tab-position="tabPosition">
  	    <el-tab-pane label="兔子">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
  	    <el-tab-pane label="仓鼠">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
  	    <el-tab-pane label="龙猫">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
  	    <el-tab-pane label="天竺鼠">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="乌龟">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="蜥蜴">
          <div class="bigbox">
            <div class="goods">
              <div class="title">类目商品</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="good in goods">
                  <div class="Category">
                    <img :src="good[0]" alt="">
                    {{good[1]}}
                  </div>
                </li></router-link>
              </ul>
              <div class="title">品牌推荐</div>
              <ul>
                <router-link to="/shop/classification"><li v-for="brand in brands">
                  <div class="Category">
                    <img :src="brand[0]" alt="">
                    {{brand[1]}}
                  </div>
                </li></router-link>
              </ul>
            </div>
          </div>
        </el-tab-pane>
  	</el-tabs>
  </body>
</template>

<script>
  export default{
    data(){
      return{
        tabPosition: 'left',
        stretch:true,
        goods:[
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
        ],
        brands:[
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
          ['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],['/static/image/shopcat_pic1515038606_thumb.jpg',"进口粮"],
        ]
      }
    }
  }
</script>

<style lang="less">
  body{
    .el-tabs{
      position:fixed;
      top:19%;
      z-index:9;
      .bigbox{
        width:100%;
        height:130vw;
        box-sizing: border-box;
        overflow: auto;
        .goods{
          padding:2vw;
          width:100%;
          box-sizing: border-box;
          .title{
            width:100%;
            color:gray;
            padding:2vw;
            text-align: center;
            border-bottom:1px solid gray;
          }
          ul{
            padding:0;
            overflow: hidden;
            li{
              width:33%;
              list-style-type: none;
              float:left;
              .Category{
                width:100%;
                color:gray;
                text-align: center;
                img{
                  width:100%;
                }
              }
            }
          }
        }
      }

    }
  }
</style>
