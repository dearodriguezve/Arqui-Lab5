const app = new Vue({
    el:'#app',
    data:{
        texto:'hola mundo',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        respuesta: false,
        textoRespuesta:'',
        fondoRespuesta: ''
    },
    methods:{
        postREST:function(){
            fetch('http://'+ '146.148.107.218' +':4000/sa-auth-ms/resources/users', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    password: this.password
                }),
            }).then(response => {
                if(response.ok) {
                    this.respuesta=true
                    this.textoRespuesta = 'Usuario creado satisfactoriamente desde Microservicio: ['+this.firstName+', '+this.lastName+', '+this.username+', '+this.password+ ']'
                    this.fondoRespuesta="p-3 mb-2 bg-success text-white"
                } else {
                    this.respuesta=true
                    this.textoRespuesta = 'Error creando el usuario'
                    this.fondoRespuesta="p-3 mb-2 bg-danger text-white"
                }
             }).catch(error =>{
                this.respuesta=true
                this.textoRespuesta = 'Error creando el usuario'
                this.fondoRespuesta="p-3 mb-2 bg-danger text-white"
             })

        },
        postGraphQL:function(){
            fetch('http://146.148.107.218:5000/graphiql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query:`
                    query {
                        allUsers {
                          firstName
                        }
                    }`
                }),
            }).then(response => {
                if(response.ok) {
                    this.respuesta=true
                    this.textoRespuesta = 'Usuario creado satisfactoriamente desde Microservicio: ['+this.firstName+', '+this.lastName+', '+this.username+', '+this.password+ ']'
                    this.fondoRespuesta="p-3 mb-2 bg-success text-white"
                } else {
                    this.respuesta=true
                    this.textoRespuesta = 'Error creando el usuario'
                    this.fondoRespuesta="p-3 mb-2 bg-danger text-white"
                }
             }).catch(error =>{
                this.respuesta=true
                this.textoRespuesta = 'Error creando el usuario'
                this.fondoRespuesta="p-3 mb-2 bg-danger text-white"
             })


        }
    }
})

