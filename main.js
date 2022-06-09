/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const appVue = new Vue({
    // selezioni l'id in html dove verrà scritto tutto il codice Vue
    el: "#app",

    // dati chiave per Vue
    data: {
        // chiave di un oggetto
        message: "leave and open your eyes",
        photo: "https://picsum.photos/600/300"
        /* photo: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
        ], */
    },

    // funzioni
    methods: {
        //
    },
});
