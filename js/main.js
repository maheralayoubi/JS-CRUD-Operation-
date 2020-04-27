// Importing the database function
import productdb, {
    bulkcreate
} from './Module.js';

// Spicifying arguments
let db = productdb("Productdb", {
    products: `++id, name, seller, price`
});

// Input Tags
const userid = document.getElementById("user-id");
const proname = document.getElementById("product-name");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

// Buttons
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

// Insert vlue using ceate button
btncreate.onclick = (event) => {
    let flag = bulkcreate(db.products, {
        name: proname.value,
        seller: seller.value,
        price: price.value
    })
    console.log(flag);

    proname.value = seller.value = price.value = "";
}

const getData = () => {

}