<template>
  <body>
  	<nav>
      <img src="/static/image/FuZ8xC1-4TysvPkUG4pVlU3tDVf9.jpg" width="100%">
    </nav>
    <ul>
    	<li v-for="img in imgs">
        <div class="img" :style="{background:img[0],backgroundSize:'contain',width:'100%',height:'80%'}"></div>
        <div class="text">{{img[2]}}</div>
        <p>{{img[1]}}</p>
        <br>
        <div class="price">
          {{img[4]}}
          <span>{{img[3]}}</span>
        </div>
        <div class="launch">发起砍价</div>
      </li>
    </ul>
  </body>
</template>

<script>
</script>

<style>
</style>
