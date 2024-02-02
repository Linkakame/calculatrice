const app = Vue.createApp({
    data() {
    return {
            resultat :0,
            nombretapper1 : '',
            nombretapper2 : '',
            operation :''
        }; 
    },
    methods:{
        update(nombre) {
            if (this. operation === '') {
                this.nombretapper1 += nombre.toString(),
                this.resultat = parseInt(this.nombretapper1)
            } else {
                this.nombretapper2 += nombre.toString(),
                this.resultat = parseInt(this.nombretapper2)
            }
        },
        addition(){
            this.operation ='+'
        },
        soustraction(){
            this.operation ='-'
        },
        multiplication(){
            this.operation ='*'
        },
        division(){
            this.operation ='/'
        },
        modulo(){
            this.operation = '%'
        },
        calculresultat(){
            if (this.operation === '') {
                alert('Veuillez sélectionner une opération avant de calculer le résultat.');
                return;
            }
    
            if (this.operation === '/' && this.nombretapper2 === '0') {
                alert('Division par zéro impossible.');
                return;
            }
            if(this.nombretapper1 !== '' && this.nombretapper2 !== '') {
                switch (this.operation) {
                    case '+':
                        this.resultat = parseInt(this.nombretapper1) + parseInt(this.nombretapper2);
                        break;
                    case '-':
                        this.resultat = parseInt(this.nombretapper1) - parseInt(this.nombretapper2);
                        break;
                    case '*':
                        this.resultat = parseInt(this.nombretapper1) * parseInt(this.nombretapper2);
                        break;
                    case '/':
                        this.resultat = parseInt(this.nombretapper1) / parseInt(this.nombretapper2);
                        break;
                    case '%':
                        this.resultat = parseInt(this.nombretapper1) % parseInt(this.nombretapper2);
                        break;
                    default:
                        // Opération invalide, gestion de l'erreur
                        alert('Opération invalide.');
                        return;
                }
                // Réinitialiser les valeurs après le calcul
                this.nombretapper1 = '';
                this.nombretapper2 = '';
                this.operation = '';
            }
        }
    }
});
app.mount('#app');
