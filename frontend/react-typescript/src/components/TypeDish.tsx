import "./style/table.css";
import {AxiosError} from "axios";
import {typeDishModel} from "./typeDishModel";
import { useQuery } from "react-query";
import HttpService from "./HttpService"

function TypeDish() {
  const { isLoading, isError, data, error } = useQuery<typeDishModel[], AxiosError>(
    "menu",
    HttpService.getAllTypeDish
  );
  return (
    <div className="Menu">
      <div className="table">
        {isLoading ? (
          <div>IsLoading</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>typeName</th>
              </tr>
            </thead>
            <tbody>
              {!isError && !isLoading && data?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.typeName}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TypeDish;
