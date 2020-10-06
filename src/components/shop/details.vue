/<template>
  <body>
  	<table frame=void>
  	  <tr>
  	    <td>{{json.data.table.number}}</td>
  	    <td>{{json.data.table.num}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.type}}</td>
  	    <td>{{json.data.table.typ}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.norms}}</td>
  	    <td>{{json.data.table.norm}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.object}}</td>
  	    <td>{{json.data.table.obj}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.formula}}</td>
  	    <td>{{json.data.table.formul}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.component}}</td>
  	    <td>{{json.data.table.components}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.quality}}</td>
  	    <td>{{json.data.table.quali}}</td>
  	  </tr>
  	  <tr>
  	    <td>{{json.data.table.weight}}</td>
  	    <td>{{json.data.table.weights}}</td>
  	  </tr>
  	</table>
    <img :src="json.data.img1" alt="" width="100%">
    <img :src="json.data.img2" alt="" width="100%">
    <img :src="json.data.img3" alt="" width="100%">
    <img :src="json.data.img4" alt="" width="100%">
    <img :src="json.data.img5" alt="" width="100%">
    <img :src="json.data.img6" alt="" width="100%">
    <img :src="json.data.img7" alt="" width="100%">
    <img :src="json.data.img8" alt="" width="100%">
    <img :src="json.data.img9" alt="" width="100%">
    <img :src="json.data.img10" alt="" width="100%">
    <img :src="json.data.img11" alt="" width="100%">
    <img :src="json.data.img12" alt="" width="100%">
    <img :src="json.data.img13" alt="" width="100%">
    <div class="Pricedescription">
      <ul>
      	<li>价格说明</li>
      </ul>
      <p>{{json.data.consult}}</p>
      <p>{{json.data.standard}}</p>
    </div>
  </body>
</template>

<script>
  import json from '../../../static/good.js'
  export default{
    data(){
      return{
         json:json,
      }
    }
  }
</script>

<style lang="less">
  body{
    table{
      clear:both;
      width:98%;
      margin:auto;
      margin:10vw 0 0 0;
      font-size:3.5vw;
      border-collapse:collapse;
    }
    td{
      padding:0 2vw;
      border:1px solid #767676;
    }
    tr{
      height:18vw;
    }
    td:first-child{
      color:gray;
      width:20vw;
    }
    img{
      display:block;
    }
    .Pricedescription{
      padding:0 4vw 26vw 4vw;
      font-size:3vw;
      color:gray;
      ul{
        padding:0;
        font-size:2.8vw;
        list-style-position: inside;
      }
    }
  }
</style>
