class Person{
    //planet = "Earth";
    constructor(name){
        this.name = name;
        this.planet = "Earth";
    }
    print(){
        console.log("Здравей, " + this.name + " от планетата " + this.planet);
    }
}

const Peter = new Person("Peter");
const Ivan = new Person("Ivan");
const Nikolay = new Person("Nikolay");

Peter.print();
Ivan.print();
Nikolay.print();