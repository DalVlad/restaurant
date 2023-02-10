import "./style/table.css";
import {dishModel} from "./dishModel";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import HttpService from "./HttpService";

function Dish() {
  const {isLoading, isError, data, error} = useQuery<dishModel[], AxiosError>(
    "menu", HttpService.getAllDish
  );
  return (
    <div className="Menu">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>typeDish</th>
            </tr>
          </thead>
          <tbody>
            {!isError && !isLoading && data?.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>
                    {el?.typeDish?.typeName}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dish;
