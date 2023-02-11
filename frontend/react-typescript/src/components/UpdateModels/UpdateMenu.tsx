import "../style/forma.css";
import { useQuery } from "react-query";
import { Formik } from "formik";
import { dishModel } from "../Models/dishModel";
import { useParams } from "react-router";
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
  const dishAll = useQuery<dishModel[], AxiosError>(
    ["dishes"],
    HttpService.getAllDish
  );
  return (
    <div className="updateMenu">
      <div className="forma">
        {isLoading ? (
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
              HttpService.updateMenu(values.id, values);
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
                    </div>
                    <button type="submit">Изменить</button>
                    <button type="submit" onClick={() => props.values.id = 0}>Создать</button>
                    </form>
                    <div>
                <label>В меню</label>
                  <div className="inMenu">
                    {props.values.dishes.map((el) => (
                        <p key={el.id}>- {el.name} : {el.price} руб.</p>
                    ))}
                  </div>
                  </div>
                </div>
                <div>
                    <div>
                    <label>Доступные блюда для добавления</label>
                    {dishAll.data?.map((el) => (
                    <div key={el.id}>
                        <p>- {el.name} : {el.price} руб.</p> 
                    </div>
                    ))}
                    </div>
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
