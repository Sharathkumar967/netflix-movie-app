import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react'
import "./watch.scss";
// import ReactPlayer from 'react-player';

const Watch = () => {
  return (
    <div className='watch'>

        <div className="back">
        <ArrowBackOutlined/>
        Home
        </div>
        
        {/* <ReactPlayer
        className="video"
        autoPlay
        progress
        controls
        // url='https://www.youtube.com/watch?v=Ua-b6CDFU-A'
        url='https://all-free-download.com/free-footage/download/closeup_of_wild_butterfly_in_nature_6891908.html'
      /> */}


      <video 
      className="video"
      autoPlay
      progress
      controls
      src='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
      />
    </div>
  )
}

export default Watch