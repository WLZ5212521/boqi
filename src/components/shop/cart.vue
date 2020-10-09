<template>
  <body>

  <div class="product">

    <h4>商品信息</h4>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(shop,index) in shoplist' :key='index'>
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div class="btn btn-info" @click='addToCart(shop)'>购物车</div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  <div>
          <div class="item-wrapper">
              <div class='item'>总数：
                  <strong>{{totalNum}}</strong>
              </div>
              <div class='item'>总价：
                  <strong>{{totalPrice}}</strong>
              </div>
              <div class="item btn btn-danger">清空购物车</div>
          </div>
      </div>
  </body>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'product',
  data() {
    return {
      totalNum: 13,
            totalPrice: 342,
    };
  },
  computed: {
       ...mapGetters(['shoplist'])
     },
     methods: {
      ...mapActions(['addToCart'])
     },
};
</script>

<style scoped>
.table-shop > th {
  text-align: center;
}

.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}
</style>
