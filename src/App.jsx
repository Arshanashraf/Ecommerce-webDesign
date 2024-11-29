import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  // Define state for searchQuery
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query); // Update searchQuery state with the query
  };

  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-200">
        <div className="w-full block">
          <Header onSearchChange={handleSearchChange} />
          <main>
            <Outlet context={{ searchQuery }} /> {/* Pass searchQuery as context */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
