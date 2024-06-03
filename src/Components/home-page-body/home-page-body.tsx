import { FaPlus } from 'react-icons/fa';
import AddImageModal from '../add-image-modal/add-image-modal.tsx';
// import LandingPageBg from '../landing-page-bg/landing-page-bg.tsx'

function HomePageBody() {
  return (
    <div className="relative">
      {/* <div className='flex mx-5'>
        <LandingPageBg />
      </div> */}
       
      <AddImageModal />
      <button
        className="btn fixed bottom-4 right-4 rounded-full bg-accent text-primary hover:bg-accent/90"
        onClick={() => {
          const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
          modal.showModal();
        }}
      >
       
        <FaPlus />
      </button>
    </div>
  );
}

export default HomePageBody;
