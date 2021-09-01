// Work number one
const student = {
    name:'Anik',
    id: 004,
    dept:{
        department: 'cse',
        course: 'Bse in cse'
    },
    friedsName:['jamal', 'kamal', 'monsur', 'rony', 'jihad'],
    treadDay: function(){
    //    console.log(this)
    }
}

student.treadDay.call(student.name);
student.treadDay.call(student.dept.course);
student.treadDay.call(student.friedsName[2]);

// work number 2 to declire object 

const templateObject = `My name Is ${student.name}. I am Student of ${student.dept.course}.My Best Friend Name Is ${student.friedsName[2]}`
console.log(templateObject);