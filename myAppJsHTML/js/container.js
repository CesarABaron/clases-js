import { Actividad } from "./activity.js";

export class Container {
  constructor() {
    this.container = [];
  }

  addActivity(titulo, descripcion, img, id) {
    const myActivity1 = new Actividad(titulo, descripcion, img, id);
    this.container.push(myActivity1);
  }

  showActivity() {
    console.log(this.container);
  }

  
  deleteActivity(id) {
    this.container = this.container.filter((x) => x.id != id);
  }

  filterActivity(activity) {
    const result = (this.container = this.container.filter(
      (x) => x.titulo == activity
    ));
    return result;
  }
}
