<script>
export default {
  name: 'ScrollToTop',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>


<template>
  <div id="scroll-to-top">
    <button @click="scrollToTop">
      <img src="@/assets/top.png" alt="Scroll to Top">
    </button>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#scroll-to-top {
  position: fixed;
  width: 30px;
  height: 25px;
  bottom: 31px;
  right: 150px;

  button {
    background-color: #FBBA00;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    width: 50px;
    height: 230%;
      
    img {
      width: 40px;
    }
  }
}
</style>