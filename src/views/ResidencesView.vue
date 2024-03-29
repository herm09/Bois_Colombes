<script>
// @ is an alias to /src
export default {
    name: 'ResidencesView',
}

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }
</script>


<template>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- <link rel="stylesheet" href="style.css"> -->
        <title>Résidences et établissements</title>
    </head>

    <body>

        <hr class="hrHead">

        <section class="appartsHead">
            <div class="AppartTitle">
                <img src="@/assets/trait_texte.png" alt="">
                <h1>Résidences et établissements</h1>
            </div>
        </section>
        
        <section class="senior">
            <div class="seniorTitle">
                <h2>Les résidences pour personnes âgées</h2>
                <p>Dans un cadre à la fois agréable, calme et proche du centre de Paris, la 
                    ville de Bois-Colombes dispose de plusieurs résidences adaptées aux 
                    différents besoins des personnes âgées.
                </p>
            </div>
            <div class="appart1">
                <h2>La résidence André-Chénier</h2>
                <div>
                    <img src="@/assets/andre.png" alt="">
                    <p>
                        19, rue André-Chénier <br>
                        Tél : 01 47 80 40 89 <br>
                        Site internet :
                    </p>
                </div>
                <p>Construite au cœur d'un grand parc privé, arboré et agrémenté d'une pièce d'eau, la 
                    résidence André-Chénier appartient à l'Office Public Départemental d'H.L.M des 
                    Hauts-de-Seine. Elle est gérée par Hauts-de-Seine Habitat. La résidence n'est pas 
                    médicalisée mais bénéficie de tous les services de maintien des personnes à domicile.

                    73 appartements : 61 grands studios de 33 m2 avec balcon, 2 deux-pièces de 40 m2, 4 
                    appartements de 66 m2 constitués de 2 grands studios communicants.

                    Conditions d'admission : avoir plus de 60 ans, être bois-colombien ou avoir des enfants 
                    qui habitent dans la ville ou dans les communes proches, être autonome et valide.

                    Interphone extérieur relié à l'appartement,
                    Parking extérieur,
                    Résidence climatisée,
                    Restaurant de 60 couverts sur commande, service déjeuner à table 5 jours sur 7,
                    Chambre d'hôte,
                    Coiffeur et pédicure à domicile,
                    Navette municipale 4 jours par semaine pour le marché et les clubs de loisirs.
                    Indépendants, les résidants peuvent prendre leur repas de midi au restaurant de 
                    l'établissement. Bibliothèque salons sont aussi à leur disposition.
                </p>
            </div>
        </section>
        
        <section class="medical">

            <div class="appart2">
                <h2>La résidence Léopold-Bellan</h2>
                <div>
                    <img src="@/assets/leopold.png" alt="">
                    <p>
                        17, avenue Charles-de-Gaulle <br>
                        Tél : 01 47 86 57 00 <br>
                        Couriel :
                    </p>
                </div>
                <p>
                    Cette résidence fait partie de la Fondation Léopold-Bellan.

                    La Résidence de retraite médicalisée Léopold Bellan de Bois-Colombes 
                    est un Établissement d'Hébergement pour Personnes Âgées Dépendantes (EHPAD).

                    Elle accueille, dans un cadre de vie adapté, des personnes âgées, à 
                    partir de 60 ans, qui, sans relever d'une prise en charge médicale et 
                    technique lourde, ne peuvent plus vivre à domicile. Ainsi elle reçoit 
                    notamment celles qu'un handicap physique ou psychique lié au grand âge 
                    rend totalement ou partiellement dépendantes dans l'accomplissement des 
                    actes élémentaires de la vie quotidienne.

                    Sa capacité d'accueil est de 80 places d'hébergement permanent et de 2 
                    places d'hébergement temporaire, réparties en 4 unités de vie dont 1 
                    protégée et sécurisée pour recevoir, dans les meilleures conditions, les 
                    personnes atteintes de la maladie d'Alzheimer ou apparentée.
                    Toutes les chambres bénéficient d'une douche et de sanitaires adaptés. Les 
                    couples peuvent disposer soit d'1 chambre double (au nombre de 4 dans 
                    l'établissement), soit de 2 chambres individuelles communicantes. Toutes 
                    les chambres sont meublées et équipées d'un téléphone et d'un appel sonore.

                    La Résidence propose un accompagnement personnalisé et des activités adaptées 
                    aux pathologies des personnes dépendantes avec le souci constant de leur apporter 
                    confort, bien-être et sécurité. À cette fin, toutes les compétences médicales, 
                    paramédicales, sociales, hôtelières sont présentes.
                </p>
            </div>

            <div class="appart3">
                <h2>La résidence Ste-Marthe</h2>
                <div>
                    <img src="@/assets/marthe.png" alt="">
                    <p>
                        3, rue Carnot <br>
                        Tél : 01 56 05 61 40 <br>
                        Couriel :
                        Site internet :
                    </p>
                </div>
                <p>
                    ACCUEIL DE JOUR LES PIERRES VIVES.

                    Cette résidence fait partie de l'association Isatis (Le Kremlin-Bicêtre).
                    La rue Carnot a changé d'aspect avec la résidence Ste-Marthe 
                    complètement transformée. L'établissement, conçu pour accueillir 
                    des personnes âgées dépendantes, est doté de 73 chambres et deux 
                    places d'accueil de jour, de lieux de vie à tous les niveaux et 
                    de salles de détente. Il bénéficie d'un jardin jouxtant la villa du Château.

                    La Résidence bénéficie à la fois d'un emplacement en plein centre-ville 
                    et de l'agrément d'un jardin fleuri, apprécié par les résidents et 
                    leur famille. L'équipe soignante et administrative vous accueille 
                    avec professionnalisme et humanité, dans cet établissement associatif 
                    à but non lucratif.
                </p>
            </div>

        </section>

        <section class="specials">
            <div class="appart4">
                <h2>Les Camélias</h2>
                <div>
                    <img src="@/assets/camelias.png" alt="">
                    <p>
                        15, rue Maurice-Pelletier <br>
                        Tél : 01 46 52 03 16 <br>
                    </p>
                </div>
            </div>
            <p>
                ACCUEIL DE JOUR DES PERSONNES ATTEINTES DE LA MALADIE D'ALZHEIMER.

                Cette structure non médicalisée accueille à la journée des personnes 
                atteintes de cette maladie en leur proposant un certain nombre d'activités 
                de mobilisation et de loisirs : dessin, jeux, cuisine, promenades… Le 
                centre accueille des hommes et des femmes de tous âges, seules les 
                maladies invalidantes pour la vie en société (agressivité) sont exclues.
                D'une capacité maximale de 10 malades, le centre fonctionne du lundi 
                au vendredi de 9h à 17h.
            </p>

            <ScrollToTop />

        </section>
        
        <footer>
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
        </footer>

    </body>
    </html>
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

