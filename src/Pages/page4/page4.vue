<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3 mycontent">
      <h1 class="page-title">专业技能</h1>
      <div class="my-container" v-for="(item, index) in skills" :key="index">
        <div class="col-xs-4 skill-content">
          <p class="text-muted skills">{{ item.name }}</p>
        </div>
        <div class="col-xs-8">
          <div class="progress progress-content">
            <div
              :class="[
                'progress-bar',
                'progress-bar-info',
                'pro-default'
              ]"
              :style="{width: item.pro}"
            >
              <p class="progress-text">{{ item.pro }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page4",
  data() {
    return {
      skills: [
        {
          name: "HTML",
          pro: "85%",
        },
        {
          name: "JavaScript",
          pro: "75%",
        },
        {
          name: "css/css3",
          pro: "80%",
        },
        {
          name: "Jquery",
          pro: "70%",
        },
        {
          name: "Bootstrap",
          pro: "75%",
        },
        {
          name: "Vue.js",
          pro: "70%",
        },
        {
          name: "Unity/C#",
          pro: "67%",
        },
        {
          name: "PHP",
          pro: "32%",
        },
        {
          name: "Mysql",
          pro: "30%",
        },
      ],
    };
  },
  mounted: function () {
    $.each($(".progress-text"), function (i, value) {
      let tempNum = parseInt(value.innerText);
      if (tempNum > 75) {
        $(".progress-text").eq(i).addClass("progress-bar-info").text("擅长");
      } else if (tempNum > 50) {
        $(".progress-text").eq(i).addClass("progress-bar-success").text("熟悉");
      } else {
        $(".progress-text").eq(i).addClass("progress-bar-warning").text("了解");
      }
    });
  },
};
</script>

<style>
.my-container {
  width: 95%;
}
.skills {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
}
.progress-text {
  font-size: 1.5rem;
}
.progress-content {
  box-shadow: 0 0 4px 1px #d4d4d4;
}
.pro-default {
  transition: 2.3s ease-out;
  width: 0;
}
@media screen and (max-height: 990px) {
  .skill-content {
    margin: -5px;
  }
}
</style>