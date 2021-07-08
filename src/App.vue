<template>
  <div id="app">
    <div id="fullpage">
      <div class="section section1">
        <page1 />
      </div>
      <div class="section section2">
        <page2 />
      </div>
      <div class="section section3">
        <page3 />
      </div>
      <div class="section section4">
        <page4 />
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from "./Pages/page1/page1";
import Page2 from "./Pages/page2/page2";
import Page3 from "./Pages/page3/page3";
import Page4 from "./Pages/page4/page4";
export default {
  name: "App",
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
  },
  mounted() {
    new fullpage("#fullpage", {
      verticalCentered: false,
      anchros: ["page1", "page2", "page3", "page4"],
      navigation: true,
      navigationTooltips: ["首页", "教育背景", "工作经历", "专业技能"],
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  color: #666666;
}
a:active,
a:visited {
  color: #666666;
  text-decoration: none;
}
a:hover {
  color: #6ca6cd;
  text-decoration: none;
}
#fullpage {
  background: #f2f2f2;
}
.section {
  overflow: hidden;
}
</style>