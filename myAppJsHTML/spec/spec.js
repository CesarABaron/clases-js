const { Container, Actividad } = require('../js/app')


describe("Container", () => {
    it("debe estar creada", () => {
        expect(typeof Container.prototype.constructor).toBeDefined();
    });
});


describe("Actividad", () => {
    it("debe estar creada", () => {
        expect(typeof Actividad.prototype.constructor).toBeDefined();
    });
});


describe("container debe terner 4 metodos", () =>{
    it("cada una de ellas debe ser una funcion",()=> {
        const container = new Container()
        expect(typeof container.addActivity).toBe("function")
        expect(typeof container.filterActivity).toBe("function")
        expect(typeof container.showActivity).toBe("function")
        expect(typeof container.deleteActivity).toBe("function")

    })
})

describe("addActivity debe debe recibir 4 parametros", () => {
    it("titulo debe ser string, descripcion debe ser string, imagen debe ser string, numero debe ser string",()=>{
        const container = new Container()
        container.addActivity("pesca","pescar Peces", "IMG", 1)
        const actividad = container.container[0]

        expect(typeof actividad.titulo).toBe("string")
        expect(typeof actividad.descripcion).toBe("string")
        expect(typeof actividad.img).toBe("string")
        expect(typeof actividad.id).toBe("number")
    } )
})


describe("filterActivity ",()=>{
    it("debe devolver un array con el titulo de la actividad que se le pasa por parametro", () =>{
        const container = new Container()
        container.addActivity("pesca","pescar Peces", "IMG", 1)
        
        const result = container.filterActivity("pesca")
        
        expect(Array.isArray(result)).toBeTrue()
        expect(result.length).toBe(1)
        expect(result[0]).toBeInstanceOf(Actividad); 
        expect(result[0].titulo).toBe("pesca")
    })

})

describe("showActivity debe mostrar un console.log", () => {
    it("debe llamar a console.log con el contenido de container", () => {
    const container = new Container();
    const logSpy = spyOn(console, 'log');
    container.showActivity();
    expect(logSpy).toHaveBeenCalledWith(container.container);
    });
});


describe("deleteActivity debe eliminar una actividad", () => {
    it("debe eliminar el objeto que tenga el mismo ID", () => {
        const container = new Container();
        container.addActivity("pesca", "pescar Peces", "IMG", 1);
        
        // Guardamos el tamaño original del contenedor antes de eliminar
        const originalSize = container.container.length;

        // Llamamos a la función deleteActivity
        container.deleteActivity(1);

        // Verificamos que el tamaño del array haya disminuido
        expect(container.container.length).toBe(originalSize - 1);

        // Verificamos que la actividad con el ID 1 haya sido eliminada
        const deletedActivity = container.container.find(activity => activity.id === 1);
        expect(deletedActivity).toBeUndefined(); // No debería existir
    });
});