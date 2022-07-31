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
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>

                        <div>Current: ${item.current.price}</div>
                        <div>Today: ${item.today.price}</div>
                        <div>Members: ${item.members}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('items').innerHTML = document.getElementById('items').innerHTML + x;
    }
}

loadItems();