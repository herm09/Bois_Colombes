<script>
// @ is an alias to /src
export default {
    name: 'AccueilView',
}
</script>


<template>
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

.imgActus {
    display: flex;

    img {
        height: 614px;
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