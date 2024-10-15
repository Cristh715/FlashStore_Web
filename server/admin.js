const {updateImgProduct} = require("./models/productos.model.js")

const id = 7;
const img = "https://smartmovilrd.com/wp-content/uploads/2023/04/mi-11-lite.png";
updateImgProduct(id,img, (err, results) => { 
    if(err)
        console.log(err)
    else
        console.log("Listo")});