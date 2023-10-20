import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { getBambas } from '/copManager.js';
//import { getBambasCarrito } from './copManager';

createApp({
    data() {
        return {
            message: 'Ver bambas',
            divActual: 'portada',
            bambas: [], // Cambiar el nombre de la propiedad para evitar conflictos
            search: '',
            bambasAddToCart: [],
            pedido:[]
        };
    },
    computed: {
        bambasFiltrados() {
            return this.bambas.filter((bamba) =>
                bamba.marca.toLowerCase().includes(this.search.toLowerCase()) ||
                bamba.modelo.toLowerCase().includes(this.search.toLowerCase())
            );
        },
    },
    methods: {
      
        mostrar(div) {
            return this.divActual == div;
        },
        cambiarDiv(div) {
            this.divActual = div;
            // console.log(this.bambas);
        },
        agregarAlCarrito(bambaId){
            const bambaCart = this.bambas.find((b) => b.id == bambaId);

            if(bambaCart) {
                const bambaEnCarrito = this.bambasAddToCart.find((c) => c.id == bambaId);

                if(bambaEnCarrito) {
                    this.bambasAddToCart.push(bambaCart);
                }

            }
            console.log("agregado! " + bambaId);
            this.bambasAddToCart.push({bambaId, cantidad: 1});
        },
        countBambasSumar(bambaId){
          this.bambas[bambaId].countItems++;
          


        },
        countBambasRestar(bambaId){
            if(this.bambas[bambaId].countItems < 1){

            }else{
                this.bambas[bambaId].countItems--;
            }
            
        }


    },
    async created() {
        // Cargar los datos de las bambas
        this.bambas = await getBambas();
        //this.bambasAddToCart = await getBambasCarrito();
    },
}).mount('#app');


