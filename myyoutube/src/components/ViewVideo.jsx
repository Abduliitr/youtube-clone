import React from 'react'
import { Link } from 'react-router-dom';
import thumbnail from '../assets/images/despacito.webp'
import profilePicture from '../assets/images/profile.png'

import {LiaDownloadSolid, LiaThumbsDown, LiaThumbsUp} from 'react-icons/lia'
import {PiShareFatLight} from 'react-icons/pi'

function ViewVideo() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
                <div className='p-2 pt-4 rounded'>
                    <iframe className='w-100 h-100 rounded-4 aspect-ratio-16-9' src="https://www.youtube.com/embed/Qwm6BSGrOq0?si=-5gUwdzWcc4r21nz?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/* <p>And then Comments, etc.</p> */}
                <div className='p-2'> 
                    <VideoInfo />
                </div>
                <div className='p-2'>
                    <CommentsSection />
                </div>
                
            </div>
            <div className='col-md my-4'>
                Suggested videos
                <Suggestions />
            </div>
        </div>
    </div>
  )
}

const VideoInfo = () => {
    return (
        <>
            <h1 id='video-title' className='fs-5 fw-bold'> Abdul Hannan & Rovalio - Iraaday (Official Music Video) </h1> 
            <div id='top-row' className='row'>
                <div id='owner' className='d-flex col-lg-5'>
                    <img src={profilePicture} className='p-1' width={55} height={55}></img>
                    <div>
                        <h2 className='fs-5 px-1 py-1 m-0 artist-name fontsize-smaller'> Abdul Hannan </h2>
                        <p className='px-1 m-0 text-muted artist-subscribers'>273K subscribers</p>
                    </div>
                    <button className='bg-black text-white fw-bold rounded-5 m-2 mx-3 p-1 px-3 subscribe-button'>Subscribe</button>
                </div>
                <div id='actions' className='col-lg my-2 justify-space-around'>
                    <button className='action-button rounded-5 m-1 p-2 px-4 border-0'>
                        <LiaThumbsUp size={'1.4rem'} /><h6 className='fontsize-small  p-1 px-2 d-inline d-lg-none d-xl-inline '>597K</h6> | <LiaThumbsDown size={'1.4rem'} />
                    </button>
                    <button className='action-button rounded-5 p-2 px-3 border-0'>
                        <PiShareFatLight size={'1.4rem'}/><h6 className='fontsize-small d-inline p-1'>Share</h6>
                    </button>
                    <button className='action-button rounded-5 p-2 px-3 border-0 d-inline d-lg-none d-xl-inline d-xs-none d-md-inline'>
                        <LiaDownloadSolid size={'1.4rem'}/><h6 className='fontsize-small d-inline p-1'>Download</h6>
                    </button>
                    <button className='action-button rounded-5 p-2 px-3 border-0 float-lg-end'>
                        <h6>...</h6>
                    </button>
                </div>
                <div className='col-sm-12 video-description rounded-4 p-2'>
                    <h6 className='fontsize-small p-1'>434K views &nbsp; 1 year ago</h6>
                    <p className='fontsize-smaller'>
                        Here is the compilation video for all the random suggestions Shukla Ji gave from 
                        the film Chhalaang. Watch this video for non stop laughter and let us know in 
                        the comments which suggestion did you relate with the most.
                    </p>
                </div>
            </div>
        </>
    );
}

const CommentsSection = () => {
    return <>Comments Section</>
}

const Suggestions = () => {
    let videos = [];
    for(let i = 0; i < 30; i++){
        videos.push("id_" + i);
    }
    return (
        <div className='d-flex flex-column py-1'>
            {videos.map((vid) => 
                <div className='row'>
                    <div className='col-md-6 px-1'>
                        <Link to={`/video/${vid}`}>
                            <div id='thumbnail'>
                                <img src={thumbnail} className='w-100 p-1 rounded-3'/>
                            </div>
                        </Link>
                    </div>
                    <div className='col-md px-0'>
                        <div id='video-details' className='d-flex align-items-center'>
                            {/* <img src={profilePicture} className='p-2' width={55} height={55}></img> */}
                            <div className='align-content-center m-0'>
                                <p className='m-0 fw-bold'>Luis Fonsi - Despacito ft. Daddy Yankee</p>
                                <p className='m-0 py-1 fontsize-smaller'>LuisFonsiVEVO</p>
                                <p className='m-0 fontsize-smaller'>920M views . 4 years ago</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            )}
        </div>
    );
}

export default ViewVideo