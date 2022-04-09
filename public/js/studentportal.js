fetch("http://localhost:3000/getproblems")
         .then((res)=>{
           return res.json();
         })
         .then((data)=>{;
           for (let i = 0; i< data.length;i++)
           {
              var id = data[i]._id
              console.log(id)
              document.getElementById("ayylmao").innerHTML+="<a href='/problem/" +id+"'>"+id+"</a><br>";
           }
         })