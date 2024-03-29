import Student from './class/ClassStudent';
import Person from "./class/ClassPerson";
import IpessoaFuncionaria from './interfaces/IPessoaFuncionaria';
import Subject from './class/ClassSubject';
import Teacher from './class/ClassTeacher';

const pessoa1 = new Person("Anna",new Date('1955/03/20'));

console.log(pessoa1);

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
carolina.worksGrades = [10,20];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);


const testInterfaceEmployee: IpessoaFuncionaria = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);


const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(lucio);

console.log(math);
console.log(story);
console.log(philosophy);