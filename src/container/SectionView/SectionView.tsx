import React from 'react'
import SideBar from '../../components/SideBar/SideBar';


import './SectionView.scss';
import VideoGrid from '../VideosGrid/VideoGrid';
// import Categories from '../../components/Categories/Categories';
// import { SidebarProvider } from '../../context/ContextMang';

const SectionView = () => {
  return (
    <div className='section-grid'>
        <div className='left-grid'>
          
            <SideBar />

        </div>

        {/* <div>
            <Categories/>
        </div> */}

        <div className="main-grid">
            <VideoGrid/>
        </div>
    </div>
  )
}

export default SectionView