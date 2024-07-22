import React  from "react"
import '../Nature/styles/Nature.css';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { Element } from "react-scroll";
import images from '../../assets/people.json';



export default function People({ openModal }) {
    return(
        <Element className="people-section" name="people-section" style={{padding: '10px'}}>
            <h2>People</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="10px" className="grid-container" >
                    
                            {images.map((image) => ( 
                                <div className="image-container" key={image.id} onClick={() => openModal(image)}>
                                    <img  src={image.src} alt={`peopleImg-${image.id}`} />
                                </div>  
                            ))}
                </Masonry>
            </ResponsiveMasonry>
        </Element>
    )
}