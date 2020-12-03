import React from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
const ServiceListTable = ({ services }) => {
  const { name, email, title, details, status, _id } = services;
  const user = JSON.parse(sessionStorage.getItem("user"));
  const handleStatusChange = (value, id) => {
    fetch(`https://secure-fortress-41944.herokuapp.com/updateStatus/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          window.location.reload();
        }
      });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{details}</td>
      <td>
        <SplitButton className={`statusButton-${status}`} title={status}>
          <Dropdown.Item
            className="pending-dropdownItem"
            onClick={() => handleStatusChange("pending", _id)}
          >
            Pending
          </Dropdown.Item>
          <Dropdown.Item
            className="ongoing-dropdownItem"
            onClick={() => handleStatusChange("ongoing", _id)}
          >
            Ongoing
          </Dropdown.Item>
          <Dropdown.Item
            className="done-dropdownItem"
            onClick={() => handleStatusChange("done", _id)}
          >
            Done
          </Dropdown.Item>
        </SplitButton>
      </td>
    </tr>

    
  );
};

export default ServiceListTable;
