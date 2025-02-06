import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const mediaData = [
  {
   
    
    backgroundImage: "/assets/media/1 (1).jpg",
  },
  {
    
    
    backgroundImage:"/assets/media/2.jpg",
  },
  {
 
   
    backgroundImage:"/assets/media/3 (1).jpg",
  },
  {
    
    
    backgroundImage: "/assets/media/Asset 1.png",
  },
  {
   
    
    backgroundImage: "/assets/media/media5.jpeg",
  },
  {
    
    
    backgroundImage: "public/assets/media/media6.jpeg",
  },
  {
  
    backgroundImage:"public/assets/media/media7.jpeg",
  },
  {
    
    
    backgroundImage:"public/assets/media/media8.jpeg",
  },
  {
    
   
    backgroundImage: "/assets/media/media9.jpeg",
  },
  {
  
    
    backgroundImage:"/assets/media/media10.jpeg",
  },
  {
  
    backgroundImage: "/assets/media/media11.jpeg",
  },
  {
    
  
    backgroundImage: "/assets/media/media12.jpeg",
  },
];

export default function MediaSection() {
  return (
    <section className="w-full bg-[#000000] py-6 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Main Container Box */}
        <div className="bg-[#111111] border border-gray-600 rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 md:mb-8">
            <span className="text-[#ff0000] text-3xl md:text-4xl font-bold inline-block mb-2 ">
               Get Recognised
            </span>
            <h1 className="text-xl sm:text-xl md:text-xl font-bold text-white">
               SUMMER INTERNS GETTING RECOGNISED IN MEDIA ACROSS INDIA
            </h1>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {mediaData.map((media, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 ease-in-out
                  h-28 sm:h-32 md:h-36 lg:h-44
                  border border-gray-700 hover:border-gray-500
                  hover:-translate-y-1 hover:shadow-lg
                  active:scale-95 cursor-pointer
                  touch-manipulation"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover  transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${media.backgroundImage})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />

                {/* Content */}
                <CardHeader className="relative h-full flex flex-col justify-center items-center p-2 sm:p-3 md:p-4">
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {/* <Image
                      src={media.}
                      alt={''}
                      width={400}
                      height={200}
                      loading="lazy"
                      className="object-contain w-full h-full 
                        px-1 pt-2 md:pt-4 pb-0
                        transition-transform duration-300 
                        group-hover:scale-105"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    /> */}
                  </div>
                </CardHeader>

                {/* Optional: Source Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
                  p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs text-center truncate">
                    
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Add custom styles */}
      <style jsx global>{`
        .media-card-container {
          perspective: 1000px;
        }

        @media (hover: hover) {
          .group:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
        }

        @media (max-width: 640px) {
          .group:active {
            transform: scale(0.98);
          }
        }

        .image-loading {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .image-loaded {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
;