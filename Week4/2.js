class Person{
    //planet = "Earth";
    constructor(name, planet){
        this.name = name;
    }
    print(){
        console.log("Здравей, " + this.name + " от планетата " + this.planet);
    }
}
Person.prototype.planet = "Земя";
const Peter = new Person("Петър");
const Ivan = new Person("Иван");
const Nikolay = new Person("Николай");

Peter.print();
Ivan.print();
Nikolay.print();
