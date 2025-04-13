// console.log("mi primera connecion con js")


// const btn = document.getElementById("btnAlerta")

// btn.addEventListener("click", () => {alert("esto eta funcionando")})


// const mostrarAlerta = () =>{
//  alert("esta funcionando")
// }


    class Actividad {
        constructor(titulo,descripcion,img,id ) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.img = img;
        this.id = id;
        
        }
    }

    class Container {
        constructor() {
            this.container = []
        }

    addActivity(titulo,descripcion,img,id){
        const myActivity1 = new Actividad(titulo,descripcion,img,id);
        this.container.push(myActivity1)
    }

    showActivity(){
        console.log(this.container)
        
    }

    returnActivity(){
        return this.container

        }

    deleteActivity(id){
    this.container = this.container.filter((x) => x.id != id)
    }

    filterActivity(activity){
        return this.container = this.container.filter((x) => x.titulo == activity)
    }
    }

    const newContainer = new Container() 

    
newContainer.addActivity("pesca","pescar Peces", "IMG", 1)
    
// newContainer.deleteActivity(2)


    
// newContainer.filterActivity("pesca")


newContainer.showActivity()


module.exports = { Actividad, Container };