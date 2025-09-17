import './admin.css';
import CouponsForm from '../components/couponsForm';
import ProductsForm from '../components/productsForm';

function Admin(){
    return(
        <div className="admin">
            <h1>Welcome to the Admin</h1>

            <div className="admin-cards">

                <ProductsForm/>
                <CouponsForm/>

            </div>
        </div>
    );
}

export default Admin;