import React, { useState } from "react";
import "../style.css";
const ReviewForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      rate: rate,
      description: description, // Fix typo here
    };
    setData([...data, obj]);
    setName("");
    setRate(0);
    setDescription("");
  };

  return (
    <>
      <div className="add-review">
                <h2>Add Review Here</h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <input
            type="text"
            placeholder="enter your product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>  Rate : </label>
          <input
            type="number"
            placeholder="enter your rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <br />
          <br />
          <label className="dec-lable"> Description : </label>
          <textarea
            cols="24"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" />
          <input type="reset" value="Reset" />
        </form>
      </div>
      <div className="show-review"> <h2>Review</h2></div>
      {data.map((e, id) => (
          <div key={id} className="main">
            <p>Name:{e.name}</p>
            <p>Rate:{e.rate}</p>
            <p>Decription:{e.description}</p>
          </div>
        ))}
    </>
  );
};

export default ReviewForm;
