<script>
// @ is an alias to /src
export default {
    name: 'AideView',
}
</script>


<template>

    <hr class="hrHead">

    <section class="aide">
        <h1>Se faire aider (mrc, aide à domicile, grille aggir, ...)</h1>

        <section class="assistance">
            <h2>Téléassistance, portage de repas, aide à domicile</h2>
            <h3>Avec le CCAS</h3>

            <div class="assistTxt">
                <p>
                    Le CCAS mène une politique dynamique en faveur 
                    des personnes âgées en luttant contre l'isolement, 
                    en organisant des activités socio-culturelles, 
                    en facilitant les déplacements grâce aux navettes 
                    régulières ou individuelles, en contactant les 
                    personnes signalées pendant les périodes de crises 
                    (canicule, crise sanitaire, grand froid…).
                    <br><br>
                    Les référents sociaux accompagnent également les 
                    personnes en situation de perte d'autonomie et leur 
                    famille, en proposant de mettre en place divers 
                    services qui concourent à leur maintien au domicile 
                    comme la téléassistance et le portage de repas, des 
                    aides à domicile…
                    <br><br>
                    Le CCAS s'assure que tous les droits sociaux sont 
                    ouverts, et dans le cas contraire accompagne les 
                    démarches administratives, étudie les aides 
                    financières possibles pour la mise en place de 
                    plan d'aide personnalisé et instruit, pour les plus 
                    démunis, les dossiers ouvrant droit au Minimum de 
                    Ressources Communal pour les personnes pouvant en 
                    bénéficier.
                    <br>
                    Le CCAS apporte également une écoute et un soutien 
                    auprès des «aidants» familiaux.
                </p>
                <img src="@/assets/aide.png" alt="">
            </div>

            <div class="ressources">
                <h2>Le minimum de ressources communal (MRC)</h2>
                <h3>Une aide financière pour les personnes âgées les plus démunies</h3>
                <p>Depuis 2009, le Conseil d'Administration a mis en 
                    place le Minimum de Ressources Communal (MRC). 
                    Il s'agit d'une allocation trimestrielle pour 
                    les personnes âgées de plus de 65 ans, domiciliée 
                    à Bois Colombes, de façon régulière et continue, 
                    qui ont fait valoir tous leurs droits au niveau 
                    national (notamment l'ASPA, l'allocation de 
                    solidarité aux personnes âgées). 
                    Si leurs ressources cumulées sont inférieures 
                    au seuil de pauvreté, fixé par l'INSEE en 2020 
                    à 1041 € mensuels, elles peuvent alors 
                    bénéficier du MRC, pour un montant maximal 
                    mensuel de 148 €.
                    Pour toute information complémentaire, 
                    contacter le CCAS.
                </p>
            </div>

            <div class="allocations">
                <h2>Allocations et aides aux personnes âgées</h2>
                <p>
                    Une personne âgée peut bénéficier de l'allocation 
                    personnalisée d'autonomie (Apa) en cas de perte 
                    d'autonomie, de l’allocation de solidarité aux 
                    personnes âgées (Aspa) si elle a de faibles 
                    revenus, de l'allocation supplémentaire d'invalidité 
                    (Asi) si elle est invalide et n'a pas atteint 
                    l'âge légal de départ à la retraite. <br>
                    Des aides sociales peuvent aussi lui être proposées.

                    APA : QU'EST-CE QUE LE GIR 1, 2, 3 OU 4 DE 
                    LA GRILLE AGGIR ? <br>
                    La grille Aggir est utilisée dans le cadre 
                    d'une demande d'allocation personnalisée 
                    d'autonomie (Apa). Cette grille permet de 
                    mesurer le degré de perte d'autonomie du 
                    demandeur de l'Apa, et, s'il y a effectivement 
                    droit, le niveau d'aides dont il a besoin. Elle 
                    est intégrée à un référentiel d'évaluation qui 
                    permet de recueillir l'ensemble des informations 
                    nécessaires à l'élaboration du plan d'aide du demandeur.
                    La grille mesure les capacités de la personne 
                    âgée à accomplir :
                    <br><br>
                    • 10 activités corporelles et mentales, dites 
                    activités discriminantes,
                    <br>
                    • et 7 activités domestiques et sociales, dites 
                    activités illustratives.
                    <br><br>
                    Seules les 10 activités discriminantes sont utilisées 
                    pour déterminer le Gir dont relève le demandeur de 
                    l'Apa. Les degrés de perte d'autonomie sont classés 
                    en 6 Gir. À chaque Gir correspond un niveau de 
                    besoins d'aides pour accomplir les actes essentiels 
                    de la vie quotidienne. 
                    <br><br>
                    Les 7 activités illustratives
                    sont destinées à apporter des informations 
                    complémentaires à l'évaluateur pour mieux appréhender 
                    la situation globale du demandeur.
                </p>
            </div>

            <div class="lire">
                <div class="portail">
                    <h3>A lire sur le portail national d'information 
                        des personnes âgées et de leur famille
                    </h3>
                    <p>
                        Comment évaluer la perte d'autonomie ? <br>
                        Ce sont des professionnels qui évaluent <br> la 
                        perte d'autonomie : équipe médico-<br>sociale 
                        APA ou médecin coordonateur. <br>
                        Lire la suite sur le site <br>
                        pour-les-personnes-agees.gouv.fr
                    </p>
                </div>

                <div class="service">
                    <h3>A lire sur service-public.fr :</h3>
                    <p>
                    • Allocation personnalisée d'autonomie (Apa) <br>
                    • Allocation de solidarité aux personnes âgées (Aspa) <br>
                    • Allocation supplémentaire d'invalidité (Asi) <br>
                    • Allocation simple <br>
                    • Obtenir une aide ménagère <br>
                    • Prise en charge des repas
                    </p>
                </div>
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

