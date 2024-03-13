import React, { useState } from 'react';
import '../style.css'
const ReviewForm = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      rate: rate,
      description: description // Fix typo here
    };
    setData([...data, obj]);
    setName('');
    setRate(0);
    setDescription('');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="enter your product name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <label>Rate:</label>
        <input type="number" placeholder="enter your rate" value={rate} onChange={(e) => setRate(e.target.value)} />
        <br /><br />
        <label>description:</label>
        <textarea cols="15" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <br />
        <input type="submit" />
        <input type="reset" value="reset" />
      </form>
      {data.map((e, id) => (
        <div key={id}>
          <div className=""></div>
          <h2>{e.name}</h2>
          <p>{e.rate}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewForm;
