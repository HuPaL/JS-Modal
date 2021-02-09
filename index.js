let fruits = [
    { id: 1, price: 20, title: 'Apple', img: '/img/apple.jpg' },
    { id: 2, price: 30, title: 'Orange', img: '/img/orange.jpg' },
    { id: 3, price: 40, title: 'Mango', img: '/img/mango.jpg' },
]

const toHTML = fruit => `
  <div class="col-4">
    <div class="card">
        <img src="${fruit.img}" class="card-img-top " alt="${fruit.title} ">
        <div class="card-body ">
            <h5 class="card-title ">${fruit.title}</h5>
            <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="# " class="btn btn-primary " data-view="price" data-id="${fruit.id}">View</a>
            <a href="# " class="btn btn-danger " data-view="remove" data-id="${fruit.id}">Delete</a>
        </div>
    </div>
</div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html;
}

render();

const modal = $.modal({
    title: 'Fruit Price',
    closable: true,
    width: '400px',
    footerButtons: [{
        text: 'Close',
        class: 'secondary',
        handler() {
            console.log("Button primary clicked");
            modal.close()
        }
    }]
});


document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.view;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id)
    if (btnType === 'price') {
        modal.setContent(`
        <p>Price for ${fruit.title}: <strong>${fruit.price}</strong></p>
        `)
        modal.open();
    } else if (btnType === 'remove') {
        $.confirm({
                title: 'Are you sure',
                content: `<p>You delete ${fruit.title}</p>`
            }).then(() => {
                console.log("REmove")
                fruits = fruits.filter(f => f.id !== id)
                render()
            })
            .catch(() => {
                console.log("Cancel")
            })
    }
})