const SongForHome = ({ song }) => {
  return (
    <li className="list-group-item" key={song.id}>
      <a target="_blank" rel="noreferrer" href={song.url}>
        {song.full_title.length > 26
          ? song.full_title.substring(0, 25) + "..."
          : song.full_title}
      </a>
      <a target="_blank" rel="noreferrer" href={song.url}>
        <img src={song.header_image_thumbnail_url} alt={song.full_title} />
      </a>
    </li>
  );
};

export default SongForHome;
