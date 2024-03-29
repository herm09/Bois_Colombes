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
      <a href="index.html"><img src="@/assets/logo_ccas.png" alt="Logo CCAS" class="logo"></a>
      
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

  <section class="app-container" id="scroll_top">
    <ScrollToTop />
  </section>
  
  <router-view/>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: inherit;
}

.app-container {
  max-width: 82rem;
  margin: auto;
  padding: 3rem 1rem;
}

</style>