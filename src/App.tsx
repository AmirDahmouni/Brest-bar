import React from 'react';
import Navbar from './components/NavBar';
import Sidebar from './components/SideBar';


const App: React.FC = () => {
  return (
    <div className="flex max-h-screen min-h-screen flex-col overflow-hidden">
      <Navbar />
      <Sidebar />

    </div>
  );
};

export default App;