import "../style/forma.css";
import { useQuery } from "react-query";
import { Formik } from "formik";
import { useParams } from "react-router";
import { AxiosError } from "axios";
import HttpService from "../HttpService";
import { typeDishModel } from "../Models/typeDishModel";

const UpdateTypeDish = () => {
  let { id } = useParams();
  let idTypeDish = parseInt(id!);
  const { isLoading, data } = useQuery<typeDishModel, AxiosError>(
    ["typeDish", id],
    () => HttpService.getTypeDish(idTypeDish)
  );
  return (
    <div className="updateTypeDish">
      <div className="forma">
        {(isLoading) ? (
          <div>IsLoading</div>
        ) : (
          <Formik  
              initialValues={{
              id: data!.id,
              typeName: data!.typeName,
            }}
            onSubmit={(values) => {
              HttpService.updateTypeDish(values.id, values);
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div><label htmlFor="name">Тип</label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.typeName}
                  name="typeName"
                /></div>
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

export default UpdateTypeDish;
