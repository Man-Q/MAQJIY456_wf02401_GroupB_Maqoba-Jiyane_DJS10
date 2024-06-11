import React, { useState, useEffect } from 'react';
import './FetchData.css';

const FetchData = ({ setHasError }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setHasError(false); // No error, so set to false
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        setHasError(true); // Error occurred, so set to true
      });
  }, [setHasError]); 

  if (loading) {
    return <div className="centered-container">Loading...</div>;
  }

  if (error) {
    return <div className="error">Data fetching failed</div>;
  }

  return (
    <div className='centered-container'>
        {data.map(item => (
            <div>
                <h2>{item.id}. {item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
  );
};

export default FetchData;
