console.log("mi primera connecion con js")


const btn = document.getElementById("btnAlerta")

btn.addEventListener("click", () => {alert("esto eta funcionando")})


const mostrarAlerta = () =>{
 alert("esta funcionando")
}



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

    deleteActivity(id){
    this.container = this.container.filter((x) => x.id != id)
    }

    filterActivity(activity){
        const result = this.container = this.container.filter((x) => x.titulo == activity)
        return result
    }
    }



    const newContainer = new Container() 

    
newContainer.addActivity("pesca2","pescar Peces", "IMG", 1)
// newContainer.addActivity("pesca3","pescar Peces", "IMG", 1)
// newContainer.addActivity("pesca4","pescar Peces", "IMG", 1)
// newContainer.addActivity("pesca5","pescar Peces", "IMG", 1)
// newContainer.addActivity("pesca2","pescar Peces", "IMG", 1)
// newContainer.addActivity("pesca2","pescar Peces", "IMG", 1)
    
// newContainer.deleteActivity(2)


    
newContainer.filterActivity("pesca2")


newContainer.showActivity()


module.exports = { Actividad, Container };