import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-5 py-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer hover:bg-gray-200 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <a className="my-auto mx-3" href="/">
          <img
            className="h-6"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/640px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          className="border rounded-s-3xl px-3 py-1 w-1/2"
          type="text"
          placeholder="Search"
        />
        <button className="border rounded-e-3xl px-3 py-1 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 float-right mx-2 cursor-pointer"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
