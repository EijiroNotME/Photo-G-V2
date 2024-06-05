import { useState } from "react";
import useLogout from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";
import Logout from "../alerts/logout"; // Import the Logout component
import { useAuth } from "../../context/authContext";

function Navbar() {
  const { currentUser } = useAuth();

  const { logout, error, isPending } = useLogout();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirmation(false);
    logout();
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return '';
    const nameParts = name.split(' ');
    const initials = nameParts.slice(0, 2).map(part => part.charAt(0)).join('');
    return initials;
  };
  


  return (
    <div className="navbar bg-base-100 shadow-md shadow-secondary/5">
      <div className="flex-1">
        <NavLink to="/home">
          <span className="font-bold p-3 text-4xl cursor-pointer">
            Code<span className="text-accent">Pix</span>
          </span>
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {currentUser?.photoURL ? (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={currentUser?.photoURL}
                />
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span className="text-2xl ">{getInitials(currentUser?.displayName)}</span>
                </div>
              </div>
            )}
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <NavLink to="/settings"><a>Settings</a></NavLink>
            </li>
            <li>
              <button onClick={handleLogoutClick} disabled={isPending}>
                {isPending ? "Logging out..." : "Logout"}
                {error && <p className="error">{error}</p>}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {showLogoutConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
          <Logout
            onConfirm={handleConfirmLogout}
            onCancel={handleCancelLogout}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;