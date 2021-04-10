import React, {useState, useEffect} from "react";
import fire from "../../../config/Fire";

const Gallery = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        getImg();
    })

    const getImg = async () => {
        const Doc = await fire.firestore().collection("communities").doc("Beach Protector").get();
        const data = Doc.data();
        setImg(data?.gallery);
    }
    
    return (
        <div className="container mx-auto">
            <div className="container mx-auto p-4 text-lg uppercase font-bold text-center">Gallery</div>
            {
                img &&
                img.map((image, key) => (
                    <div key={key} className="grid grid-cols-3 max-w-md m-4 p-4">
                        <div className="p-2">
                            <img src={image.image} className=" w-full h-20 mr-3" alt="..." />
                        </div>
                        
                    </div>
                ))
            }
        </div>
        
    )
}

export default Gallery;