import React from 'react';

const Video = () => {
  return (
    <section className="video-section prelative text-center white">
      <div className="section-padding video-overlay">
        <div className="container">
          <h3>Watch Now</h3>
          <i className="fa fa-play" id="video-icon" aria-hidden="true"></i>
          <div className="video-popup">
            <div className="video-src">
              <div className="iframe-src">
                <iframe
                  src="https://www.youtube.com/@unlimitedinvoices"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
