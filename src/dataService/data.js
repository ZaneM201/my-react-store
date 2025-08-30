var products = [
    {
        id:1,//id is unique
        title:"Phone",
        pirce:999,
        image:"Smartphone.jpeg",
        category:"smartphones",
    },
    {
        id:2,//id is unique
        title:"Smart TV",
        pirce:600,
        image:"Smart TV.jpeg",
        category:"smart tv",
    },
    {
        id:3,//id is unique
        title:"Laptop",
        pirce:500,
        image:"Laptop.jpeg",
        category:"computers",
    },
    //add more products if you want
]

class DataService {
    getProducts(){
        return products;
    }
}
export default DataService;