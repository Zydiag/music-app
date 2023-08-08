/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import {
  useGetArtistDetailsQuery,
  useGetRelatedSongsQuery,
  useSearchQuery,
} from '../redux/services/Shazam';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistData, isFetching: isFetchingArtistDetails } =
    useGetArtistDetailsQuery(artistId);

  const SongId = '12345124';

  const { data: recommendedSongs, isFetching: isFetchingRecommendedSongs } =
    useGetRelatedSongsQuery({ songid: SongId });

  if (isFetchingArtistDetails || isFetchingRecommendedSongs) {
    return <Loader title="Loading Details " />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs
        data={recommendedSongs}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};
export default ArtistDetails;
