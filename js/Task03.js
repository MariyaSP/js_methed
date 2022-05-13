'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (name, pref) =>{

    name.forEach((elem, i) => {
        name[i] = `${pref} ${elem}`;
        
    });
    console.log(name);
    
}; 

addPrefix(names, 'Mr')