/* --------------- HEADER --------------- */

.hrHead {
    border-bottom: 3px solid #89BAAD;
}

/* --------------- BODY --------------- */
.appartsHead {
    display: flex;
    justify-content: center;
    align-items: center;

    .AppartTitle {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 25px;

    img {
    height: 55px;
    }

    h1 {
        text-align: center;
        margin-top: 20px;
        font-family: 'Raleway';
        font-size: 30px;
        text-transform: uppercase;
        color: #6b581f;
    }
}
}



.senior {
    display: flex;
    flex-direction: column;
    width: 92%;
    margin-left: 140px;

    .seniorTitle {
        display: flex;
        flex-direction: column;
        width: 100%;

        h2 {
            display: flex;
            font-family: 'Raleway';
            font-size: 23px;
            font-weight: 700;
            text-transform: uppercase;
            align-items: center;
            letter-spacing: 0.4px;
        }

        p {
            display: flex;
            justify-content: center;
            text-align: start;
            font-family: 'Rubik', sans-serif;
            font-size: 18px;
            line-height: 1.2;
            width: 80%;
        }
    }

    .appart1 {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 20px;

        h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 23px;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        letter-spacing: 0.4px;
        }

        div {
        display: flex;
        gap: 20px;
        margin-top: 20px;

            img {
                height: 500px;
            }

            p {
                display: flex;
                font-family: 'Rubik', sans-serif;
                margin-left: 10%;
                font-size: 18px;
                text-align: start;
                line-height: 1.2;
            }
        }

        p {
            display: flex;
            font-family: 'Rubik', sans-serif;
            width: 70%;
            text-align: start;
            align-self: center;
        }
    }
}

.medical {
    display: flex;
    flex-direction: column;
    width: 92%;
    margin-left: 140px;

    .appart2 {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 20px;

        h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 23px;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        letter-spacing: 0.4px;
        }

        div {
        display: flex;
        gap: 20px;
        margin-top: 20px;

            img {
                height: 500px;
            }

            p {
                display: flex;
                font-family: 'Rubik', sans-serif;
                margin-left: 10%;
                font-size: 18px;
                text-align: start;
                line-height: 1.2;
                width: 80%;
            }
        }

        p {
            display: flex;
            font-family: 'Rubik', sans-serif;
            width: 70%;
            text-align: start;
            align-self: center;
        }
    }

    .appart3 {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 20px;

        h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 23px;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        letter-spacing: 0.4px;
        }

        div {
        display: flex;
        gap: 20px;
        margin-top: 20px;

            img {
                height: 500px;
            }

            p {
                display: flex;
                font-family: 'Rubik', sans-serif;
                margin-left: 10%;
                font-size: 18px;
                text-align: start;
                line-height: 1.2;
                width: 80%;
            }
        }

        p {
            display: flex;
            font-family: 'Rubik', sans-serif;
            width: 70%;
            text-align: start;
            align-self: center;
        }
    }
}

.specials {
    display: flex;
    flex-direction: column;
    width: 92%;
    margin-left: 140px;
    
    .appart4 {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-top: 20px;

        h2 {
        display: flex;
        font-family: 'Raleway';
        font-size: 23px;
        font-weight: 700;
        text-transform: uppercase;
        align-items: center;
        letter-spacing: 0.4px;
        }

        div {
        display: flex;
        gap: 20px;
        margin-top: 20px;

            img {
                height: 500px;
            }

            p {
                display: flex;
                font-family: 'Rubik', sans-serif;
                margin-left: 10%;
                font-size: 18px;
                text-align: start;
                line-height: 1.2;
                width: 80%;
            }
        }
    }

    p {
        display: flex;
        font-family: 'Rubik', sans-serif;
        width: 70%;
        text-align: start;
        align-self: center;
    }

    #scroll_to_top {
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
        height: 6vh;
    }
}

</style>