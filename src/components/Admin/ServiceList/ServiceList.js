import React, { useContext } from "react";
import { useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServiceListTable from "./ServiceListTable";
import { CircularProgress } from "@material-ui/core";
import { Col, Row, Table } from "react-bootstrap";
import { UserContext } from "../../../App";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceList, setServiceList] = useState([]);

  useState(() => {
    fetch("https://secure-fortress-41944.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, []);

  return (
    <div className="service-section">
      <Row className="w-100">
        <Col className="m-0 p-0" sm={4} md={2}>
          <Sidebar></Sidebar>
        </Col>

        <Col className="m-0 p-0" sm={8} md={10}>
          <Row className="title pt-4 pb-2 px-5">
            <Col sm={6} md={6}>
              <h4>All Service List</h4>
            </Col>
            <Col sm={6} md={6} className="d-flex">
              <h5 className="ml-auto">{loggedInUser.name}</h5>
              <img
                className="dashboard-user-image"
                src={loggedInUser.photoURL}
                alt=""
              />
            </Col>
          </Row>

          <div className="m-4 serviceTable">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Project Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {serviceList.length === 0 && <CircularProgress />}
                {serviceList.map((services) => (
                  <ServiceListTable
                    key={services._id}
                    services={services}
                  ></ServiceListTable>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>

    /* <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <h2 className="text-center text-brand">All Service List</h2>
          {serviceList.length === 0 && <CircularProgress />}
          <ServiceListTable serviceList={serviceList} key={serviceList._id}></ServiceListTable>
        </div>
      </div>
    </section> */
  );
};

export default ServiceList;
