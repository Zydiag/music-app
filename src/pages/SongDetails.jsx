/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetRelatedSongsQuery,
  useGetSongDetailsQuery,
} from '../redux/services/Shazam';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  const { data, isFetching: isFetchingReleatedSongs } = useGetRelatedSongsQuery(
    { songid },
  );

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingReleatedSongs || isFetchingSongDetails) {
    return <Loader title="Loading Details " />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((text, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {text}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry no Lyrics Found
            </p>
          )}
        </div>
      </div>
      {/* {console.log(data)} */}
      <RelatedSongs
        data={data}
        songid={songid}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};
export default SongDetails;
