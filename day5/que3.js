console.log("Question 3");



async function fetchtodos()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
     data = await response.json();

    //console.log(data);
}




const completedTodos = [];

const todos = new Promise((resolve,reject)=>{
    let data;

   if(fetchtodos())
   {
        resolve({
            data.filter(d =>return if(d.completed == true));
        });
   }
   else
   {
        reject("an error occured");
   }


})

todos
.then(data => console.log(data))
.catch(error => console.log(error))