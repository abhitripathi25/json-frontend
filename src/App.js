import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [filters, setFilters] = useState([]);

  const handleSubmit = async () => {
    try {
      // Here you would make the API call to your backend
      // For now, let's simulate a response
      const mockResponse = {
        numbers: [1, 334, 4],
        alphabets: ['M', 'B'],
        highestAlphabet: 'M'
      };
      setResponse(mockResponse);
    } catch (error) {
      console.error('Error processing input:', error);
    }
  };

  const renderFilteredResponse = () => {
    if (!response) return null;

    let output = '';
    if (filters.includes('Numbers')) {
      output += `Numbers: ${response.numbers.join(',')}\n`;
    }
    if (filters.includes('Alphabets')) {
      output += `Alphabets: ${response.alphabets.join(',')}\n`;
    }
    if (filters.includes('Highest Alphabet')) {
      output += `Highest Alphabet: ${response.highestAlphabet}\n`;
    }
    return output;
  };

  return (
    <div className="App">
      <div className="input-section">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"data":["M","1","334","4","B"]}'
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {response && (
        <div className="filter-section">
          <select 
            multiple 
            onChange={(e) => setFilters(Array.from(e.target.selectedOptions, option => option.value))}
          >
            <option value="Numbers">Numbers</option>
            <option value="Alphabets">Alphabets</option>
            <option value="Highest Alphabet">Highest Alphabet</option>
          </select>
        </div>
      )}
      {response && (
        <div className="response-section">
          <h3>Filtered Response</h3>
          <pre>{renderFilteredResponse()}</pre>
        </div>
      )}
    </div>
  );
}

export default App;