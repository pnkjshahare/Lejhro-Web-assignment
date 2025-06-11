import React from 'react';
import Footer from '../compoents/Footer';
import Navbar from '../compoents/Navbar';
import innovationpng from '../../public/innovationpng.png';
import research from '../../public/research.png';
import bottompart from '../../public/bottompart.png'
import secondbottompart from '../../public/secondbottompart.png'
const Innovation = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar color="#2c7fbf" img={innovationpng} />
        <div className="flex justify-between ml-64 text-black  mt-10">
          <div>
            <h2 className="text-black text-4xl font-bold">
              Research Development
            </h2>
            <br />
            <div className="">
              We at Lejhro believe Research & Development(R&D) as the best
              investment for the future.
            </div>
            <div className="mt-4">
              <img src={research} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#f4f4f4] mt-12 ">
          <div className="flex justify-between ml-64 text-black pt-12">
            <div className="text-black text-[16px] md:text-[18px] leading-relaxed text-justify w-[500px]">
              R&D, an essential function for many businesses, is responsible for
              achieving breakthroughs in innovation. <br />
              <br />
              R&D always goes along with product development and behind every
              innovative product invention are decades of extensive research
              that ignites a spark within the organization.
              <br />
              <br /> Research is the most endangered investment area because
              both the development of inventiveness and its prosperous
              understanding takes doubt, including the profitability of the
              creativeness. In a resolution, "huge R and D spending does not
              assure a more creative, more fabulous profit or more market share.
            </div>
            <div className="mr-52 mb-12">
              <img
                className="h-[450px]"
                src="https://www.lejhro.com/images/innovations-r-and-d-small.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className='mt-10 ml-[120px]'>

            <img src={bottompart} alt="" />
        </div>

        <div className='bg-[#f4f4f4] mb-[-55px]'>
            <img src={secondbottompart} alt="" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Innovation;
