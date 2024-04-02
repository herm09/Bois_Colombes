<script>
import ScrollToTop from './components/ScrollToTop.vue'
import DownloadFile from './components/Download.vue'

export default {
  name: "App",
  components: {
    ScrollToTop,
    DownloadFile
  },
  setup() {
    return{}
  }
};
</script>


<template>

  <header>
    <div class="menu">
      <router-link to="/accueil"><img src="@/assets/logo_ccas.png" alt="Logo du CCAS"></router-link>
      
      <nav>
        <router-link to="/accueil"><a>Accueil</a></router-link>
        <router-link to="/signaler"><a>Se Signaler</a></router-link>
        <router-link to="/sorties"><a>Sorties</a></router-link>
        <router-link to="/residences"><a>Résidences</a></router-link>
        <router-link to="/aide"><a>Se faire aider</a></router-link>
      </nav>

      <div class="links">
        <img src="@/assets/zoom.png" alt="Agrandir" class="zoom">
      </div>
      
    </div>
  </header>

  <section>
    <DownloadFile />
  </section>

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
  margin-left: 70px;
  font-family: 'Raleway';

  img { /* LOGO */ 
    width: 50%;
  }

  nav {
    display: flex;
    gap: 70px;
    align-items: center;
    width: 61%;

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 1.7rem;
      color: black;
      // padding-bottom:2px; /*the space for the gradient*/
      background: linear-gradient(rgb(0, 0, 0),rgb(0, 0, 0)) center bottom; /*OR bottom right OR bottom left*/
      background-size: 0% 3px;
      background-repeat:no-repeat;
      transition: all 0.45s;

      &:hover {
        background-size: 100% 3px;
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