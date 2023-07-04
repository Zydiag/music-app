import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    {/* {console.log(data)} */}
    <h1 className="text-white text-3xl font-bold">Related Songs</h1>
    <div className="mt-6 flex flex-col w-full">
      {data?.tracks?.map((song, i) => (
        <SongBar
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
