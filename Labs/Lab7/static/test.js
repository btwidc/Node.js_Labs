function start() {
  loadJSON();
  loadXML();
  //testPost();
}

function loadJSON() {
  let result = document.getElementById('json');
  fetch('http://localhost:5000/test.json')
    .then(response => response.json())
    .then(response => {
      result.innerText = JSON.stringify(response);
    });
}

function loadXML() {
  let result = document.getElementById('xml');
  fetch('http://localhost:5000/test.xml')
    .then(response => response.text())
    .then(response => {
      result.innerText = response;
    });
}

/*
function testPost() {
  fetch('http://localhost:5000/test.png', {
    method: 'POST'
  });
}
*/