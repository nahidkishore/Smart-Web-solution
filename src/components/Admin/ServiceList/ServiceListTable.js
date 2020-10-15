import React from 'react';

const ServiceListTable = ({serviceList}) => {
  return (
    <table className="table table-borderless table-hover">
    <thead>
          <tr>
          <th className="text-secondary text-left" scope="col">Sr No</th>
          <th className="text-secondary" scope="col">Name</th>
          <th className="text-secondary" scope="col">Email ID</th>
          <th className="text-secondary" scope="col">service</th>
          <th className="text-secondary" scope="col">Project Details</th>
          
          </tr>
      </thead>
      <tbody>
          {
            serviceList.map((list, index) => 
                  
              <tr>
                  <td>{index + 1}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.title}</td>
                  <td>{list.details}</td>
              
                 
              </tr>
              )
          }
      </tbody>

</table>
  );
};

export default ServiceListTable;