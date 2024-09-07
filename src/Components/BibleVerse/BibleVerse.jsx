import { useState, useEffect } from 'react';
import './BibleVerse.css';

function BibleVerse() {
    // Step 1: Create state variables to hold the verse and any loading/error status
    const [verse, setVerse] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Step 2: Use useEffect to fetch data when the component mounts
    useEffect(() => {
      // Fetch Bible verse from the API
      fetch('https://bible-api.com/proverbs%201:7')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          // Extract the text of the verse from the JSON response
          const verseText = data.verses[0].text;
          setVerse(verseText); // Update the state with the verse text
          setLoading(false); // Set loading to false
        })
        .catch((error) => {
          setError(error.toString()); // Handle errors and display a message
          setLoading(false); // Stop loading when an error occurs
        });
    }, []); // Empty dependency array ensures this runs only once when the component mounts
  
    // Step 3: Conditionally render the verse, loading, or error messages
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h2>Proverbs 1:7</h2>
        <p>{verse}</p>
      </div>
    );
  }

export default BibleVerse
