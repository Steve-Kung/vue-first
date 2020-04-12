<template>
  <div>
    <h1>个人信息</h1>
    <!--{{id}}-->
    {{$route.params.id}}
  </div>
</template>

<script>
    export default {
//      props: ['id'],
        name: "UserProfile",
//      钩子函数 进入路由之前 相当于拦截器
      beforeRouteEnter:(to, from, next)=>{
        console.log("before");
//        加载数据
        next(vm =>{
          vm.getData();
        });
      },
      beforeRouteLeave:(to, from, next)=>{
        console.log("after");
        next();
      },
      methods: {
          getData: function () {
            this.axios({
              method:'get',
              url:'http://localhost:8080/static/mock/data.json'
            }).then(function (response) {
              console.log(response);
            });
          }
      }
    }
</script>

<style scoped>

</style>
