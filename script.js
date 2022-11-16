let form = document.createElement('form');
let inputFields = [];

bodyStyling = () => {

    const body = document.querySelector('body');

    body.style.minHeight = "100vh";
    body.style.width = "100%";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    body.style.padding ="0";
    body.style.margin = "0";

    body.append(form)
}

formStyle = () => {
 form.id = "form";
 form.className = "form";
 form.style.height = "45vh";
 form.style.width = "20%";
 form.style.background = "white";
 form.style.borderRadius = "3%";
 form.style.display = "flex";
 form.style.flexDirection = "column";
 form.style.alignItems = "center";
 form.style.justifyContent = "center";
 form.style.gap = "15%";
 form.style.boxShadow = "1px 1px 7px black"
 

 for(x=0; x<1; x++){

    
    let button = document.createElement('button');
    button.type = "button";
    button.id = "submitBtn";
    button.innerHTML ="Submit"

    inputFields[x] =  document.createElement('input');
    inputFields[x].style.width = "70%";
    inputFields[x].style.height = "5vh";
    inputFields[x].placeholder ="Salary.."

    button.style.backgroundColor = "#9D46F9";
    button.style.border = "none";
    button.style.color = "white";
    button.style.height = "5vh";
    button.style.width = "30%";
    button.style.borderRadius = "10%"

    button.addEventListener("click",storeSalary)


    form.append(inputFields[x])
    form.append(button)
 }


}

function storeSalary(){
  let salary = Number(inputFields[0].value);

  console.log(salary);
  
  
}
bodyStyling();
formStyle();