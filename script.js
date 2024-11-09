async function getdata(catname) {
    console.log(catname);

    var apiPath = `https://fakestoreapi.com/products${catname ? '/category/' + catname : ''}`;

    try {    
        var response = await fetch(apiPath);
        var result = await response.json();
        console.log(result);

        
        const container = document.getElementById('product-container');
        container.innerHTML = ''; 

        result.forEach(({ image, price, title }) => {
            const card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
            
            card.innerHTML = `
                <div class='card h-100'>
                    <img src='${image}' alt="${title}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">$${price}</h5>
                        <p class="card-text">${title}</p>
                    </div>
                </div>
            `;
        
            container.appendChild(card);
        });
    }
    catch (error) {
        console.log("Error Fetching Data:", error);
    }
}

document.getElementById('electronics').onclick = function() {
    getdata('electronics');
};

document.getElementById('jewelery').onclick = function() {
    getdata("jewelery");
};

document.getElementById('mens').onclick = function() {
    getdata("men's clothing");
};

document.getElementById('womens').onclick = function() {
    getdata("women's clothing");
};

document.getElementById('submit').onclick = function() {
    var txtdata = document.getElementById('categoryName').value;
    console.log(txtdata);
    
    getdata(txtdata);
    document.getElementById('categoryName').value = '';
};

document.getElementById('home').onclick = function() {
    getdata();
};

document.addEventListener('DOMContentLoaded', () => {
    getdata();
});
