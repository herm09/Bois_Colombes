<script>
// @ is an alias to /src
export default {
  name: 'SignalerView',
}
</script>


<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Les sorties</title>
  </head>
  <body>

    <section class="imgActus">
        <img src="@/assets/actus_bois_colombes.png" alt="Actualités de Bois-Colombes">
    </section>


    <section class="seSignaler">

      <div class="ActusTitle">
        <img src="@/assets/trait_texte.png" alt="">
        <h1>Se signaler au CCAS</h1>
      </div>

      <hr class="hrActus">

      <div class="inscription">
        <h2>Pourquoi s'inscrire au centre communal d'action social</h2>    
        <div class="inscriTxt">
          <ul>
            <li><a>Pour participer à des activités socio-culturelles et des sorties,</a></li>
            <li><a>pour bénéficier  des festivités de fin d'année,</a></li>
            <li><a>pour être contacté en cas de canicule,</a></li>
            <li><a>pour être accompagné en cas de difficultés ponctuelles,</a></li>
            <li><a>pour bénéficier de services d'aide au maintien à domicile,</a></li>
            <li><a>pour exposer des difficlutés particulières ...</a></li>
          </ul>
          <img src="@/assets/signaler_img.png" alt="Image centre">
        </div>
      </div>

      <div class="inscriTxt2">
        <h2>Comment s'inscrire au CCAS</h2>
        <div>
          <p>Toute personne de plus de 55 ans peut s'inscrire au CCAS, en présentant :</p>
          <ul>
            <li>le contrat d'accompagnement rempli et signé</li>
            <li>une pière d'identité</li>
            <li>un justificatif de domicile.</li>
          </ul>
        </div>
      </div>

      <section class="contrat">

        <div class="contratTitle">
          <h3>Prenez connaissance des termes du contrat d'accompagnement</h3>
          <p>Contrat individuel d'accompagnement</p>
          <button>Télécharger</button>
        </div>

        <div class="method1">
          <h2>Choisissez votre méthode préférée pour remplir le contrat :</h2>
          <div class="enLigne">
            <h4>Inscription tout en ligne</h4>
            <p>En remplissant le formulaire ci-dessous.
              N'oubliez pas de joindre les pièces demandées et signez le contrat.
              <br>
              En cliquant sur "Envoyer", votre demande nous parvient directement 
              par mail, et vous est addressée en copie (PDF en piède jointe).
              Le CCAS vous confirmera par retour de votre inscription.
            </p>
        </div>

        <div class="method2">
          <div class="mail">
            <h4>Incription par mail</h4>
            <p>
              Vous avez téléchargé le contrat individuel d'accompagnement 
              pour le lire ? 
              Et bien, remplissez-le maintenant !

              Envoyez-le par mail, accompagné des scans des pièces demandées : 

              une pièce d'identité
              un justificatif de domicile.

              ccas@bois-colombes.com

              Le CCAS vous confirmera par retour de mail votre inscription.
            </p>
          </div>

          <div class="accueil">
            <h4>En vous déplançant au CCAS</h4>
            <h5>Espace Duflos - 79, rue Charles-Duflos</h5>
            <p>Présentez-vous à l'accueil du CCAS muni de votre pièce 
              d'identité et d'un justificatif de domicile.

              Un agent vous aidera à remplir le contrat.
            </p>
          </div>
        </div>
      </div>
      </section>

      <section class="form">
        <h1>Formulaire de demande d'inscription en ligne</h1>
        <div class="donnees">
          <h3>Informatisation de vos données personnelles</h3>
          <p>Les informations receuillies sur ce formulaire 
            sont collectées par le CCAS (unique destinataire) 
            pour la gestion des inscriptions aux sorties et 
            activités de loisir et/ou contrat individuel 
            d'accompagnement. La base légale du traitement 
            est l'intérêt public du Service Solidarité et 
            Autonomie. Les données sont conservées pendant 
            la durée d'inscription. Vous pouvez accéder 
            aux données vous concernant, les rectifier 
            ou retirer votre consentement en envoyant 
            une demande au service (ccas@bois-colombes.com).
          </p>
        </div>
      </section>

    </section>
    
    <footer>
      <div class="footer">

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

  </body>
  </html>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.imgActus {
  display: flex;

  img {
    height: 682.8px;
  }
}

.seSignaler {
  display: flex;
  flex-direction: column;

  .ActusTitle {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 25px;

    img {
      width: 18px;
      margin-top: 10px;
    }

    h1 {
      text-align: center;
      margin-top: 20px;
      font-family: 'Raleway';
      font-size: 30px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .hrActus {
      border: 2px solid rgb(43, 44, 43);
      margin-top: 20px;
    }
  }

  .inscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    margin-left: 140px;


    h2 {
      display: flex;
      font-family: 'Raleway';
      font-size: 23px;
      font-weight: 700;
      text-transform: uppercase;
      align-items: center;
      letter-spacing: 0.4px;
    }

    .inscriTxt {
      display: flex;
      margin-top: 20px;
      width: 100%;
      height: 400px;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;

      ul {
        display: flex;
        flex-direction: column;
        list-style: inside;
        font-family: 'Rubik', sans-serif;
        text-align: start;
        font-size: 16px;
        width: 340px;
        gap: 2px;

        li {
          gap: 20px;
          font-size: 18px;
          width: 330px;
          line-height: 1.2;
        }

        li::marker {
          color: rgb(2, 2, 2);
        }
      }

        img {
            height: 350px;
            float: right;
            margin-left: 400px;
            margin-top: 5px;
        }
    }

    .inscriTxt2 {
      display: flex;
      margin-top: 20px;
      width: 100%;
      height: 400px;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;

      ul {
        display: flex;
        flex-direction: column;
        list-style: inside;
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        list-style: inside;
        margin-left: 140px;
        width: 340px;
        gap: 2px;

        li {
          gap: 20px;
          font-size: 18px;
          width: 330px;
          line-height: 1.2;
        }

        li::marker {
          color: rgb(2, 2, 2);
        }
      }
    }
  }
}

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
        font-size: 20px;
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
        font-size: 16px;
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
        font-size: 20px;
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
        font-size: 16px;
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
        font-size: 20px;
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
        font-size: 16px;
        gap: 30px;
        align-items: start;
        justify-content: center;
  
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