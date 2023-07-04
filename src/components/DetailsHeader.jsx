import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black small:h-48 h-48" />

    <div className="absolute inset-0 flex items-center">
      {/* {console.log(artistData)}
      {console.log(artistData?.data[0].attributes?.artwork?.url)} */}
      <img
        src={
          artistId
            ? artistData?.data[0].attributes?.artwork?.url
              .replace('{w}', '500')
              .replace('{h}', '500')
            : songData?.images?.coverart
        }
        alt="artist"
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      <div className="ml-5">
        <p className="text-white font-bold sm:text-3xl text-xl">
          {artistId ? artistData?.data[0].attributes?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-gray-400 text-base mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-gray-400 text-base mt-2">
          {artistId
            ? artistData?.data[0].attributes?.genreNames[0]
            : songData?.genres?.primary}
        </p>
      </div>
    </div>
    <div className="w-full sm:h-44 h-24 " />
  </div>
);

export default DetailsHeader;