</template>


<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.hrHead {
    border-bottom: 3px solid #89BAAD;
}

.aide {
    display: flex;
    flex-direction: column;
    height: 250vh;

    h1 {
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .assistance {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        h2 {
            display: flex;
            font-family: 'Raleway';
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            align-items: center;
            letter-spacing: 0.4px;
            margin-left: 140px;
            margin-bottom: 20px;
        }

        h3 {
            display: flex;
            color: #1F266B;
            font-family: 'Raleway';
            font-size: 1.3rem;
            font-weight: 700;
            text-transform: uppercase;
            align-items: center;
            letter-spacing: 0.4px;
            margin-left: 140px;
        }

        .assistTxt {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20%;

            p {
                font-family: 'Rubik', sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 1.5;
                margin-right: 20px;
                text-align: justify;
                width: 40%;
            }

            img {
                width: 20%;
                height: auto;
            }
        }

        .ressources {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            margin-left: 140px;

            h2 {
                font-family: 'Raleway';
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                margin-bottom: 20px;
            }

            h3 {
                font-family: 'Raleway';
                color: #1F266B;
                font-size: 1.3rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.4px;
            }

            p {
                font-family: 'Rubik', sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 1.5;
                text-align: justify;
                width: 70%;
            }
        }

        .allocations {
            display: flex;
            flex-direction: column;
            margin-top: 40px;

            h2 {
                display: flex;
                font-family: 'Raleway';
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: uppercase;
                align-items: center;
                letter-spacing: 0.4px;
                margin-left: 140px;
                margin-bottom: 20px;
            }

            p {
                font-family: 'Rubik', sans-serif;
                font-size: 1.2rem;
                font-weight: 400;
                line-height: 1.5;
                margin-right: 20px;
                margin-left: 140px;
                width: 70%;
            }
        }

        .lire {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            gap: 90px;

            .portail {
                display: flex;
                flex-direction: column;
                font-size: 1rem;
                font-weight: 400;
                width: 25%;
                height: 140%;
                background-color: #d3dedb;
                border-radius: 15px;
                align-items: center;
                justify-content: center;

                h3 {
                    font-family: 'Raleway';
                    font-size: 18px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }

                p {
                    font-family: 'Rubik', sans-serif;
                    font-weight: 400;
                    font-size: 1.1rem;
                }
            }

            .service {
                display: flex;
                flex-direction: column;
                font-size: 1rem;
                font-weight: 400;
                width: 25%;
                height: 140%;
                background-color: #d3dedb;
                border-radius: 15px;
                align-items: center;
                justify-content: center;

                h3 {
                    font-family: 'Raleway';
                    font-size: 17px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                }

                p {
                    font-family: 'Rubik', sans-serif;
                    font-weight: 400;
                    font-size: 1.1rem;
                    width: 80%;
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