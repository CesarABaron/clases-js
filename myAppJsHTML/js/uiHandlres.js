import { validateImput,inyectInfo } from "./utils.js"
import { Container } from "./container.js"

const newContainer = new Container();

export class Ui {
    constructor() {
        this.newActivity = document.querySelector(".newActivity")
        this.counter = 0
    }

    

    createDiv(){ 
        const actividad = document.createElement("div")
        actividad.classList.add("newBox")
        actividad.id= `actividad-${this.counter}`

        actividad.addEventListener("click", () => {
            console.log(`Clicked div with id ${actividad.id}`);
          });

        this.counter++
        this.newActivity.appendChild(actividad)

    }


    deleteDiv(id){
        const deleteHandler = document.getElementById(`${id}`)
        deleteHandler.remove()
    }


    addInformation(){
        const faltanDat = document.getElementById("faltanDatos")

        const titulo = document.getElementById("activity").value
        const descripcion = document.getElementById("description").value
        const img = document.getElementById("link").value

        console.log(titulo,descripcion,img)

        if(validateImput(titulo,descripcion,img) === true){
            newContainer.addActivity(titulo,descripcion,img,this.counter)
            this.createDiv();
            console.log("debe ser este 1",this.counter)
            inyectInfo(titulo,descripcion,img,`actividad-${this.counter}`)
            
            faltanDat.innerHTML = ""
        } else faltanDat.innerHTML = "Faltan datos"


        // el problema radica en que no se esta creando el div primero, y por eso sale null, reparar en la proxima session 

    }


} 