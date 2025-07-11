
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={cn("cursor-pointer overflow-hidden rounded-md group relative", className)}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto object-contain max-h-[80vh]" 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GalleryImage;
