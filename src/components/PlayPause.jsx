import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => (isPlaying && activeSong.title === song.title ? (
  <FaPauseCircle
    size={35}
    className="text-gray-300 text-2xl lg:text-4xl"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={35}
    className="text-gray-300 text-2xl lg:text-4xl"
    onClick={handlePlay}
  />
));

export default PlayPause;
