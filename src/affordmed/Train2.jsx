import React, { useState, useEffect } from 'react';

const TrainScheduleApp = () => {
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock API URL - in a real application, this would be the provided API endpoint
  const API_URL = 'https://my.api.mockaroo.com/trains.json?key=8d0c1b00';

  // Fetch train data from API
  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setLoading(true);
        // In a real application, we would use the actual API
        // const response = await fetch(API_URL);
        // if (!response.ok) {
        //   throw new Error('Failed to fetch train data');
        // }
        // const data = await response.json();
        
        // Simulating API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data for demonstration
        const mockData = [
          { id: 1, name: "Express 202", number: "202", departure: "08:00", arrival: "12:30", status: "On Time" },
          { id: 2, name: "Superfast", number: "345", departure: "09:15", arrival: "14:45", status: "Delayed" },
          { id: 3, name: "Local Passenger", number: "112", departure: "10:30", arrival: "13:15", status: "On Time" },
          { id: 4, name: "Rajdhani", number: "501", departure: "11:45", arrival: "19:20", status: "Departed" },
          { id: 5, name: "Shatabdi", number: "605", departure: "13:20", arrival: "17:45", status: "On Time" },
          { id: 6, name: "Duronto", number: "708", departure: "15:10", arrival: "22:35", status: "On Time" },
          { id: 7, name: "Gareeb Rath", number: "809", departure: "16:40", arrival: "21:15", status: "Delayed" },
          { id: 8, name: "Double Decker", number: "910", departure: "18:25", arrival: "23:50", status: "On Time" }
        ];
        
        setTrains(mockData);
        setFilteredTrains(mockData);
        setError(null);
      } catch (err) {
        setError('Failed to load train schedule. Please try again later.');
        console.error('Error fetching train data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrains();
  }, []);

  // Filter trains based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredTrains(trains);
    } else {
      const filtered = trains.filter(train => 
        train.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        train.number.includes(searchTerm)
      );
      setFilteredTrains(filtered);
    }
  }, [searchTerm, trains]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getStatusClass = (status) => {
    if (status === "On Time") return "on-time";
    if (status === "Delayed") return "delayed";
    if (status === "Departed") return "departed";
    return "";
  };

  return (
    <div className="container">
      <header>
        <h1>Train Schedule</h1>
        <p className="subtitle">Real-time updates of train arrivals and departures</p>
      </header>
      
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by train name or number..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </div>
      
      {loading ? (
        <div className="loading">
          <p>Loading train schedule...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
        </div>
      ) : (
        <div className="schedule-container">
          <div className="schedule-header">
            <div>Train</div>
            <div>Number</div>
            <div>Departure</div>
            <div>Arrival</div>
            <div>Status</div>
          </div>
          
          {filteredTrains.length === 0 ? (
            <div className="no-trains">
              <p>No trains found matching your search.</p>
            </div>
          ) : (
            filteredTrains.map(train => (
              <div key={train.id} className="train-row">
                <div className="train-name">{train.name}</div>
                <div className="train-number">{train.number}</div>
                <div>{train.departure}</div>
                <div>{train.arrival}</div>
                <div>
                  <span className={`status ${getStatusClass(train.status)}`}>
                    {train.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TrainScheduleApp;