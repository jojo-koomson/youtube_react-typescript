import React from 'react'
import Categories from '../../components/Categories/Categories'
import api  from '../../constants/api';
import './VideoGrid.scss';

const VideoGrid = () => {
  return (
    <>
        <div>
            <Categories/>
        </div>

        <div className="video-grid">
        {api.videos.map((video) => (
          <div key={video.id} className="video-grid-item">
            <div>
                <a data-duration={video.duration}>
                  <img  className='thumbnail' src={video.thumbnail} alt={video.title} />
                </a>
            </div>
            <div className='details-container'>
              <div className='avatar'>
                <img src={video.avatar} alt="" />
              </div>

                <div className='details'>
                  <h2>{video.title}</h2>
                  <div className='sub-info'>
                    <p>{video.channel}</p>
                    <p>{video.viewCount}</p>
                  </div>
                </div>
            </div>
            {/* Add more video information here */}
          </div>
        ))}
    </div>
    </>
  )
}

export default VideoGrid