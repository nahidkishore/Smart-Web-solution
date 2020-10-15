import React, { useContext, useState } from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";


const AddService = () => {
  const [addService, setAddService] = useState(null);
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newService = { ...addService };
    newService[e.target.name] = e.target.value;
    setAddService(newService);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", addService.title);
    formData.append("description", addService.description);

    fetch("https://secure-fortress-41944.herokuapp.com/addServices", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        /* alert('Service Added Successfully')
             history.push('/') */
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className=" m-2 row">
        <div className="col-md-4">
          
          <img src="https://iili.io/3Hsc3N.png" alt="" className="img-fluid" width="60%" />
        </div>
        <div className="col-md-4 d-flex justify-content-start">
          <h1>Add Service</h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          {/*  <h2>{loggedInUser.name}</h2> */}
        </div>
      </div>
      <div className="container-fluid row ml-5 mt-5">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8  order-Form">
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
                  required
                />
              </div>
              <div className="form-group col-md-3 col-sm-12 col-12">
                <label htmlFor="exampleInputFile">Icon</label>
                <input
                  onChange={handleFileChange}
                  type="file"
                  className="form-control"
                  placeholder="Upload image"
                  required
                />
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
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success d-flex justify-content-end align-items-end"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
