let initBtnName = document.getElementById('btn1').innerHTML;
let btn = document.getElementById('btn1');


let changingThis = 0;
const pi = 3.14159;


let person = {
    name: "tokeey",
    age: 99,
}

 
 

btn.addEventListener('click', _ => {
    btn.innerHTML = "Important Bullshit"
    console.log(person.name)
});

btn.addEventListener('mouseenter', _ => {
    btn.innerHTML = "Important Bullshit"
    console.log(person.name)
});

btn.addEventListener('mouseleave', _ => {
    btn.innerHTML = `${initBtnName}`
    console.log(person.name)
});