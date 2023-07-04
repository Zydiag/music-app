import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ isPlaying, activeSong, song, i, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = (dispatch, song) => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full  h-56 group ">
        <div
          className={`absolute inset-0 justify-center items-center bg-black  bg-opacity-50 group-hover:flex 
      ${
        activeSong?.title === song.title
          ? ' flex bg-black bg-opacity-70'
          : 'hidden'
      }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song?.images?.coverart} alt="song_img" />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-lg truncate font-bold text-white">
          <Link to={`/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="text-xs truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SongCard;
