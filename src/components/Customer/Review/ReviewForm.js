import React, { useState } from 'react';

const ReviewForm = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit=()=> {
    console.log('test')
  }
  return (
    <section className="col-md-10" style={{background: '#E5E5E5', borderRadius:'15px'}}>
      
      <form onSubmit={handleSubmit}>
      
        
        <div className="form-group col-md-5 col-sm-12 col-12">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name"
            />
          </div >
          <div className="form-group col-md-5 col-sm-12 col-12">
         
          <input  onChange={handleBlur} type="text"  className="form-control" name="name" placeholder="Designation,Company's name "/>
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

export default ReviewForm;