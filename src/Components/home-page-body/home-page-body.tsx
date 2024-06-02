import { FaPlus } from 'react-icons/fa';
import AddImageModal from '../add-image-modal/add-image-modal.tsx';

function HomePageBody() {
  return (
    <div className="relative">
      <AddImageModal />
      <button
        className="btn fixed bottom-4 right-4 rounded-full bg-primaryDarker100"
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
