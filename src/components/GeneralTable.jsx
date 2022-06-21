import React from "react";
import { Icon, Table } from "react-materialize";

const GeneralTable = ({
  title,
  data,
  header1,
  header2,
  header3,
  detail,
  remove,
}) => {
  return (
    <>
      <section className="main-box">
        <h4>{title}</h4>
        <Table centered striped>
          <thead>
            <tr>
              <th>{header1}</th>
              <th>{header2}</th>
              <th>{header3}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => {
              return (
                <tr key={element.id}>
                  <td onClick={() => detail(element.id)}>{element.name}</td>
                  <td>
                    {element.director} {element.lastName}
                  </td>
                  <td>{element.state}</td>
                  <td>
                    <Icon onClick={() => remove(element.id)}>delete</Icon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default GeneralTable;
