//Creates a new form to create a new probelm
function createProblem()
{
  //Firstly, we create a new tag for form
  let problem = document.createElement("div");

  //Create a new date for the identifier
  let date = createProblemDate();

  //Next, create the id of the problem using problemNum
  problem.setAttribute("id", date);

  //Next, create a new paragraph that will store the date
  let problemTitle = document.createElement("p");

  //Set inner html of problemTitle to be date
  problemTitle.innerHTML = "Problem: " + date;

  //Attach problemTitle to problem
  problem.appendChild(problemTitle);

  //Create a new form for problem
  let form = createProblemForm();

  //Attach form to problem
  problem.appendChild(form);

  //Attach problem to problemForms
  window.document.querySelector("#problemForms").appendChild(problem);
  
}

//Generates a new date for the problem
function createProblemDate()
{
  //Create a new data object
  let today = new Date();

  console.log(today);

  //Get the day of datae
  var dd = String(today.getDate()).padStart(2, '0');

  //Get the month 
  var mm = String(today.getMonth() + 1).padStart(2, '0');       

  //Get the year
  var yyyy = today.getFullYear();

  //Get the hour
  var hour = today.getHours();

  //Get minutes
  var minutes = today.getMinutes();

  //Get second
  var second = today.getSeconds();

  //Set today to be in the form month/day/year
  today = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minutes + ":" + second;

  

  //Return today
  return today;
}

//Create the problem form for the problem
function createProblemForm()
{
    //Firstly, create a new form
    let form = document.createElement("form");

    //Create a new input for variable
    form = createTextBox("variable", "Varaible", form);

    //Create a new input for Value #1
    form = createTextBox("value1", "Value #1", form);

    //Create a new input for operator
    form = createTextBox("operator", "Operator", form);

    //Create a new input for value #2
    form = createTextBox("value2", "Value #2", form);

    //Create the submit button
    form = createSubmit("submit", "Create Problem", form)

    //Return form
    return form;
}

//Create a submit for problem
function createSubmit(id, inner, form)
{
    //Firstly, create a new input using id and type
    let input = document.createElement("input");

    //Set input's id
    input.setAttribute("id", id);

    //Set input's name
    input.setAttribute("name", id);

    //Set input's type
    input.setAttribute("type", "submit")

    //Set inputs's value
    input.setAttribute("value", inner);

    //Create the label
    let label = createProblemLabel(id, inner);

    //Next, attach label to form
    form.appendChild(label);

    ///Next, add a new break to form
    form.appendChild(document.createElement("br"));

    //Next, add input to form
    form.appendChild(input);

    //Add another break
    form.appendChild(document.createElement("br"));

    //Return form
    return form;
}

//Create the text box for problem
function createTextBox(id, inner, form)
{
    //Firstly, create a new input using id and type
    let input = createProblemInput(id, "text");

    //Create the label
    let label = createProblemLabel(id, inner);

    //Next, attach label to form
    form.appendChild(label);

    ///Next, add a new break to form
    form.appendChild(document.createElement("br"));

    //Next, add input to form
    form.appendChild(input);

    //Add another break
    form.appendChild(document.createElement("br"));

    //Return form
    return form;
}

//Create an input for from
function createProblemInput(id, type)
{
     //Firstly, create a new input
     let input = document.createElement("input");

     //Next, set id of input to be varaible
     input.setAttribute("id", id);
 
     //Next, set the name of the input to be variable
     input.setAttribute("name", id);
 
     //Next, set its type to be a text box
     input.setAttribute("type", type);
 
     //Return input
     return input
}

//Create the label for variable input
function createProblemLabel(id, inner)
{
    //Firstly, create a new labl
    let label = document.createElement("label");

    //Set the for of the label using id
    label.setAttribute("for", id);

    //Set the inner html of label to be inner
    label.innerHTML = inner;

    //Return label
    return label;
}

createProblem();