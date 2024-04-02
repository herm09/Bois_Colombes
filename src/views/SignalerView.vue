<script>
// @ is an alias to /src
export default {
  name: 'SignalerView',
  setup() {
    return{}
  }
};
</script>


<template>
  <hr class="hrHead">
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
      </div>

      <section class="contrat">

        <div class="contratTitle">
          <h3>Prenez connaissance des termes du contrat d'accompagnement</h3>
          <p>Contrat individuel d'accompagnement</p>
          <div class="download">
            <hr class="hrDownload1">
            <a href="@/assets/Contrat_Individuel_Accompagnement-Fev20202.p" download="https://www.bois-colombes.fr/wp-content/uploads/2021/06/Contrat_Individuel_Accompagnement-Fev20202.pdf">Télécharger</a>
            <button>Télécharger</button>
            <DownloadFile />
            <hr class="hrDownload2">
          </div>
        </div>

        <div class="method1">
          <h2>Choisissez votre méthode préférée pour remplir le contrat :</h2>
          <div class="enLigne">
            <h4>Inscription tout en ligne</h4>
            <p>En remplissant le formulaire ci-dessous. <br>
              N'oubliez pas de joindre les pièces demandées et signez le contrat.
              <br><br>
              En cliquant sur "Envoyer", votre demande nous parvient directement 
              par mail, et vous est addressée en copie (PDF en piède jointe).<br>
              Le CCAS vous confirmera par retour de votre inscription.
            </p>
          </div>  
        </div>

        <div class="method2">
          <div class="mail">
            <h4>Incription par mail</h4>
            <p>
              Vous avez téléchargé le contrat individuel d'accompagnement 
              pour le lire ? <br>
              Et bien, remplissez-le maintenant !
              <br><br>
              Envoyez-le par mail, accompagné des scans des pièces demandées : 
              <br><br>
              • une pièce d'identité
              <br>
              • un justificatif de domicile.
              <br><br>
            </p>
            <div class="mail">
              <img src="@/assets/mail.png" alt="">
              <p>ccas@bois-colombes.com</p>  
            </div>      
              <br><br>
            <p>
              Le CCAS vous confirmera par retour de mail votre inscription.
            </p>
          </div>

          <div class="accueil">
            <h4>En vous déplançant au CCAS</h4>
            <h5>Espace Duflos - 79, rue Charles-Duflos</h5>
            <p>Présentez-vous à l'accueil du CCAS muni de votre pièce 
              d'identité et d'un justificatif de domicile.
              <br><br>
              Un agent vous aidera à remplir le contrat.
            </p>
          </div>
        </div>

      </section>

      <section class="formulaire">
        <h2>Formulaire de demande d'inscription en ligne</h2>

        <section class="formTxt">
          <h3>Information de vos données personnelles </h3>
          <p>
            Les informations recueillies sur ce formulaire sont 
            collectées par le CCAS (unique destinataire) pour 
            la gestion des inscriptions aux sorties et activités 
            de loisirs et/ou contrat individuel d'accompagnement. 
            La base légale du traitement est l'intérêt public du 
            Service Solidarité et Autonomie. Les données sont 
            conservées pendant la durée d'inscription. Vous 
            pouvez accéder aux données vous concernant, les 
            rectifier ou retirer votre consentement en envoyant 
            une demande au service (ccas@bois-colombes.com).
          </p>

          <div class="input">
            <div class="column1">
              <label for="name" class="label1">Nom de Famille *</label>
              <input type="text" name="name" id="name" required>

              <label for="firstname" class="label2">Prénom *</label><br>
              <input type="text" name="firstname" id="firstname" required>

              <label for="birthday" class="label3">Date de naissance *</label><br>
              <input type="date" name="birthday" id="birthday" required>
            </div>
              
            <div class="column2">
              <label for="address" class="label1">Adresse *</label><br>
              <input type="text" name="address" id="address" required>

              <label for="email" class="label2">Email *</label><br>
              <input type="text" name="email" id="email" required>

              <label for="telephone" class="label3">Téléphone *</label><br>
              <input type="text" name="telephone" id="telephone" required>
            </div>
            
            <div class="column3">
              <label for="id" class="id">Pièce d'identité</label>
              <input type="file" name="id" id="id" required>
                <!-- <span>Joindre une copie de votre pièce d'identité</span> -->
              

              <label for="jd" class="jd">Justificatif de domicile</label>
              <input type="file" for="file" name="jd" id="jd" required>
                  <!-- <span>Joindre une copie de votre justificatif de domicile</span> -->
              
            </div>
          </div>

          <div class="column4">
            <label for="che">
                <input type="checkbox" name="" id="che">
                <span>Cochez la case pour confirmer votre souhait *
                    Par la signature de ce contrat, je signifie que 
                    je souhaite m'inscrire au CCAS et que j'accepte 
                    le contrat individuel d'accompagnement
                    Cochez la case
                </span>
        <!-- pour faire la signature électronique -->
                    <!-- <style>
                        #signatureCanvas {
                            border: 2px solid #000;
                            cursor: crosshair;
                        }
                    </style>
                </head>
                <body>
                    <canvas id="signatureCanvas" width="400" height="200"></canvas>
                    <script>
                        const canvas = document.getElementById('signatureCanvas');
                        const context = canvas.getContext('2d');
                        let isDrawing = false;
                
                        function startDrawing(e) {
                            isDrawing = true;
                            draw(e);
                        }
                
                        function stopDrawing() {
                            isDrawing = false;
                            context.beginPath();
                        }
                
                        function draw(e) {
                            if (!isDrawing) return;
                
                            const x = e.clientX - canvas.offsetLeft;
                            const y = e.clientY - canvas.offsetTop;
                
                            context.lineWidth = 2;
                            context.lineCap = 'round';
                            context.strokeStyle = '#000';
                
                            context.lineTo(x, y);
                            context.stroke();
                            context.beginPath();
                            context.moveTo(x, y);
                        }
                
                        canvas.addEventListener('mousedown', startDrawing);
                        canvas.addEventListener('mousemove', draw);
                        canvas.addEventListener('mouseup', stopDrawing);
                        canvas.addEventListener('mouseout', stopDrawing);
                
                        // Pour les appareils tactiles
                        canvas.addEventListener('touchstart', (e) => {
                            startDrawing(e.touches[0]);
                        });
                
                        canvas.addEventListener('touchmove', (e) => {
                            e.preventDefault();
                            draw(e.touches[0]);
                        });
                
                        canvas.addEventListener('touchend', stopDrawing);
                    </script> -->
            </label>
          </div>
        </section>

        

      </section>

    </section>
    
    <footer>
      <div class="footer">

        <section class="footer1">
          <div class="coordonnees">
            <h2>Coordonnées</h2>
            <ul>
              <li><a>Direction de l'Action Sociale</a><br>Espace Duflos</li>
              <li>79, rue Charles-Duflos <br> 92270 Bois-Colombes</li>
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
              <li>Sur bois-co mobile <br> La ville dans votre poche</li>
              <li>Newsletter <br> Recevez les informations par mail</li>
              <li>Service SMS <br> Recevez les alertes sur votre smartphone</li>
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

