import "../style/forma.css";
import { useQuery } from "react-query";
import { Formik } from "formik";
import { dishModel } from "../Models/dishModel";
import { useParams } from "react-router";
import { AxiosError } from "axios";
import HttpService from "../HttpService";
import { typeDishModel } from "../Models/typeDishModel";

const UpdateDish = () => {
  let { id } = useParams();
  let idDish = parseInt(id!);
  const { isLoading, data } = useQuery<dishModel, AxiosError>(
    ["dish", id],
    () => HttpService.getDish(idDish)
  );
  const typeDishAll = useQuery<typeDishModel[], AxiosError>(
    ["typeDishes"], HttpService.getAllTypeDish
  );
  return (
    <div className="updateDish">
      <div className="forma">
        {(isLoading ) ? (
          <div>IsLoading</div>
        ) : (
          <Formik  
              initialValues={{
              id: data!.id,
              name: data!.name,
              price: data!.price,
              typeDish: data!.typeDish,
            }}
            onSubmit={(values) => {
              HttpService.updateDish(values.id, values);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div><label htmlFor="name">Название блюда</label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.name}
                  name="name"
                /></div>
                <div><label htmlFor="price">Стоимость</label>
                <input
                  type="number"
                  onChange={props.handleChange}
                  value={props.values.price}
                  name="price"
                /></div>
                <div><label htmlFor="typeDish.id">Тип блюда</label>
                  <select
                    defaultValue={props.values.typeDish.id}
                    onChange={props.handleChange}
                    name="typeDish.id"
                  >
                    {typeDishAll.data?.map((el) => (<option value={el.id} key={el.id}> {el.typeName} </option>))}
                  </select>
                </div>
                <button type="submit">Изменить</button>
                <button type="submit" onClick={() => props.values.id = 0}>Создать</button>
              </form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default UpdateDish;
