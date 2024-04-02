<script>
export default {
    name: 'DownloadFile',
    methods: {
        telechargerPDF() {
            const cheminPDF = '@/assets/Contrat_Individuel_Accompagnement-Fev20202.pdf';
            const lien = document.createElement('a');
            lien.href = cheminPDF;
            lien.setAttribute('download', 'Contrat_Individuel_Accompagnement-Fev20202.pdf');

            lien.click();
        }
        
    }
};
</script>


<template>
    <div>
        <p @click="Télécharger"></p>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// p {
//     background-color: #FBBA00;
//     color: black;
//     font-family: 'Rubik', sans-serif;
//     font-size: 1.2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 30px;
//     cursor: pointer;
// }

</style>