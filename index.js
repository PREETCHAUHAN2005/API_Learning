import express from "express";
const app = express();

app.get('/api/products',(req,res) => {
    const products = [
        {id:1, name:'Product 1', price:100,image:'https://images.pexels.com/photos/14589140/pexels-photo-14589140.jpeg'

        },
        {id:2, name:'Product 2', price:200,
            image:'https://images.pexels.com/photos/34002199/pexels-photo-34002199.jpeg'
        },
        {id:3, name:'Product 3', price:300,
            image:'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg'
        },
        {id:4, name:'Product 4', price:400
            ,image:"https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg"
        },
        {id:5, name:'Product 5', price:500,
            image:"https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
        },



    
    ]
    setTimeout(()=>{

        res.send(products);
    },3000);
// https://locallhost.com:573/api/products?search=price

})
const port = process.env.PORT || 5173;
if(req.query.search){
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts);
    // return ;
    process.exit(1);

}

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})