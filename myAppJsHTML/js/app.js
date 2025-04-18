class Actividad {
  constructor(titulo, descripcion, img, id) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.img = img;
    this.id = id;
  }
}

class Container {
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

const newContainer = new Container();

buttonAdd.addEventListener("click", () => {
  addActivityhandler();
});

const addActivityhandler = () => {
  const activityValue = document.getElementById("activity").value;
  const descriptionValue = document.getElementById("description").value;
  const linkValue = document.getElementById("link").value;
  const faltan = document.getElementById("faltanDatos")

  if (validateImput(activityValue, descriptionValue, linkValue) === false) {
    faltan.innerHTML = "Missing info"
  } else newContainer.addActivity(
    activityValue,
    descriptionValue,
    linkValue,
    crypto.randomUUID,
    faltan.innerHTML = ""
  );;

showItem() 


  console.log("addactivity",newContainer.container[0])
};



// const showItem = () =>{
// const newActivity = document.getElementById("NewActivity")
// const containerActivity = document.querySelector(".newActivity")
// const actividad = containerActivity.createElement('div')
// actividad.innerHTML = "hola"

// }

const validateImput = (a, b, c) => {
  if (a == "" || b == "" || c == "") {
    return false;
    // create a label P to let him know that a part of data is missing
  }
  return true;
};

module.exports = { Actividad, Container};
