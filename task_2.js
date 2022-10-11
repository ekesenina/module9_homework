//Вариант 1
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
   
   const data = JSON.parse(jsonString);
   
   console.log(data);


//Вариант 2
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
   
   const data = JSON.parse(jsonString);
   const list = data.list;
   const result = [];
   
   
   list.forEach(node => {
     let person = {
       name: node.name,
       age: node.age,
       prof: node.prof
     }
    result.push(person);
   })
   
   console.log(result)
