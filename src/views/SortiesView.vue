<script>
// @ is an alias to /src
export default {
  name: 'SortiesView',
}
</script>


<template>
    <hr class="hrHead">

    <section class="sorties">

      <div class="SortiesTitle">
        <div class="TitleSorties">
          <img src="@/assets/trait_texte.png" alt="">
          <h1>Les sorties du CCAS</h1>
        </div>
        <hr class="hrSorties">
      </div>
      

      <div class="DivCatalogue">
        <div class="catalogueTitle">
          <img src="@/assets/trait_texte.png" alt="">
          <h2>Le catalogue semestriel</h2>
        </div>

        <div class="catalogueTxt">
          <p>Tout au long de l'année, des activités 
              socio-culturelles et des sorties en demi-journées 
              ou journées complètes sont proposées. Elles 
              sont répertoriées dans un livret semestriel, 
              adressé par courrier aux personnes inscrites, 
              téléchargeable ci-dessous ou disponible à l'accueil 
              du CCAS.
              <br><br>
              Les sorties payantes sont en partie subventionnées 
              par le CCAS; les bénéficiaires du Minimum de 
              Ressources Communales sont invités une fois par 
              an à profiter gratuitement d'une sortie estivale.
              <br><br>
              Les inscriptions aux sorties se font précisément 
              aux dates indiquées dans le catalogue, sur le site 
              de la ville (suivez l'info sur l'agenda et sur 
              les actualités) et dans le dépliant «Sortir» 
              mensuel. Les conditions de réservations, de 
              participation, de remboursement… y sont également 
              précisées.
          </p>
          <img src="@/assets/personnes_sorties.png" alt="Personnes heureuses">
        </div>
      </div>

      <div class="DivAccess">
        <div class="accessTitle">
          <img src="@/assets/trait_texte.png" alt="">
          <h2>Les sorties accessibles aux personnes <br> à mobilité réduite</h2>
        </div>

        <div class="accessTxt">
          <p>Elles sont signalées par le pictogramme 
              ci-contre. <br>
              Attention cependant les personnes en 
              fauteuil devront impérativement être accompagnées 
              et le signaler lors de l'inscription.
          </p>
        </div>
      </div>

      <img src="@/assets/img_sorties.png" alt="Image de montagnes" class="ImgMontagne">

    </section>
    
    <footer id="Footer">
      <div class="footer">
        <!-- <img src="img/balancoire.png" alt="" class="balancoire"> -->
        <section class="footer1">
          <div class="coordonnees">
            <h2>Coordonnées</h2>
            <ul>
              <li><a>Direction de l'Action Sociale</a><br>
                  Espace Duflos</li>
              <li>79, rue Charles-Duflos <br> 
                  92270 Bois-Colombes</li>
              <li>01 41 19 83 05</li>
              <li>ccas@bois-colombes.com</li>
            </ul>
          </div>

          <div class="autre">
            <h2>Les autres sites de la ville</h2>
            <ul>
                <li>Le mémorial numérique</li>
                <li>L'espace famille (bois-co déclic)</li>
                <li>Boiscoboutique.fr</li>
                <li>Le portail médiatique</li>
                <li>Entre Bois-colombiens</li>
            </ul>
          </div>

          <div class="suivre">
            <h2>Suivez-nous autrement</h2>
            <ul>
              <li>Sur bois-co mobile <br>
                  La ville dans votre poche</li>
              <li>Newsletter <br>
                Recevez les informations par mail</li>
              <li>Service SMS <br>
                  Recevez les alertes sur votre smartphone</li>
              <li>Sur les réseaux</li>
            </ul>
          </div>
        </section>
          
        <section class="footer2">
          <div>
            <ul>
              <li><a>Politique de confidentialité de la ville</a></li>
              <li><a>Informations légales et éditoriales</a></li>
              <li><a>Accès webmail</a></li>
            </ul>
          </div>
        </section>

        <section class="scroll">
        </section>
      </div>

      <ScrollToTop />

    </footer>
</template>


<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

/* --------------- HEADER --------------- */

.hrHead {
  border-bottom: 3px solid #89BAAD;
}

/* --------------- BODY --------------- */

