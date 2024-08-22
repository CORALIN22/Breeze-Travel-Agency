export const Hero = () => {
  return (
    <>
      <section className='bg-[url("../src/assets/imgs-brz/hero-min.jpg")] bg-no-repeat bg-cover bg-center w-screen h-[662px] px-[469px] py-[67px] flex-col justify-start items-center gap-10 inline-flex'>
        <div className='flex-col justify-start items-center gap-2 flex'>
          <h1>Elevate your journey, where tradition meets wanderlust</h1>
          <h3>
            Breeze Travel Agency believes every journey is a story waiting to be
            told
          </h3>
        </div>
        <button className='btnFilled'>Book Now</button>
      </section>
    </>
  );
}