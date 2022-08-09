import Song from "./Song";

const Songs = ({ songs }) => {
  return (
    <div className="song-card">
      <ul className="list-group list-group-flush">
        {songs.map((song) => {
          return <Song key={song.result.id} song={song} />;
        })}
      </ul>
    </div>
  );
};

export default Songs;
