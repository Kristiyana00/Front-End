class Person{
    //planet = "Earth";
    constructor(name, planet){
        this.name = name;
        this.planet = planet;
    }
    print(){
        console.log("Здравей, " + this.name + " от планетата " + this.newplanet);
    }
}
Person.prototype.newplanet = "Earth";
const Peter = new Person("Peter", "Mars");
const Ivan = new Person("Ivan", "Venus");
const Nikolay = new Person("Nikolay", "Neptune");

Peter.print();
Ivan.print();
Nikolay.print();
