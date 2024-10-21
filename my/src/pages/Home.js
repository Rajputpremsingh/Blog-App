import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Address'); // Automatically navigate to the Address screen
  }, [navigate]);

  return null; // Don't render anything on the Home component
}

export default Home;
