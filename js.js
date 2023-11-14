let list = [];

const newToDo = document.querySelector("input");
const sectionTag = document.querySelector("section");

document.querySelector('#form').addEventListener("submit", function(event){
    event.preventDefault();

list = newToDo.value;

let template =
`
<ul>
    <li>${list}</li>
</ul>
`;

sectionTag.innerHTML = template;

});