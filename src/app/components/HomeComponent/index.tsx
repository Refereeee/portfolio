import { FC } from 'react';
import { Hind } from 'next/font/google';

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700',]
})

const HomeComponent: FC = () => {
  return (
    <>
      <div id='home' style={{
        backgroundImage: "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)",
        minHeight: "500px",
        maxHeight: "1200px",
        height: "100%",
        width: "100%"
      }}>
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p className={`text-[#47AEDE] text-3xl md:text-base lg-text-2xl ${hind.className}`}>Hi There!</p>
                  <h1
                    className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I'm Igor
                  </h1>
                  <h2 className={`"text-[#223740] py-2 font-bold uppercase md:text-xl" ${hind.className}`}>CEO edubaba
                    Digital &amp an Inst</h2>
                  <a href="/#portfolio"
                    className={` cursor-pointer inline-block bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover-bg:[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}>Projects</a>
                  <a href="ehizcv.pdf" download="download Ehizcv.pdf"
                     className={`ml-10 cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover-bg:[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}>Projects</a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md:col-span-7">
              <div className="container m-auto">
                <img
                  src="/ehizeex.png"
                  decoding="async"
                  alt="profile pics"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
