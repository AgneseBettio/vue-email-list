// Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// https://flynn.boolean.careers/exercises/api/random/mail

//collegamento a vue

const app = new Vue({
    el: '#root',

    data: {
        randomEmailList: [],
    },
    mounted() {
        const ajaxEmails = [];
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(resp.data.response);
                    ajaxEmails.push(resp.data.response);
                    //per stamparle a ciclo completo insieme, verifico che l'array di email generato sia uguale a 10
                    if(ajaxEmails.length === 10){
                        // sono 10? finito il ciclo push nell'array che verrà stampato
                        this.randomEmailList.push(...ajaxEmails);
                    }
                });
        }

    }

})