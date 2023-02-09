import "./style/table.css"
import axios from "axios";
import dishModel from "./dishModel";

const url = "http://localhost:8080/api/dish";
let dishes: dishModel[] = [];
function Dish() {
    axios.get(url).then((res) =>{
        dishes = res.data;
        console.log(dishes)
      });
  return (
    <div className="Menu">
        <div className="table">
            <table>
                <tr>
                    <tr><th>name</th><th>price</th><th>typeDish</th></tr>
                    {dishes.map((el) => (<tr>
                      <td>{el.name}</td>
                      <td>{el.price} руб.</td>
                      <td>{el.typeDish.typeName}</td>
                    </tr>)) }
                </tr>
            </table>
        </div>
    </div>
  );
}

export default Dish;