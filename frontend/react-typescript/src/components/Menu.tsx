import "./style/table.css";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import {menuModel} from "./menuModel";
import HttpService from "./HttpService";

function Menu() {
  const { isLoading, isError, data, error } = useQuery<menuModel[], AxiosError>(
    "menu",
    HttpService.getAllMenu
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
