class Person{
        getSecretSalaryInfo(){
        let _salary = 1000;
        function printSalary()
        {
            return _salary;
        }
        console.log(printSalary());
    }
}

const person = new Person();
person.getSecretSalaryInfo();
