import React from 'react';
import Carousel from 'nuka-carousel';
import images from "./../../images";
// import Icon from '@mdi/react';
// import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import style from './Banner.module.css';

const banners = [
    images.banner1,
    images.banner2,
    images.banner3
];

function Banner() {
    return (

        <div>
            <Carousel className={style.carousel}
                autoplay
                // autoplayReverse

                slidesToShow={1} cellAlign="center"
            >

                {banners.map(banner => (

                    <img key={Math.random()} src={banner} className={style.zoom} alt='banner'>

                    </img>


                ))}

            </ Carousel>
            <h1 className={style.bannerHeading}>Lets start something <br></br> big together.</h1>
        </div>



    );
}

export default Banner;