import { useState } from 'react'
import "./productsForm.css";

function ProductsForm(){
    const [product, setProduct] = useState({
        title: '',
        price: '',
        image: '',
        category: '',
    });

    function handleInput(e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...product}
        if(name == "price"){
            text = text * 1;
        }
        copy[name] = text;
        setProduct(copy);
    }

    function save(){
        console.log(product)
    }

    return(
        <div className="product-form">
            <h3>Add Product</h3>

            <div>
                <label className="form-label">Title</label>
                <input onBlur={handleInput} type="text" name="title" className="form-control" />
            </div>
            <div>
                <label className="form-label">Price</label>
                <input onBlur={handleInput} type="text" name="price" className="form-control" />
            </div>
            <div>
                <label className="form-label">Image (url)</label>
                <input onBlur={handleInput} type="text" name="image" className="form-control" />
            </div>
            <div>
                <label className="form-label">Category</label>
                <input onBlur={handleInput} type="text" name="category" className="form-control" />
            </div>
            <div>
                <button onClick={save} className="btn-save">Add Product</button>
            </div>
        </div>
    );
}

export default ProductsForm;