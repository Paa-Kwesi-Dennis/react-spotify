import SongForSearch from "./SongForSearch";

const SongsList = ({ songs }) => {
  return (
    <div className="song-card">
      <ul className="list-group list-group-flush">
        {songs.map((song) => {
          return <SongForSearch key={song.result.id} song={song} />;
        })}
      </ul>
    </div>
  );
};

export default SongsList;
