import React from "react";
import { Col, Collection, CollectionItem, Icon, Row } from "react-materialize";

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
      <h5>{title}</h5>

      <Row>
        <Col m={6} s={12}>
          <Collection>
            {data.map((element, index) => {
              return (
                <CollectionItem className="avatar" key={index}>
                  <span className="title" onClick={() => detail(element.id)}>
                    {header1}: {element.name} {element.lastName}
                  </span>
                  <p>
                    {header2}: {!element.ci ? element.director : element.ci}
                    <br />
                    {header3}: {!element.ci ? element.state : element.academy}
                  </p>
                  <Icon
                    className="secondary-content"
                    onClick={() => remove(element.id)}
                  >
                    delete
                  </Icon>
                </CollectionItem>
              );
            })}
          </Collection>
        </Col>
      </Row>

      {/* <section className="main-box">
        <h5>{title}</h5>
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
                  <td>{!element.ci ? element.state : element.ci}</td>
                  <td>
                    <Icon onClick={() => remove(element.id)}>delete</Icon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section> */}
    </>
  );
};

export default GeneralTable;
