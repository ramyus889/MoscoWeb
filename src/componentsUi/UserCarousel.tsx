import * as React from "react";

import { Card, CardContent } from "@/components-ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components-ui/carousel";
import SoundOn from "./SoundOn";
import SoundOff from "./SoundOff";
import Image from "next/image";

export default function CarouselDemo() {
  const [sound, setSound] = React.useState(false);

  const onClickSound = () => {
    setSound(!sound);
  };
  return (
    <Carousel className="bg-transparent w-[40%] max-[750px]:w-[60%] max-[500px]:w-[80%] max-[1440px]:-mt-[40px] max-[500px]:-ms-[20px] ">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <div className="text-[40px] flex gap-10 max-[500px]:gap-3  place-content-center">
                  <Image
                    src="/img/card1.png"
                    alt="image"
                    width={324}
                    height={504}
                  />
                  <div onClick={onClickSound} className="cursor-pointer">
                    {sound ? <SoundOn /> : <SoundOff />}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <div className="text-[40px] flex gap-10 place-content-center">
                  <Image
                    src="/img/card2.png"
                    alt="image"
                    width={324}
                    height={504}
                  />
                  <div onClick={onClickSound} className="cursor-pointer">
                    {sound ? <SoundOn /> : <SoundOff />}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <div className="text-[40px] flex gap-10 place-content-center">
                  <Image
                    src="/img/card3.png"
                    alt="image"
                    width={324}
                    height={504}
                  />
                  <div onClick={onClickSound} className="cursor-pointer">
                    {sound ? <SoundOn /> : <SoundOff />}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="max-[750px]:hidden" />
      <CarouselNext className="max-[750px]:hidden" />
    </Carousel>
  );
}
