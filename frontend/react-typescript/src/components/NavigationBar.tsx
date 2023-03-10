import { Route, Routes, Link} from "react-router-dom";
import "./style/navigationBar.css"
import Menu from "./Menu"
import Dish from "./Dish";
import TypeDish from "./TypeDish";
import UpdateDish from "./UpdateModels/UpdateDish";
import UpdateTypeDish from "./UpdateModels/UpdateTypeDish";
import UpdateMenu from "./UpdateModels/UpdateMenu";



function NavigationBar() {
  return (
    <div className="NavigationBar">
        <div className="link">
            <Link to="menus">Menu</Link>
            <Link to="dishes">Dish</Link>
            <Link to="typeDish">TypeDish</Link>
        </div>
        <div className="body">
            <Routes> 
                <Route path="/menus" element={< Menu />} />
                <Route path="/dishes" element={< Dish />} />
                <Route path="/typeDish" element={< TypeDish />} />
                <Route path="/updateDish/:id" element={< UpdateDish />} />
                <Route path="/updateTypeDish/:id" element={< UpdateTypeDish />} />
                <Route path="/updateMenu/:id" element={< UpdateMenu />} />
            </Routes>
        </div>
    </div>
  );
}

export default NavigationBar;