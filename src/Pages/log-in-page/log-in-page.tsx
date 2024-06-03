import LogInPanel from '../../Components/log-in-panel/log-in-panel.tsx'
import LandingPageBg from '../../Components/landing-page-bg/landing-page-bg.tsx';


function LogInPage() {
  return (
    <div className="relative">
      <div className='absolute inset-0 z-10'>
        <LogInPanel />
      </div>
        <LandingPageBg />
    </div>
  )
}

export default LogInPage