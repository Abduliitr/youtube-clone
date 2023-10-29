import SideBar from './SideBar'
import VideoGrid from './VideoGrid';

import 'bootstrap/dist/css/bootstrap.css';

function HomeComponent() {
  return (
      <div className='d-flex flex-column'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='d-none d-md-block col-md-2 independent-scroll'>
              <SideBar />
            </div>
            <div className='col-md independent-scroll'>
              <VideoGrid />
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default HomeComponent;
