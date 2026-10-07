import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/analytics">Go to Analytics Page</Link>
    </div>
  );
};

export default HomePage;
