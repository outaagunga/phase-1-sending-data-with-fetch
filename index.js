//Write your code here

function submitData(name, email) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name, email })
  };

  return fetch('http://localhost:3000/users', requestOptions)
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML += data.id;
    })
    .catch(error => {
      document.body.innerHTML += error.message;
    });
}

module.exports = submitData;
