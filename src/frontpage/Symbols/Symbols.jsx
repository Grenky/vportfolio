import React  from "react"
import '../Nature/styles/Nature.css';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { Element } from "react-scroll";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import images from '../../assets/simbols.json';




export default function Symbols({ openModal }) {
    return(
        <Element className="symbols-section" style={{padding: '10px'}}>
            <h2>Symbols / Different</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="10px" className="grid-container" >
                    
                            {images.map((image) => ( 
                                <div className="image-container" key={image.id} onClick={() => openModal(image)}>
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={`symbolsImg-${image.id}`}
                                        effect="blur"
                                        wrapperClassName="lazy-image-wrapper"
                                    />
                                </div>  
                            ))}
                </Masonry>
            </ResponsiveMasonry>
    </Element>
    )
}