//Creates a new form to create a new probelm
function createProblemForm()
{
  //Firstly, we create a new tag for form
  let problem = document.createElement("div");

  //Create a new date for the identifier
  let data = 

  //Next, create the id of the problem using problemNum
  problem.setAttribute("id", "problem" + problemNum);

  //Next, create a new form for problem
  let form = document.createElement("form");

  //
}

//Generates a new date for the problem
function createProblemDate()
{
  //Create a new data object
  let today = new Date();

  //Get the day of datae
  var dd = String(today.getDate()).padStart(2, '0');

  //Get the month 
  var mm = String(today.getMonth() + 1).padStart(2, '0');       

  //Get the year
  var yyyy = today.getFullYear();

  //Set today to be in the form month/day/year
  today = mm + '/' + dd + '/' + yyyy;

  //Return today
  return today;
}

function hello()
{
    console.log("Hello");
}

console.log("Hello");