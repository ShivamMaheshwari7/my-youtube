import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;

  return (
    <div className="px-6 py-4 shadow-lg w-48 pr-16">
      <ul className="font-semibold">
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>📷 Shorts</li>
        <li>📹 Videos</li>
        <li>🎥 Live</li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🏅 Sports</li>
        <li>🎮 Gaming</li>
        <li>📽️ Movies</li>
      </ul>
      <hr className="my-3" />
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🏅 Sports</li>
        <li>🎮 Gaming</li>
        <li>📽️ Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
