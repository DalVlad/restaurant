import "./style/forma.css";
import { useQuery } from "react-query";
import { Formik } from "formik";
import { dishModel } from "./Models/dishModel";
import { useParams } from "react-router";
import { AxiosError } from "axios";
import HttpService from "./HttpService";

const UpdateDish = () => {
  let { id } = useParams();
  let idDish = parseInt(id!);
  const { isLoading, data } = useQuery<dishModel, AxiosError>(
    ["dish", id],
    () => HttpService.getDish(idDish)
  );

  return (
    <div className="updateDish">
      <div className="forma">
        {isLoading ? (
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
              // values.typeDish.id = values.typeDish.id;
              HttpService.updateDish(data!.id, values);
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
                <input
                  type={"numder"}
                  onChange={props.handleChange}
                  value={props.values.typeDish.id}
                  name="typeDish.id"
                /></div>
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default UpdateDish;
