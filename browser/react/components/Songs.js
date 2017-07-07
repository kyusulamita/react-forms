import React from 'react';

const Songs = (props) => {

  const songs = props.songs;
  const removeSong = props.removeSong;


  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <tr key={song.id}>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
              </td>
              <td>{ song.genre }</td>
              { removeSong && <td><button onClick={()=>alert('Why do you want to get rid of me?')} className="btn btn-default btn-xs">
                <span className="glyphicon glyphicon-remove"></span>
              </button></td>
                }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Songs;
