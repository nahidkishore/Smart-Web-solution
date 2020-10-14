import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const AddServiceForm = () => {
  
 const history=useHistory();
  const [addService, setAddService] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newAddService = { ...addService };
    newAddService[e.target.name] = e.target.value;
    setAddService(newAddService);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", addService.title);
    formData.append("description", addService.description);

    fetch("http://localhost:5000/addAService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('service added successfully')
        history.push('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="col-md-10" style={{background: '#E5E5E5', borderRadius:'15px'}}>
      
      <form onSubmit={handleSubmit}>
      
        <div className="row">
        <div className="form-group col-md-5 col-sm-12 col-12">
            <label htmlFor="exampleInputEmail1">Service Title</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
            />
          </div >
          <div className="form-group col-md-3 col-sm-12 col-12">
          <label htmlFor="exampleInputFile">Icon</label>
          <input  onChange={handleFileChange} type="file"  className="form-control" placeholder="Upload image"/>
          </div>
        </div>
         
          <div className="form-group  col-md-5  col-sm-12 col-12">
            <label htmlFor="exampleInputName">Description</label>
            <textarea
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter description"
              cols="30"
              rows="10"
            />
          </div>
      
          <button type="submit" className="btn btn-success my-2">
            Submit
          </button>
        </form>

    </section>
  );
};

export default AddServiceForm;