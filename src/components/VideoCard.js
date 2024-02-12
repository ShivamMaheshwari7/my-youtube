const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-4 w-72 shadow-lg rounded-xl">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-xl" />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
