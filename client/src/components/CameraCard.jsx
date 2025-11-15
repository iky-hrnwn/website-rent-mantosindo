import React from "react";

const CameraCard = ({camera}) => {
  
  const currency = import.meta.env.VITE_CURRENCY || '$';

  return ( 
  <div className="group overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer">
    <div className="relative h-48 overflow-hidden">
        <img src={camera.image} alt={camera.name} className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"/>

        {camera.isAvailable && <p className="absolute top-4 left-4 text-xs px-2.5 py-1">Available Now</p>}

        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
            <span className="font-semibold">{currency}{camera.pricePerDay}</span>
            <span className="text-sm text-white/80"> / day </span>
        </div>
    </div>
    <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-lg font-medium">{camera.brand} {camera.model}</h3>
                <p className="text-muted-foreground text-sm">{camera.category} * {camera.year}</p>
            </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
            <div className="flex items-center text-sm text-muted-foreground">
                <img src="/pmw-300.png" alt="camera" className="h-4 mr-2" />
                <span>{camera.seating_capacity} Seats</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <img src="/pxw-z190.png" alt="camera" className="h-4 mr-2" />
                <span>{camera.fuel_type}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <img src="/pxw-z280.png" alt="camera" className="h-4 mr-2" />
                <span>{camera.transmission}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <img src="/pxw-z280.png" alt="camera" className="h-4 mr-2" />
                <span>{camera.location}</span>
            </div>
        </div>
    </div>
  </div>
)};

export default CameraCard;
