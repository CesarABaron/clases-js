export class Ui {
    constructor() {
        this.newActivity = document.querySelector(".newActivity")
        this.counter = 0
    }


    createDiv(){ 
        const actividad = document.createElement("div")
        actividad.classList.add("newBox")

        this.newActivity.appendChild(actividad)
    }




}