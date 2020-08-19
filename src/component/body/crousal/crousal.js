import React, { useState } from 'react';
import "./crousal.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://theblogimages.adobe.com/wp-content/uploads/2020/01/AdobeStock_241431846-e1578596475203-1800x0-c-default.jpeg',
  
  },
  {
    src: 'https://bsscommerce.com/blog/wp-content/uploads/2016/08/The-Best-Magento-2-Ajax-Add-to-Cart-Extension-for-Your-Online-Store.png',
   
  },
  {
    src: "https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg",
   
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="image" src={item.src} alt={item.altText} />
        <CarouselCaption/>
      </CarouselItem>
    );
  });

  return (
    <div>
    <Carousel
    className="crousal"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators className="crousalitem" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Example;