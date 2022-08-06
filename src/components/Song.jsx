import React from 'react'

const Song = ({ song }) => {
  return (
    <li className="list-group-item" key={song.result.id} >
        <a target="_blank" rel="noreferrer" href={song.result.url}>
            {song.result.full_title.length > 26 ? song.result.full_title.substring(0,25)+'...' : song.result.full_title}
        </a>
        <a target="_blank" rel="noreferrer" href={song.result.url}> <img src={song.result.header_image_thumbnail_url} 
            alt={song.result.full_title}/> 
        </a>
    </li>
  )
}

export default Song