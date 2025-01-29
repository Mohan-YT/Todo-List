import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from './contaxt/DataContaxt';

const Home = () => {
  const { searchresult, error, isLoading } = useContext(DataContext);

  return (
    <main className='home'>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (searchresult?.length ? (
        <Feed posts={searchresult} /> // ✅ Fixed prop name
      ) : (
        <p style={{ textAlign: 'center' }}>No Posts to Display</p>
      ))}
    </main>
  );
};

export default Home;
