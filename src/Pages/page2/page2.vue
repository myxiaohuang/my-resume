<template>
  <div class="container">
    <div class="col-md-4 col-md-offset-4 mycontent">
      <h1 class="page-title">教育背景</h1>
      <div class="teach-block my-ani">
        <p class="teach-time text-center">2021.01 - 2021.06</p>
        <h2 class="text-center">某某某大学</h2>
        <h3 class="text-center">某学院 <b class="text-info">软件工程专业</b></h3>
      </div>
      <div class="learn-class my-ani">
        <h1 class="text-center">主修课程</h1>
        <h4>web编程、移动互联网应用技术、面向对象程序设计<br>数据结构、数据库基础、算法分析与设计...</h4>
      </div>
      <div class="get-reward my-ani">
        <h1 class="text-center">荣获奖励</h1>
        <h4>学院一等奖学金 二等奖学金</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  // computed:{
  //   data(){
  //     if(this.$store.state.data.page2){
  //       return this.$store.state.data.page2;
  //     }else{
  //       return {};
  //     }
  //   }
  // }
}
</script>

<style>
h1, h2, h3, h4, p {
  font-family: "楷体", "宋体", "微软雅黑";
  white-space: nowrap;
}
@keyframes title-ani{
  0% {transform: scale(1);}
  50% {transform: scale(1.2);}
  100% {transform: scale(1);}
}
.text-center {
  text-align: center;
  margin: 2px;
}
.page-title{
  transition-delay: .2s;
  transition: 1s;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 300px;
}
.active .page-title {
  padding-bottom: 40px;
  animation: title-ani ease 1.3s;
}
.teach-time {
  font-size: 15px;
}
.learn-class {
  margin: 30px 0;;
}
.my-ani {
  opacity: 0;
  transition: 1.3s;
  margin-left: 150px;
}
.active .teach-block {
  transition-delay: .5s;
  opacity: 1;
  margin: 0;
}
.active .learn-class {
  transition-delay: 1s;
  opacity: 1;
  margin: 30px 0;
}
.active .get-reward {
  transition-delay: 1.5s;
  opacity: 1;
  margin: 0;
}
</style>