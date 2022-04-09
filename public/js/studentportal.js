fetch("http://localhost:3000/getproblems")
         .then((res)=>{
           return res.json()
         })
         .then((data)=>{
           console.log(data)
         })
