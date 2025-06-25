import './SwiperButton.css'
import { useSwiper } from 'swiper/react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


function SwiperButton(){
  const swiper =useSwiper()
  return(
  <div className="swiperBtns">
    <button onClick={() => swiper.slidePrev()}><GrPrevious size='25px' /> </button>
    <button onClick={() => swiper.slideNext()}><GrNext size='25px' /></button>
  </div>

  );
}
export default SwiperButton