class student{

    static count=0; 

    

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     

   }

   Eligible(){

       if(this.marks > 40){

           console.log("pass");

       }

       else{

           console.log("fail");

       }

   }
}

const pragyan=new student('pragyan',21,1234,50);

const ankita=new student('ankita',15,2345,35);

const rajesh=new student('rajesh',16,4567,60);

const viky=new student('viky',17,7891,70);

const soma=new student('soma',19,3456,80);

pragyan.Eligible();
console.log(student.countStudent());

ankita.Eligible();
console.log(student.countStudent());

rajesh.Eligible();
console.log(student.countStudent());

viky.Eligible();
console.log(student.countStudent());

soma.Eligible();
console.log(student.countStudent());

//2//
class Student{

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMark) => {
            console.log('inside eligibleForCurrentCompany' , this)
            if(this.marks>minMark && this.age>minPlacementAge){
                console.log(this.name  + " is ready for placement")
            } else{
                console.log(this.name + "is not ready for placement")
            }
        }
    }
}
const mona=new Student('mona',21,1234,50);
mona.setPlacementAge(18)(40)
