<template>
  <div class="container">
    <div class="col-md-4 col-md-offset-4 mycontent">
      <div class="img-circle img-content">
        <img src="../../assets/huang.jpg" alt="头像">
      </div>
      <h2 class="text-muted my-nane">Huang</h2>
      <h3 class="my-work">前端工程师<a href="" style="color: #666;"><em>-自由职业</em></a></h3>
        <ul class="list-inline my-icon">
          <li><a href="#" style="color: #666;" target="_blank"><span class="iconfont">&#xe65d;</span></a></li>
          <li><a href="" style="color: #666;" target="_blank"><span class="iconfont">&#xe600;</span></a></li>
          <li><a href="#" style="color: #666;"><span class="iconfont">&#xe62e;</span></a></li>
          <li data-toggle="tooltip" data-placement="top"><a href="#" style="color: #666;" target="_blank"><span class="iconfont">&#xe6af;</span></a></li>
        </ul>
        <p class="one-say">只要目标向前，你可以到任何的地方</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page1',
  // computed:{
  //   data(){
  //     if(this.$store.state.data.page1){
  //       return this.$store.state.data.page1;
  //     }else{
  //       return {};
  //     }
  //   }
  // }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 1078238 */
  src: url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.eot');
  src: url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.woff') format('woff'),
  url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1078238_ba5f0tzj7er.svg#iconfont') format('svg');
}
.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.mycontent {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img-content {
  width:210px;
  height:0;
  padding-bottom: 210px;
  margin-bottom: 150px;
  border: 1px solid #aaa;
  overflow: hidden;
  transition: 1.3s;
}
.active .img-content {
  margin-bottom: 30px;
}
.img-content:hover {
  transform-origin: 50% 50%;
  animation: touPicAni ease-in-out 1.5s;
}
.img-content img {
  width: 101%;
}
.my-nane {
  line-height: 1rem;;
}
.my-work {
  font-weight: bold;
  line-height: .1rem;
}
.my-work em {
  font-size: 1.8rem;
  font-weight: 300;
}
.my-work a:hover {
  color: inherit;
}
.my-icon span {
  font-size: 2.2rem;
  line-height: 4rem;
  padding: 20px;
  transition-delay: 1.3s;
  transition: 1.3s;
}
.active .my-icon span {
  font-size: 2rem;
  padding: 1px;
}
.one-say {
  font-size: 2rem;
  margin-top: 10%;
  letter-spacing: .3em;
  text-shadow: 3px 4px 2px #AAAAAA;
  white-space: nowrap;
}
.popover-content img {
  width:100%;
}
@keyframes touPicAni{
  0%{transform: rotateZ(0);}
  25%{transform: rotateZ(40deg);}
  75%{transform: rotateZ(-40deg);}
  100%{transform: rotateZ(0);}
}
</style>