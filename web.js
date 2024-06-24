ab  = document.querySelector(".ask");
abse = document.querySelector(".welcome")
ab.style.display = "none";
display = 0;
llamr = localStorage.getItem("name")
if (llamr == null) {
    llamr = "User"
}
abse.innerHTML = `<h1 class="welcome">${llamr}'s To Do List</h1>`;


 function ask1() {
    ab.innerHTML = "<h3 style = 'font-size: 30px; display: inline; margin-right: 30vw;'>What is Your Name?</h3>    <input type='text' id='input' placeholder='Enter text' style = 'border: none; display: inline; width: 30vw; height: 5vh'> <button onclick='submit()'>Submit</button>";

    if (display == 1) {
        ab.style.display = 'block';
        display = 0;
    }
    else {
        ab.style.display = 'none';
        display =1;
    }
 }

 function submit() { 
    let hi = document.getElementById("input"); 
    let llamarse = hi.value; 
  
    ask1();
    localStorage.setItem('name',llamarse);
    abse.innerHTML = `<h1 class="welcome">${llamarse}'s To Do List</h1>`;

 }

