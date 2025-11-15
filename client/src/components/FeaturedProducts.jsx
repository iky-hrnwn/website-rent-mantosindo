import React from "react";
import Title from "./Title";
import CameraCard from "./CameraCard";
import { useNavigate } from "react-router-dom";
import camera1 from "../assets/pmw-300.png";
import camera2 from "../assets/pxw-z190.png";
import camera3 from "../assets/pxw-z280.png";

const FeaturedProducts = () => {

    const dummyCameraData = [
        {
            "_id": "66fbd6887c6b93a91382d2af",
            "owner": "66fbad687c6b93a91382d2b0",
            "brand": "Sony",
            "model": "PMW-300",
            "image": camera1,
            "category": "Camcorder",
            "year": "2015",
            "pricePerDay": 700.000,
            "isAvailable": true,
            "description": "The Sony PMW-300 is a professional camcorder known for its excellent image quality and versatile features, making it ideal for various filming needs.",
            "createdAt": "2025-11-13T10:20:40.123Z",
        },
        {
            "_id": "66fbd6887c6b93a91382d2b1",
            "owner": "66fbad687c6b93a91382d2b0",
            "brand": "Sony",
            "model": "PXW-300",
            "image": camera2,
            "category": "Camcorder",
            "year": "2015",
            "pricePerDay": 800.000,
            "isAvailable": true,
            "description": "The Sony PMW-300 is a professional camcorder known for its excellent image quality and versatile features, making it ideal for various filming needs.",
            "createdAt": "2025-11-13T10:20:40.123Z",
        },
        {
            "_id": "66fbd6887c6b93a91382d2b1",
            "owner": "66fbad687c6b93a91382d2b0",
            "brand": "Sony",
            "model": "PXW-z300",
            "image": camera3,
            "category": "Camcorder",
            "year": "2015",
            "pricePerDay": 800.000,
            "isAvailable": true,
            "description": "The Sony PMW-300 is a professional camcorder known for its excellent image quality and versatile features, making it ideal for various filming needs.",
            "createdAt": "2025-11-13T10:20:40.123Z",
        }
    ];

    const navigate = useNavigate();

  return (
  <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
    <img src="../assets/react.svg" alt="camera" />
    <div>
        <Title title='Featured Camera' subtitle='Explore our selection of premium cameras available for your moment.'/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {
        dummyCameraData.slice(0,6).map((camera) => (
            <div key={camera._id}>
                <CameraCard camera={camera} />
            </div>
        ))
    }
    </div>

    <button onClick={()=> {
        navigate('/camera'); scrollTo(0,0);
    }}
    className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18">
        Explore all cameras <img src='/arrow-right.svg' alt='arrow' className='inline ml-2'/>
    </button>
  </div>);
};

export default FeaturedProducts;
