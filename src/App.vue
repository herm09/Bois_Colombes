<script>
</script>


<template>

  <header>
    <div class="menu">
      <a href="index.html"><img src="img/logo_ccas.png" alt="Logo CCAS" class="logo"></a>
      
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/signaler">Se Signaler</router-link>
        <router-link to="/sorties">Sorties</router-link>
        <router-link to="/résidences">Résidences</router-link>
        <router-link to="/aide">Se faire aider</router-link>
      </nav>

      <div class="links">
        <img src="img/aa.png" alt="Agrandir" class="zoom">
        <img src="img/ecouter.png" alt="Audio description" class="listen">
      </div>
    </div>
  </header>
  

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

</style>