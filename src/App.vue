<script>
import ScrollToTop from './components/ScrollToTop.vue'

export default {
  name: "App",
  components: {
    ScrollToTop
  },
  setup() {
    return{}
  }
};
</script>


<template>

  <header>
    <div class="menu">
      <router-link to="/accueil"><img src="@/assets/logo_ccas.png" alt="Logo CCAS" class="logo"></router-link>
      
      <nav>
        <router-link to="/accueil">Accueil</router-link>
        <router-link to="/signaler">Se Signaler</router-link>
        <router-link to="/sorties">Sorties</router-link>
        <router-link to="/residences">Résidences</router-link>
        <router-link to="/aide">Se faire aider</router-link>
      </nav>

      <div class="links">
        <img src="@/assets/zoom.png" alt="Agrandir" class="zoom">
      </div>
    </div>
  </header>

  <section class="app-container" id="scroll-to-top">
    <ScrollToTop />
  </section>
  
  <router-view/>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 70px;
  font-family: 'Raleway';


  img {
    width: 50%; 
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    a {
      text-decoration: none;
      font-weight: bolder;
      font-size: 25px;
      color: black;
      list-style: none;
      display: inline-block;
      padding-bottom:2px; /*the space for the gradient*/
      background: linear-gradient(rgb(0, 0, 0),rgb(0, 0, 0)) center bottom; /*OR bottom right OR bottom left*/
      background-size: 0% 2px; /*width:0% height:2px*/
      background-repeat:no-repeat; /* Don't repeat !!*/
      transition: all 0.45s;

      &:hover {
        background-size: 100% 2px; /*width:100% height:2px*/
      }
    }
  }
}

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