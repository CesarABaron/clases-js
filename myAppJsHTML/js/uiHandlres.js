import { Container } from "./container.js";
import { validateImput, inyectInfo } from "./utils.js";

const newContainer = new Container();


export class Ui {
  constructor() {
    this.newActivity = document.querySelector(".newActivity");
    this.counter = 0;
  }

  createDiv() {

    const actividad = document.createElement("div");
    actividad.classList.add("newBox");
    actividad.id = `actividad-${this.counter}`;

    this.newActivity.appendChild(actividad);

    actividad.addEventListener("click", (event) => {
      this.deleteDiv(actividad.id);
      newContainer.deleteActivity(currentId)
      console.log(newContainer)
    });

    const currentId = actividad.id;

    console.log(currentId)

    this.counter++;

    return currentId;
  }

  

  deleteDiv(id) {
    const deleteHandler = document.getElementById(`${id}`);
    deleteHandler.remove();
  }

  addInformation() {
    const faltanDat = document.getElementById("faltanDatos");
    const titulo = document.getElementById("activity").value;
    const descripcion = document.getElementById("description").value;
    const img = document.getElementById("link").value;

    if (validateImput(titulo, descripcion, img) === true) {
      const id = this.createDiv();
      newContainer.addActivity(titulo, descripcion, img, id);
      faltanDat.innerHTML = "";
      inyectInfo(titulo, descripcion, img, id);
    } else faltanDat.innerHTML = "Faltan datos";
  }
}
