import React, {useEffect, useState} from 'react';
import './App.css';
import SlickSlider from './frontpage/Slider/SlickSlider';
// import NatureList from './assets/natures.json';
import Modal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import FrontPage from './frontpage/FrontPage';
import Nature from './frontpage/Nature/Nature';
import Footer from './frontpage/Footer/Footer';
import People from './frontpage/People/People';
import Symbols from './frontpage/Symbols/Symbols';
import VideoPage from './videopage/VideoPage';



Modal.setAppElement('#root');

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
 
  
  const openModal = (image) => {
      setSelectedImage(image);
      setIsOpen(true);
  };


  const closeModal = () => {
      setIsOpen(false);
      setTimeout(() =>  {
        setSelectedImage(null);
      }, 300)
  };


  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
      return () => {
          document.body.style.overflow = 'unset';
      };
  }, [isOpen]);





  return (
      <div className="App">
        <Routes>
            <Route path="/" element={
              <>
                <FrontPage />
                <SlickSlider />
                <Nature openModal={openModal} />
                <People openModal={openModal}/>
                <Symbols openModal={openModal}/>
                <Footer />
              </>
            } />
            <Route path="/video" element={<VideoPage />} /> {/* Добавьте маршрут для видео */}
          </Routes>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Selected Image"
            className={{
                base: 'modal',
                afterOpen: 'modal-open',
                beforeClose: 'modal-close'
              }}
            overlayClassName={{
                base: 'overlay',
                afterOpen: 'overlay-open',
                beforeClose: 'overlay-close'
              }}
              closeTimeoutMS={300}
          >
                      {selectedImage && 
                      <img 
                          src={selectedImage.src}  
                          alt={`natureImg-${setSelectedImage.id}`}  
                          className="modal-image"
                      />}
                      <button onClick={closeModal} className="close-button">Close</button>
                  </Modal>
      </div>
  );
}

export default App;
