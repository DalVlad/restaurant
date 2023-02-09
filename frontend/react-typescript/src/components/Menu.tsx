import "./style/table.css"
import axios from "axios";
import menuModel from "./menuModel";


const url = "http://localhost:8080/api/menu/";

let menus: menuModel[] = [];
function Menu() {
  axios.get(url).then((res) =>{
    menus = res.data;
    console.log(menus)
  });
  return (
    <div className="Menu">
        <div className="table">
            <table>
                <tr>
                    <tr><th>name</th><th>timeStart</th><th>timeEnd</th><th>dishes</th></tr>
                    {menus.map((el) => (<tr>
                      <td>{el.name}</td>
                      <td>{el.timeStart}</td>
                      <td>{el.timeEnd}</td>
                      <td>{el.dishes.map((el2) => (<div> - {el2.name} : {el2.price} руб.</div>))}</td>
                    </tr>)) }
                </tr>
            </table>
        </div>
    </div>
  );
}

export default Menu;