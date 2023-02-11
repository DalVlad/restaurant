import "./style/table.css";
import {AxiosError} from "axios";
import {typeDishModel} from "./Models/typeDishModel";
import { useMutation, useQuery, useQueryClient } from "react-query";
import HttpService from "./HttpService"
import { Link } from "react-router-dom";

function TypeDish() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery<typeDishModel[], AxiosError>(
    "typeDish",
    HttpService.getAllTypeDish
  );
  const deleteTypeDish = useMutation(
    (id: number) => HttpService.deleteTypeDish(id),{
      onSuccess: async () => {
          await queryClient.invalidateQueries("typeDish");

      }
  }
  );
  return (
    <div className="TypeDish">
      <div className="table">
        {isLoading ? (
          <div>IsLoading</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Тип</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isError && !isLoading && data?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.typeName}</td>
                    <td><Link to={`/updateTypeDish/${el.id}`} >Изменить, создать</Link></td>
                    <td><button onClick={() => {deleteTypeDish.mutate(el.id)}}>Удалить</button></td>
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
