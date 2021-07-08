<template>
  <div class="container">
    <div class="col-md-4 col-md-offset-4 mycontent">
      <h1 class="page-title">工作经历</h1>
      <div class="teach-block my-ani" v-for="(item,index) in data" :key="index">
        <span class="leader-icon"></span>
        <h2 class="work-title">{{item.name}} <span class="text-muted">{{item.zhiwei}}</span></h2>
        <p class="teach-time ">{{item.time}}</p>
        <ul class="work-detail">
          <li>{{item.work1}}</li>
          <li>{{item.work2}}</li>
          <li>{{item.work3}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data() {
    return {
      data:[
        {
          name:"某某公司",
          zhiwei:"开发工程师",
          time:"2021.01 - 2021.06",
          work1:"负责公司产品的前端页面制作",
          work2:"优化代码兼容性",
          work3:"前端交互和网页美化"
        },
        {
          name:"某某公司",
          zhiwei:"开发工程师",
          time:"2021.01 - 2021.06",
          work1:"负责公司产品的前端页面制作",
          work2:"优化代码兼容性",
          work3:"前端交互和网页美化"
        },
        {
          name:"某某公司",
          zhiwei:"开发工程师",
          time:"2021.01 - 2021.06",
          work1:"负责公司产品的前端页面制作",
          work2:"优化代码兼容性",
          work3:"前端交互和网页美化"
        }
      ]
    }
  },
  // computed:{
  //   data(){
  //     if(this.$store.state.data.page3){
  //       return this.$store.state.data.page3;
  //     }else{
  //       return [];
  //     }
  //   }
  // }
}
</script>

<style scoped>
h1, h2, h3, p {
  margin: 2px;
}
.leader-icon {
  width: 35px;
  height: 35px;
  border: 5px solid #6CA6CD;
  border-radius: 50%;
  position: absolute;
  left: -60px;
  top: 0px;
}
.leader-icon::before {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #333333;
  position: absolute;
  top: 9px;
  left: 9px;
}
.leader-icon::after {
  content: '';
  width: 5px;
  height: 330%;
  background: #333333;
  position: absolute;
  top: 40px;
  left: 10px;
}
.leader2::after {
  height: 350%;
}
.my-ani {
  position: relative;
  left: 60px;
  width: 100%;
  margin-top: 80px;
  margin-left: 0;
}
.active .my-ani {
  margin: 3px;
}
.work-title span {
  font-size: 20px;
}
.work-detail {
  font-size: 15px;
  margin-left: 30px;
}
</style>