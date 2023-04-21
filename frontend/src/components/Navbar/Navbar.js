import { useContext } from "react";
import Context from "../../context/Context";
import { getColor } from "../../utils";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { userInfo, logOut } = useContext(Context);
  const color = getColor(userInfo?.name + userInfo?.email);
  const navigate = useNavigate();
  const logOutHandler = () => {
    if (userInfo?._id) {
      logOut();
    }
  };
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link to="/" className=" uppercase font-bold text-white text-2xl">
          Holbos
        </Link>
      </div>

      <div className="navbar-end gap-4">
        <div
          className="avatar cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <div
              className={`w-full h-full flex items-center justify-center bg-[${color}]`}
              style={{ background: color }}
            >
              {`${userInfo?.name.charAt(0)}${userInfo?.email.charAt(0)}`}
            </div>
          </div>
        </div>
        <div className="btn" onClick={logOutHandler}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Navbar;
