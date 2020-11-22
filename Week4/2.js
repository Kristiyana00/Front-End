class Person{
    //planet = "Earth";
    constructor(name, planet){
        this.name = name;
        this.planet = "Земя";
    }
    print(){
        console.log("Здравей, " + this.name + " от планетата " + this.planet);
    }
}
const Peter = new Person("Петър");
const Ivan = new Person("Иван");
const Nikolay = new Person("Николай");

Peter.print();
Ivan.print();
Nikolay.print();
