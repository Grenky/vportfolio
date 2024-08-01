import React  from "react"
import './styles/Nature.css';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { Element } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import images from '../../assets/natures.json';



export default function Nature({ openModal }) {

    return( 
            <div  className="nature-section" style={{padding: '10px'}}>
                <Element name="nature-section" className="nature-section">
                    <h2>Nature</h2>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 3, 900: 3}}
                    >
                        <Masonry columnsCount={3} gutter="10px" className="grid-container" >
                            
                                    {images.map((image) => ( 
                                        <div className="image-container" key={image.id}  onClick={() => openModal(image)}>
                                            <LazyLoadImage 
                                                src={image.src} 
                                                alt={`natureImg-${image.id}`}
                                                effect="blur"
                                                
                                            />
                                        </div>  
                                    ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </Element>
            </div>
    )
}