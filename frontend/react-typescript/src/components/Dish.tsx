import "./style/table.css";
import {dishModel} from "./Models/dishModel";
import { AxiosError } from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import HttpService from "./HttpService";
import { Link } from "react-router-dom";

function Dish() {
  const queryClient = useQueryClient();
  const {isLoading, isError, data} = useQuery<dishModel[], AxiosError>(
    "dish", HttpService.getAllDish
  );
  const deleteDish = useMutation(
    (id: number) => HttpService.deleteMenu(id),{
      onSuccess: async () => {
          await queryClient.invalidateQueries("dish");

      }
  }
  );

  return (
    <div className="Dish">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>typeDish</th>
              <th></th>
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
                  <td><Link to={`/updateDish/${el.id}`} >Изменить</Link></td>
                  <td><button onClick={() => {deleteDish.mutate(el.id)}}>Удалить</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dish;
