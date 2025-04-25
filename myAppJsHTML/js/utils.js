export const validateImput = (titulo, descripcion, img) => {

    if (titulo == "" || descripcion == "" || img == "") {
      console.log("no hay info")
      return false;
    }
    console.log("si hay info")
    return true;
  }



  export const inyectInfo = (titulo, descripcion, img,id) =>{
    console.log("debe ser este 2",id)
    const divActivity = document.getElementById(`${id}`)
    console.log("debe selecionar el div con el ID pasado por parametro", divActivity)
    // div.innerHTML = `${titulo} ${descripcion} ${img}`
  }