fetch("http://localhost:3000/getproblems")
         .then((res)=>{
           return res.json();
         })
         .then((data)=>{;
           for (let i = 0; i< data.length;i++)
           {
              var id = data[i]._id
              var date = data[i].date
              console.log(id)


              /*var dd = String(date.getDate()).padStart(2, '0');
              var mm = String(date.getMonth() + 1).padStart(2, '0');    
              var yyyy = date.getFullYear();
              var hour = date.getHours();
              var minutes = date.getMinutes();
              var second = date.getSeconds();
              date = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ":" + second;*/

              document.getElementById("ayylmao").innerHTML+=" <li class='list-group-item'> Problem: "+ date+" <button type='button' class='btn btn-primary' href='/problem/" +id+"'>"+"Solve"+"</button></li>";

           }
         })
