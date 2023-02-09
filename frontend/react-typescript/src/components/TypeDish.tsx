import "./style/table.css"
import axios from "axios";
import typeDishModel from "./typeDishModel";


const url = "http://localhost:8080/api/typeDish/";
let typeDishes: typeDishModel[] = [];
function TypeDish() {
    axios.get(url).then((res) =>{
        typeDishes = res.data;
        console.log(typeDishes)
      });
  return (
    <div className="Menu">
        <div className="table">
            <table>
                <tr>
                    <tr><th>name</th></tr>
                    {typeDishes.map((el) => (<tr>
                      <td>{el.typeName}</td>
                    </tr>)) }
                </tr>
            </table>
        </div>
    </div>
  );
}

export default TypeDish;