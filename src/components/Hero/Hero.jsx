export const Hero = () => {
  return (
    <>
      <section className='bg-[url("../src/assets/imgs-brz/hero-min.jpg")] bg-no-repeat bg-cover bg-center py-[67px]  flex-col justify-start items-center gap-10 inline-flex  w-screen h-[662px] md:py-[56px] lg:px-[469px] lg:py-[67px]'>
        <div className='h-40 flex-col justify-start items-center gap-2 inline-flex mx-5'>
          <h1 className='text-center'>
            Elevate your journey, where tradition meets wanderlust
          </h1>
          <h3 className='md:text-lg sm:text-base text-center md:px-5 sm:px-20'>
            Breeze Travel Agency believes every journey is a story waiting to be
            told
          </h3>
        </div>
        <button className='btnFilled'>Book Now</button>
      </section>
    </>
  );
};