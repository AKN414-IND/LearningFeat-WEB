document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");

    fetch('p.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((person, index) => {
                const personInfo = document.createElement("p");
                personInfo.textContent = `Person ${index + 1}: Name - ${person.name}, Age - ${person.age}`;
                list.appendChild(personInfo);
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
});
