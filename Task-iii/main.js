var form = document.querySelector('form');
var submit = document.querySelector(".submitBtn");
var element = form.elements;
var display = document.querySelector(".output");
var i;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    data();
    form.reset();
});

// Displaying Image 
var loadFile = function (event) {
    i = URL.createObjectURL(event.target.files[0]);
    alert("Image Selectd!!!");
}

function data() {
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var gender = document.createElement("div");
    var course = document.createElement("div");
    var Email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");
    img.src = "images/user-img.jpg";
    img.alt = "student image";
    name.innerHTML = "NAME: " + element[0].value;
    course.innerHTML = "COURSE: " + element[1].value;
    Email.innerHTML = "EMAIL: " + element[2].value;

    if (element[3].checked) { gender.innerHTML = "Gender: Male"; }
    if (element[4].checked) { gender.innerHTML = "Gender: Female"; }
    if (element[5].checked) { skills.innerHTML = "SKILLS: HTML"; }
    if (element[6].checked) { skills.innerHTML = "SKILLS: CSS"; }
    if (element[7].checked) { skills.innerHTML = "SKILLS: JS"; }
    if (element[5].checked && element[6].checked) { skills.innerHTML = "SKILLS: HTML,CSS"; }
    if (element[5].checked && element[7].checked) { skills.innerHTML = "SKILLS: HTML,JS"; }
    if (element[6].checked && element[7].checked) { skills.innerHTML = "SKILLS: CSS,JS"; }
    if (element[5].checked && element[6].checked && element[8].checked) { skills.innerHTML = "SKILLS: HTML,CSS,JS"; }


    if (element[5].value != "") {
        img.src = i;
    }
    div1.appendChild(name);
    div1.appendChild(gender);
    div1.appendChild(course);
    div1.appendChild(Email);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
}