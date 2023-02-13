import "../style/forma.css";
import { useQuery } from "react-query";
import { FieldArray, Formik } from "formik";
import { dishModel } from "../Models/dishModel";
import { useNavigate, useParams } from "react-router";
import { AxiosError } from "axios";
import HttpService from "../HttpService";
import { menuModel } from "../Models/menuModel";

const UpdateDish = () => {
  let { id } = useParams();
  let idMenu = parseInt(id!);
  const { isLoading, data } = useQuery<menuModel, AxiosError>(
    ["menu", id],
    () => HttpService.getMenu(idMenu)
  );
  const navigator = useNavigate();
  const dishAll = useQuery<dishModel[], AxiosError>(
    ["dishes"],
    HttpService.getAllDish
  );
  return (
    <div className="updateMenu">
      <div className="forma">
        {isLoading || dishAll.isLoading ? (
          <div>IsLoading</div>
        ) : (
          <Formik
            initialValues={{
              id: data!.id,
              name: data!.name,
              timeStart: data!.timeStart,
              timeEnd: data!.timeEnd,
              dishes: data!.dishes,
            }}
            onSubmit={(values) => {
              HttpService.updateMenu(values.id, values).then(() =>
                navigator("/menus")
              );
            }}
          >
            {(props) => (
              <div className="allDivInMenu">
                <div className="formMenu">
                  <form onSubmit={props.handleSubmit}>
                    <div>
                      <label htmlFor="name">Название меню</label>
                      <input
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.name}
                        name="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeStart">С</label>
                      <input
                        type="time"
                        onChange={props.handleChange}
                        value={props.values.timeStart}
                        name="timeStart"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeEnd">До</label>
                      <input
                        type="time"
                        onChange={props.handleChange}
                        value={props.values.timeEnd}
                        name="timeEnd"
                      />
                    </div>
                    <div>
                      <FieldArray name={"dishes"}>
                        {(arrayHelpers) => (
                          <div>
                            <button
                              onClick={() => arrayHelpers.push({name: " ", id: 0 } as dishModel)}
                              type="button"
                            >
                              Добавить блюдо
                            </button>
                            <table>
                              <thead>
                                <tr>
                                  <th>Блюдо</th>
                                </tr>
                              </thead>
                              <tbody>
                                {props.values.dishes.map((el, index) => (
                                  <tr>
                                    <td>
                                      <select
                                        name={`dishes[${index}].id`}
                                        onChange={props.handleChange}
                                        defaultValue={el.id}
                                      >
                                        {dishAll.data?.map((el2) => (
                                          <option key={el2.id} value={el2.id}>
                                            {el2.name} ({el2.price})
                                          </option>
                                        ))}
                                      </select>
                                    </td>
                                    <td>
                                      <button
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                        type="button"
                                      >
                                        Удалить
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <button type="submit">Изменить</button>
                    <button type="submit" onClick={() => (props.values.id = 0)}>
                      Создать
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default UpdateDish;
