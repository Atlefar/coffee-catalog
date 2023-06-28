import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Main.module.css';
import Card from '../UI/Card';

// Main component that fetches data from API, filter and render data.

const Main = ({ search }) => {
  const [data, setData] = useState([]);
// Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://7r7t215usd.execute-api.us-east-1.amazonaws.com/coffee/coffee-drinks');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

// Filter data from API
  const filteredData = data.filter((data) => {
    return (
      data.name.toLowerCase().includes(search.toLowerCase()) && // Search filter
      data.assets.thumbnail.large.uri // Filter data with valid image url
    );
  });

  // Render data from API
  return (
    <div className={classes.container}>
      {filteredData.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            temp={data.formCode}
            image={data.assets.thumbnail.large.uri}
            price={2.45}
            rating={4.5}
            currency={'$'}
          />
        ))}
    </div>
  );
};

export default Main;