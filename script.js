let allProducts = [];

fetch("https://fakestoreapi.com/products").then((response) => response.json()).then((data) => {
    allProducts = data;
    setproducts(data);
  })
  .catch((err) => {
    console.log(err);
  });
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  const searchText = e.target.value.toLowerCase();
  const filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  setproducts(filteredProducts);
});
function setproducts(data) {
  let Htmldata = "";

  data.forEach((item) => {
    Htmldata += `
      <div class="col-md-3 mb-3">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top p-3" alt="noimg" style="height:250px; object-fit:contain">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">$${item.price}</p>
          </div>
        </div>
      </div>
    `;
  });

  productslist.innerHTML = Htmldata;
}