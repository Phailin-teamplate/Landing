import { Card2, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Ios from "@/public/ios.png";

export function Carousels() {
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png"];

  return (
    <Carousel className="relative w-full max-w-xs items-center">
      <Image
        className="absolute z-10 w-full h-full object-cover"
        src={Ios}
        alt="Background"
        quality={100}
        objectPosition="top"
      />
      <div className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card2>
                  <CardContent className="flex aspect-square items-center justify-center p-8">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-3xl items-center justify-center"
                    />
                  </CardContent>
                </Card2>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