.hrHead {
  border-bottom: 3px solid #89BAAD;
}

/* BODY */

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
    margin-top: 50px;
    margin-bottom: 25px;

    img {
      width: 18px;
      margin-top: 10px;
    }

    h1 {
      text-align: center;
      margin-top: 30px;
      font-family: 'Raleway';
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .hrActus {
    border: 2px solid #070707;
    margin-left: auto;
    margin-right: auto;
    width: 84%;
  }

  .inscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    h2 {
      display: flex;
      font-family: 'Raleway';
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      align-items: center;
      letter-spacing: 0.4px;
      margin-left: 210px;
    }

    .inscriTxt {
      display: flex;
      justify-content: center;  
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
        margin-top: 50px;
        font-size: 1.2rem;
        width: 340px;
        gap: 2px;

        li {
          gap: 20px;
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
        margin-top: 5%;
      }
    }

    .inscriTxt2 {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 100%;
      font-family: 'Rubik', sans-serif;
      font-weight: 400;

      p {
        font-size: 1.2rem;
        text-align: start;
        margin-left: 210px;
        font-family: 'Rubik', sans-serif;
      }

      ul {
        display: flex;
        flex-direction: column;
        list-style: inside;
        font-size: 1.2rem;
        font-family: 'Rubik', sans-serif;
        text-align: start;
        margin-left: 210px;
        margin-top: 20px;
        width: 340px;
        gap: 2px;

        li {
          gap: 20px;
          width: 330px;
          line-height: 1.2;
        }

        li::marker {
          color: rgb(2, 2, 2);
        }
      }
    }
  }

  .contrat {
    display: flex;
    flex-direction: column;
    height: 120vh;

    .contratTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #1F266B;
      height: 30vh;
      gap: 20px;

      h3 {
        font-family: 'Raleway';
        font-size: 1.3rem;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        color: white;
      }

      p {
        font-family: 'Rubik', sans-serif;
        font-size: 1.2rem;
        color: white;
      }

      .download {
        display: flex;
        gap: 20px;

        .hrDownload1 {
          border: 2px solid #FBBA00;
          rotate: 90deg;
          margin-right: 20px;
        }

        button {
          background-color: #FBBA00;
          color: black;
          font-family: 'Rubik', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 10px 20px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          }

        .hrDownload2 {
          border: 2px solid #FBBA00;
          rotate: 90deg;
          margin-left: 20px;
          
        }
      }      
    }

    .method1 {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      margin-bottom: 20px;

      h2 {
        display: flex;
        font-family: "Raleway";
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        margin-bottom: 40px;
        justify-content: center;
      }

      .enLigne {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        background-color: rgb(225, 225, 225);
        border-radius: 10px;
        height: 30vh;
        width: 70%;

        h4 {
          display: flex;
          font-family: 'Raleway';
          margin-left: 60px;
          font-size: 1.3rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          text-align: start;
          margin-left: 60px;
          font-family: 'Rubik', sans-serif;
        }
      }
  }

    .method2 {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 15px;
      text-align: start;
      height: 60vh;
      margin-left: 15%;
      margin-right: 15%;

      .mail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #89BAAD;
        border-radius: 10px;
        width: 100%;

        h4 {
          font-family: 'Raleway';
          color: #1F266B;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: 1.3rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          text-align: start;
          margin-left: 20px;
          font-family: 'Rubik', sans-serif;
        }

        .mail {
          display: flex;
          flex-direction: row;
          align-items: center;

          p {
            font-size: 1.2rem;
            text-align: start;
            margin-left: 20px;
            font-family: 'Rubik', sans-serif;
          }

          img {
            width: 4%;
          }
        }
      }

      .accueil {
        display: flex;
        flex-direction: column;
        background-color: #89BAAD;
        border-radius: 10px;
        width: 100%;

        h4 {
          font-family: 'Raleway';
          color: #1F266B;
          font-size: 1.3rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-left: 20px;
          margin-top: 36px;
          margin-bottom: 20px;
        }

        h5 {
          font-family: 'Raleway';
          color: #1F266B;
          font-size: 1.3rem;
          font-weight: 700;
          margin-left: 20px;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          text-align: start;
          margin-left: 20px;
          font-family: 'Rubik', sans-serif;
          width: 70%;
        }
      }
    }
  }

  .formulaire { /* SECTION FORMULAIRE */
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    height: 140vh;

    h2 { /* FORMULAIRE DE DEMANDE D'INSCRIPTION EN LIGNE */
      font-family: 'Raleway';
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      align-items: center;
      margin-left: 210px;
      margin-bottom: 30px;
    }

    .formTxt { /* FORMULAIRE */
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;
      width: 80%;
      background-color: #ced6d4;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
      height: 100vh;

      h3 { /* INFORMATION DE VOS DONNÉES PERSONNELLES */
        font-family: 'Raleway';
        font-size: 1.3rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-left: 120px
      }

      p {
        font-size: 1.2rem;
        font-family: 'Rubik', sans-serif;
        margin-top: 2%;
        margin-bottom: 2%;
        margin-left: 120px;
        width: 82%;
      }

      .input { /* Parties à remplir */
        display: flex;
        flex-direction: column;
        gap: 10px;

        .column1 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          justify-content: center;
          align-self: start;
          font-size: 1.2rem;
          font-family: 'Rubik', sans-serif;
          
          width: 100%;

          .label1 {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            justify-self: center;
          }

          #name {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            margin-left: 8.5vw;
          }

          .label2 {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            margin-left: 6vw;
          }

          #firstname {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-left: 6vw;
          }

          .label3 {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            margin-left: 2vw;
          }

          #birthday {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
            width: 60%;
            margin-left: 2vw;
          }

          input[type=text] {
            height: 40px;
            width: 250px;
            border: 2px solid #7d7c7c;
            border-radius: 8px;
            box-sizing: border-box;
          }
        }

        .column2 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          justify-content: center;
          align-self: start;
          font-size: 1.2rem;
          font-family: 'Rubik', sans-serif;
          
          width: 100%;

          .label1 {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
            margin-left: 8.5vw;
          }

          #address {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            margin-left: 8.5vw;
          }

          .label2 {
            grid-column: 2 / 3;
            grid-row: 1 / 2;
            margin-left: 6vw;
          }

          #email {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-left: 6vw;
          }

          .label3 {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            margin-left: 2vw;
          }

          #telephone {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
            width: 60%;
            margin-left: 2vw;
          }

          input[type=text] {
            height: 40px;
            width: 250px;
            border: 2px solid #7d7c7c;
            border-radius: 8px;
            box-sizing: border-box;
          }
        }

        .column3 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          justify-content: center;
          align-self: start;
          font-size: 1.2rem;
          font-family: 'Rubik', sans-serif;
          width: 100%;

          .id {
            grid-column: 1 / 2;
            grid-row: 1 / 1;
            margin-left: 8.5vw;
          }

          #id {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            margin-left: 8.5vw;
          }

          .jd {
            grid-column: 2 / 3;
            grid-row: 1 / 1;
            margin-left: 6vw;
          }

          #jd {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-left: 6vw;
          }
        }

        .column4 {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 1.2rem;
          font-family: 'Rubik', sans-serif;

          span {
            margin-left: 10px;
          }
        }
      }
    }
  }

  
}

/* FOOTER */ 

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