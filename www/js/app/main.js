const setEditModal = (isbn) => {
  // We will implement this later
}

const deleteBook = (isbn) => {
  // We will implement this later
}

const loadItems = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/", false);
  xhttp.send();

  const items = JSON.parse(xhttp.responseText);

  for (let item of items['items']) {
      const x = `
          <div class="col-4">
              <div class="card">
              <button class="collapsible"><h4 class="card-title">${item.name}</h4></button>
                  <div class="card-body content">
                      <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>

                      <div>Current: ${item.current.price}</div>
                      <div>Today: ${item.today.price}</div>
                      <div>Members: ${item.members}</div>
                  </div>
              </div>
          </div>
      `

      document.getElementById('items').innerHTML = document.getElementById('items').innerHTML + x;
  }
}

loadItems();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// const fs = require('fs');

// const jquery = require('jquery');

// const obj = {hello: 'world'};

// const request = new Request('https://localhost:3000/', {
//   method: 'GET',
// //   body: JSON.stringify(obj)
//  });

// console.log(JSON.stringify(request));

// let me = (req, res, next) => {
//     request({
//       uri: 'http://localhost:3000/',
//       headers: {
//         "Accept": "application/json",
//       }
//      // You can set json:true here so that you don't have to do JSON.parse below.
//     }, (err, response, body)=>{
//       //body is the json body
//       const jsonBody = JSON.parse(body);
//       //do something with json request
//       console.log(jsonBody)
//       return res.json(jsonBody);
//     })
//   };

// console.log(me)
// let res = request.json().then(function(data) {
//   // do something with the data sent in the request
//     s => {
//         // console.log(s);
//         // makeItems();
//         return data
//     },
//         f => {
//         return
//     }
// });

// let data = JSON.parse(request, 'utf-8');
// let data = res;
// console.log(data.length);

// function makeItems(data) {
//     var items = document.getElementById('items');

//     for(var i = 0; i < data.length; i++){ 
//         var card = document.createElement("div");
//         card.className = 'item';
//         items.appendChild(card);

//         let item = data['items'][i];
//         console.log(item.name);

//         let name = document.createElement("h2");
//         name.textContent = item.name;
//         let description = document.createElement("p");
//         description.textContent = item.description;
//         let price = document.createElement("p");
//         price.textContent = item.current.price;
//         let image = document.createElement("img");
//         image.src = item.icon;

//         card.appendChild(name);
//         card.appendChild(description);
//         card.appendChild(price);
//         card.appendChild(image);

//     }
// };
// makeItems(me);