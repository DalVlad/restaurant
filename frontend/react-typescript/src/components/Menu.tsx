import "./style/table.css";
import { AxiosError } from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {menuModel} from './Models/menuModel'
import HttpService from "./HttpService";
 
function Menu() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery<menuModel[], AxiosError>(
    "menu",
    HttpService.getAllMenu
  );
  const deleteMenu = useMutation(
    (id: number) => HttpService.deleteMenu(id),{
      onSuccess: async () => {
          await queryClient.invalidateQueries("menu");

      }
  }
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
                <th>name</th>
                <th>timeStart</th>
                <th>timeEnd</th>
                <th>dishes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isError &&
                !isLoading &&
                data?.map((el) => (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.timeStart}</td>
                    <td>{el.timeEnd}</td>
                    <td>
                      {el?.dishes?.map((el2) => (
                        <div key={el2.id}>
                          {" "}
                          - {el2?.name} : {el2?.price} руб.
                        </div>
                      ))}
                    </td>
                    <td><button onClick={() => {deleteMenu.mutate(el.id)}}>Удалить</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Menu;
