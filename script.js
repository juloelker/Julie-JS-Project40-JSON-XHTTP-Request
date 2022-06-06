
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4) {
    const response = JSON.parse(xhttp.responseText);
    const people = response.names;
    //for loop for each item
    let output = '';
    for (let i = 0; i < people.length; i++) {
      console.log(`${people[i].myName}: ${people[i].age}`);
      output += `<li>${people[i].myName}: ${people[i].age}</li>`;
    }
    //display the items in output list in the DOM;
    document.getElementById('names').innerHTML = output;
  }
};
xhttp.open('GET', 'persons.json', true);
xhttp.send();
