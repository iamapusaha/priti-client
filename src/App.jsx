import mypriti from './assets/priti.png'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/song')
      .then(res => res.json())
      .then(data => setSongs(data))
  }, [])
  const handleAddSong = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const song = { name }
    fetch('http://localhost:5000/song', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(song)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    form.reset()
    alert('added song')
  }

  return (
    <>
      <div className=''>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={mypriti} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is Preity Zinta</h1>
      <form onSubmit={handleAddSong} className='mt-4'>
        <input className='border p-3 mb-2' type="text" name='name' placeholder='আপনার প্রছন্দের গানের লাইন' required /> <br />
        <button className='btn'><input type="submit" value="যুক্ত করুন" /></button>
      </form>
      {
        songs.map((song, idx) => <p key={song._id}>{idx + 1}: {song.name}</p>)
      }
    </>
  )
}

export default App
