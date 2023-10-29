import React from 'react'
import {Link} from 'react-router-dom'
import thumbnail from '../assets/images/despacito.webp'
import profilePicture from '../assets/images/profile.png'


export default function VideoGrid() {
  return (
    <div className=''>
      {/* <h4>VideoGrid</h4> */}
      <div className='row p-1'>
        <Videos />
      </div>
    </div>
  )
}

const Videos = () => {
  let videos = [];
  // let iframe = <iframe width={140} height={80} src="https://www.youtube.com/embed/ZVRIhL4b_e4?si=TZ-Y-UXYlyXZTuUn" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;
  let iframe = "id"
  for(let i = 0; i < 29; i++){
    videos.push(iframe + "_" + i);
  }
  console.log(videos)
  return (
    <>
      {videos.map((vid) => 
        <>
          <div className='col-lg-4 col-md-6 p-3'>
            {/* {vid} */}
            <Link to={`/video/${vid}`}>
              <div id='thumbnail'>
                <img src={thumbnail} className='w-100 p-1 rounded-4'/>
              </div>
            </Link>
            <div id='video-details' className='d-flex align-items-center'>
              <img src={profilePicture} className='p-2' width={55} height={55}></img>
              <div className='align-content-center m-0'>
                <p className='m-0 fw-bold'>Luis Fonsi - Despacito ft. Daddy Yankee</p>
                <p className='m-0'>920M views . 4 years ago</p>
              </div>
            </div>
            
            
          </div>
        </>
      )}
    </>
  );
}

