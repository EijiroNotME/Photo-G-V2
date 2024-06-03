import { useState } from 'react';

function SettingsPanel() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg');


  const handleImageClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };


  return (
    <div className="w-full h-full">
      <form action="submit">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-x-5 m-10">
          <div className="col-span-1 shadow-md shadow-secondary/20 rounded-2xl items-center flex justify-center relative group">
            <div className="avatar p-10 sm:p-5">
              <div
                className="rounded-full w-40 sm:w-36 md:w-44 lg:w-60 xl:w-72 2xl:w-80 ring ring-accent ring-offset-base-100 ring-offset-2 relative overflow-hidden cursor-pointer"
                onClick={handleImageClick}
              >
                <img src={avatar} alt="Avatar" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <svg className='text-white text-2xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0z" />
                      <path fill="currentColor" d="m5 16l-1 4l4-1L18 9l-3-3z" />
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 6l3 3m-5 11h8" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <input id="fileInput" type="file" className="hidden" accept="image/jpeg, image/png" onChange={handleImageChange} />
          </div>
          <div className="col-span-2 shadow-md shadow-secondary/20 rounded-2xl">
           <div className="p-1 ">
            
              <div className="gap-2 flex flex-col px-10 py-5">
              <div className="relative flex items-left py-3">
                <h1 className="text-md font-bold">Account Information</h1>
              </div>
              
                <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                  <input type="text" className="grow overflow-x-auto" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                  <input type="text" className="grow overflow-x-auto" placeholder="Full Name" />
                </label>
            
                  <div className="relative flex items-left py-3">
                    <h1 className="text-md font-bold">Reset Password</h1>
                   
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                    </svg>
                    <input 
                      type="password" 
                      className="grow overflow-x-auto" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder="New Password"
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                      <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                    </svg>
                    <input 
                      type="password" 
                      className="grow overflow-x-auto" 
                      value={confirmPassword} 
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                      placeholder="Confirm New Password"
                    />
                  </label>
                          </div>
               
                
                <div className="relative flex items-left py-3">
                    <h1 className="text-md font-bold">School Information</h1>
                  </div>

                  <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"/><path fill="currentColor" fill-rule="evenodd" d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"/><path fill="currentColor" d="M8 15v-3H7v3z"/></svg>
                  <input type="text" className="grow overflow-x-auto" placeholder="School Name" />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"/><path fill="currentColor" fill-rule="evenodd" d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"/><path fill="currentColor" d="M8 15v-3H7v3z"/></svg>
                    <input type="text" className="grow overflow-x-auto" placeholder="Campus" />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17v-6.9L12 15L1 9l11-6l11 6v8zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5z"/></svg>
                    <input type="text" className="grow overflow-x-auto" placeholder="Course" />
                  </label>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="btn p-2 w-20 bg-secondary text-primary rounded-md transition-all ease-in hover:bg-accent ml-auto"
                  >
                    Save
                  </button>
                </div>

               
              </div>
           </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SettingsPanel