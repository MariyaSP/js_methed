'use strict';
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'],
studentsFailed = ['Сидоров', 'Смирнов', 'Попов'];

let success = [];
const filter = (all, failed) =>{
    all.forEach(elem => {
        if(!failed.includes(elem)){
            success.push(elem)
        }
    });
    console.log(`Студенты, которые смогли: ${success}`);
}

filter(allStudents, studentsFailed);