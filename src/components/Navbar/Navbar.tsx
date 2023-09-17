import React from 'react'
import { images } from '../../constants';
import './Navbar.scss';
import NotificationIcon from '../Notification/NotificationIcon';
const Navbar = () => {
  return (
<>
     
    <nav className='yt__navbar'>
      {/* navbar items - Left starts */}
      <div className='yt__navbar-left'>
        <div>
            <img src={images.Humburger} />
        </div>
        <div>
          <img src={images.YTlogo} style={{marginTop:"25px"}}/>
        </div>

      </div>
      {/* navbar items - Left ends */}

      {/* navbar items - Center starts */}

      <div className='yt__navbar-center'>
        <div className='yt__search-container'>
          <input placeholder ='Search'type='text' className='yt__search-input'/>     
          <div className="yt__search" title='Search'>
            <img src={images.Search} width={25} height={25} className='yt__img' />
          </div>
        </div>
        <button className="yt__microphone" style={{marginRight:"30px"}}>
            <img src={images.Microphone} width={25} height={25}/>
          </button>
        
    </div>
      {/* navbar items - Center ends */}

      {/* navbar items - Right starts */}
        <div className="yt__navbar-right">
       
        <div className="yt__microphone">
          <img src={images.Create} width={30} height={30}/>
        </div>

        <div className="yt__microphone">
          <NotificationIcon/>
        </div>

        <div className="yt__microphone">
          <img src={images.Avatar} width={40} height={40}/>
        </div>

        </div>
      {/* navbar items - Right ends */}

        
    </nav>
    </>
  )
}

export default Navbar