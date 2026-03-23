import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;