.sorties {
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 210vh;

  .SortiesTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding-bottom: 25px;

    .TitleSorties {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      
      img {
      height: 55px;
      }

      h1 {
        text-align: center;
        margin-top: 2rem;
        font-family: 'Raleway';
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 25px;
        font-weight: 700
      }
    }

    .hrSorties {
      border: 2px solid #070707;
      margin-left: auto;
      margin-right: auto;
      width: 84%;
    }
  }

  .DivCatalogue {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 210px;

    .catalogueTitle { /* TITRE Catalogue semestriel */
      display: flex;

      img {
        height: 55px;
      }

      h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        letter-spacing: 0.4px;
      }
    }

    .catalogueTxt {
      display: flex;
      margin-top: 20px;
      width: 100%;
      height: 400px;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;

      p {
        display: flex;
        text-align: start;
        font-size: 1.2rem;
        width: 600px;
        line-height: 1.2;
      }

      img {
        height: 500px;
        float: right;
        margin-left: 320px;
        margin-top: -50px;
      }
    }
  }

  .DivAccess {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-left: 210px;
    margin-bottom: 50px;

    .accessTitle {
      display: flex;

      img {
        height: 55px;
        margin-top: 16px;
      }

      h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        text-align: start;
        margin-left: 10px;
        margin-top: 20px;
      }
    }

    .accessTxt {
      display: flex;
      margin-top: 20px;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
      gap: 80px;

      p {
        display: flex;
        text-align: start;
        font-size: 1.2rem;
        width: 555px;
        font-weight: 400;
        line-height: 1.2;
      }
    }
  }

  .ImgMontagne {
    display: flex;
    height: 600px;
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
}

/* --------------- FOOTER --------------- */

.footer {
    display: flex;
    flex-direction: column;

    .footer1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 45vh;
        background-color: #1F266B;
        color: #FFFFFF;
        font-size: 15px;

        .coordonnees {
        grid-column: 1 / 2;
        align-self: flex-start;
        justify-self: center;
        margin-top: 20px;
    
        h2 {
            font-size: 1.6rem;
            font-family: 'Raleway';
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 15px;
            text-decoration: underline;
            text-decoration-color: #FBBA00;
            text-decoration-thickness: 2px;
            text-underline-offset: 5px;
            margin-bottom: 20px;
        }
    
        ul {
            display: flex;
            flex-direction: column;
            list-style: inside;
            font-family: 'Rubik', sans-serif;
            font-size: 1.2rem;
            gap: 30px;
            align-items: start;
    
            li {
            gap: 20px;
            }
    
            li::marker {
            color: rgb(251, 251, 251);
            }
        }
        }
    
        .autre {
        grid-column: 2 / 3;
        align-self: flex-start;
        justify-self: center;
        margin-top: 20px;
    
        h2 {
            font-size: 1.6rem;
            font-family: 'Raleway';
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 15px;
            text-decoration: underline;
            text-decoration-color: #FBBA00;
            text-decoration-thickness: 2px;
            text-underline-offset: 5px;
            margin-bottom: 20px;
        }
    
        ul {
            display: flex;
            flex-direction: column;
            list-style: inside;
            font-family: 'Rubik', sans-serif;
            font-size: 1.2rem;
            gap: 30px;
            align-items: start;
    
            li::marker {
            color: rgb(251, 251, 251);
            }
        }
        }
    
        .suivre {
        grid-column: 3 / 4;
        align-self: flex-start;
        justify-self: center;
        margin-top: 20px;
    
        h2 {
            font-size: 1.6rem;
            font-family: 'Raleway';
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 15px;
            text-decoration: underline;
            text-decoration-color: #FBBA00;
            text-decoration-thickness: 2px;
            text-underline-offset: 5px;
            margin-bottom: 20px;
        }
    
        ul {
            display: flex;
            flex-direction: column;
            list-style: inside;
            font-family: 'Rubik', sans-serif;
            font-size: 1.2rem;
            gap: 30px;
            align-items: start;
    
            li::marker {
            color: rgb(251, 251, 251);
            }
        }
        }
    }

    .footer2 {
        height: 10vh;
        width: 100%;
        background-color: #89BAAD;
        font-size: 18px;
        font-family: 'Rubik', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        color: #1F266B;

        div {
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
        height: 100%;

        ul {
            display: flex;
            margin-left: 100px;
            margin-right: 100px;
            gap: 160px;
    
            li {
            display: flex;
            list-style: none;
            }
        }
        }
    }

    .scroll {
        height: 7.2vh;
    }
}

</style>