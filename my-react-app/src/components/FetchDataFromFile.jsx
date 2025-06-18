import React, { useState, useEffect } from 'react'

const FetchDataFromFile = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {

      try {
        const res = await fetch('/data.json');
        const data = await res.json();
        setTeam(data);
        setLoading(false);
        console.log(`this is the set Team: ${setTeam}`)

      }
      catch (err) {
        console.error('Error fetching team data:', err);
        setLoading(false);
      }
    };
    fetchTeam();
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Our Team</h1>

      {loading ? (<p className='grid gap-6 grid-cols  sm:grid'>Loading ...</p>) : (<div><img src="{member.avatar}" alt="member.name"
        className='w-24 h-24 rounded-full mb-4 bg-blue-200' /></div>)}
    </div>
  )
}

export default FetchDataFromFile