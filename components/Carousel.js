import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = ({ settings }) => {
    return (
        <Carousel>
            <div>
                <Image src={`http://3.88.73.172:3001/${settings?.banner1}`} alt='banner' height={800} width={1000} />
                {/* <p className="legend">Lorem Ipsum is simply dummy text of the printing</p> */}
            </div>
            <div>
                <Image src={`http://3.88.73.172:3001/${settings?.banner2}`} alt='banner' height={800} width={1000} />
                {/* <p className="legend">Lorem Ipsum is simply dummy text of the printing</p> */}
            </div>
            <div>
                <Image src={`http://3.88.73.172:3001/${settings?.banner3}`} alt='banner' height={800} width={1000} />
                {/* <p className="legend">Lorem Ipsum is simply dummy text of the printing</p> */}
            </div>
        </Carousel>
    )
};

export default Banner;
