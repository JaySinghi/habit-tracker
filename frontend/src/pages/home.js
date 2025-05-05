import React, { useEffect, useState } from 'react';
import { getHabits } from '../api'; // Make sure this path is correct

function Home() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const data = await getHabits();
        setHabits(data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  return (
    <div>
      <h1>Welcome to the Habit Tracker</h1>
      <p>This is the homepage. More features coming soon.</p>

      {loading ? (
        <p>Loading habits...</p>
      ) : habits.length === 0 ? (
        <p>No habits found</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit._id}>{habit.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
