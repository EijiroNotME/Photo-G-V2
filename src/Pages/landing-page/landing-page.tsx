import LandingMenu from '../../Components/landing-menu/landing-menu.tsx';
import LandingPageBg from '../../Components/landing-page-bg/landing-page-bg.tsx';

function Landing() {
  return (
    <div className="relative">
      <div className='absolute inset-0 z-10'>
        <LandingMenu />
      </div>
        <LandingPageBg />
    </div>
  );
}

export default Landing;
