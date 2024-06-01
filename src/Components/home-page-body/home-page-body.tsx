import { useState } from 'react';
import AddImageModal from '../add-image-modal/add-image-modal.tsx';
import useLogout from '../../hooks/useLogout.ts';
import { FaPlus } from 'react-icons/fa';


function HomePageBody() {
  const { logout, error, isPending } = useLogout();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      
      <div>
        <button
          onClick={handleClick}
          className='p-5 rounded-full shadow-md shadow-secondaryDarker/50 bg-primaryDarker text-secondary
          transition-all ease-in-out hover:scale-110 hover:text-accent'>
          <FaPlus />
        </button>
      </div>

      {clicked && (
        <div className='z-10'>
          <AddImageModal isOpen={clicked} handleClose={handleClick} />
        </div>
        
      )}

      <button onClick={logout} className="btn-logout" disabled={isPending}>
        {isPending ? "Logging out..." : "Logout"}
        {error && <p className="error">{error}</p>}
      </button>
    </div>
  );
}

export default HomePageBody;
