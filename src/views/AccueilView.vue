<script>
// @ is an alias to /src
export default {
    name: 'AccueilView',
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
        height: 614px;
    }
}

.seSignaler {
    display: flex;
    flex-direction: column;

    .ActusTitle {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        border-bottom: 3px solid rgb(43, 44, 43);
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
    }

    .inscription {
        display: flex;
        flex-direction: column;
        justify-content: center;
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

            img {
                height: 300px;
                margin-left: 20px;
            
                float: right;
                margin-left: 430px;
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

</style>