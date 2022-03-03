import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../assets/Images/banner.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div>
                <Image src={banner} alt='banner' />
                <p className="legend">Lorem Ipsum is simply dummy text of the printing</p>
            </div>
        </Carousel>
    )
};

export default Banner;
