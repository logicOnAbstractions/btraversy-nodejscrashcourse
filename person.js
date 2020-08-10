class Person {
    constructor(name="Franck Vee", age=35) {
        this.name = name;
        this.age = age
    }
    greetings(){
        return "hello I'm " + this.name + " and i am " + this.age
    }
}
export {Person}