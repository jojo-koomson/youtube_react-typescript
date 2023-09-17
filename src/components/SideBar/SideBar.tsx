import React, { useState } from 'react';
import { images } from '../../constants';
import './SideBar.scss';

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setShowIconsOnly(!showIconsOnly);
  };
  

  return (
    <div className={`yt__side-bar ${isSidebarOpen ? '' : 'collapsed'}`}>
      <div className={`yt__sidebar-contents ${isSidebarOpen ? '' : 'collapsed'}`}>
        <div className="yt__sidebar-scroll-container">
          <div className="scroll-inner">
            <div className='top-sec'>
              <div onClick={toggleSidebar} className="hamburger">
                <img src={images.Humburger} alt="Hamburger" />
              </div>
              <div>
                <img src={images.YTlogo} alt="YouTube Logo" />
              </div>
            </div>
            {isSidebarOpen?<>

              <a href="#" className="links"><img src={images.Homef} alt=""/>Home</a>
                  <a href="#" className="links"><img src={images.Shorts} alt=""/>Shorts</a>
                  <a href="#" className="links"><img src={images.Subscribe} alt=""/>Subscription</a>
                  <hr className="seperator" />

                  <a href="#" className="links"><img src={images.Library} alt=""/>Library</a>
                  <a href="#" className="links"><img src={images.History} alt=""/>History</a>
                  <a href="#" className="links"><img src={images.YourVideos} alt=""/>Your video</a>
                  <a href="#" className="links"><img src={images.WatchLater} alt=""/>Watch leater</a>
                  <a href="#" className="links"><img src={images.LikedVids} alt=""/>Like video</a>
                  <a href="#" className="links"><img src={images.ShowMore} alt=""/>Show more</a>
                  <hr className="seperator" />

                  <h2 className='yt__subs'>Subscriptions</h2>
                  <a href="#" className="links"><img src={images.Avatar} alt=""/>Library</a>
                  <a href="#" className="links"><img src={images.Avatar} alt=""/>History</a>
                  <a href="#" className="links"><img src={images.Avatar} alt=""/>Show more</a> 
             
            </> :<>
                <a href="#" className={`links ${showIconsOnly ? 'icon-only' : ''}`}>
                  <img src={images.Homef} alt="Home" />
                  {isSidebarOpen && 'Home'}
                </a>
                <a href="#" className={`links ${showIconsOnly ? 'icon-only' : ''}`}>
                  <img src={images.Shorts} alt="Shorts" />
                  {isSidebarOpen && 'Shorts'}
                </a>
                <a href="#" className={`links ${showIconsOnly ? 'icon-only' : ''}`}>
                  <img src={images.Subscribe} alt="Subscription" />
                  {isSidebarOpen && 'Subscription'}
                </a>
                <a href="#" className={`links ${showIconsOnly ? 'icon-only' : ''}`}>
                  <img src={images.Library} alt="Library" />
                  {isSidebarOpen && 'Library'}
                </a>
            
            </>}

                 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
