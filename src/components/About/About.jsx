import { useState } from 'react';
import { office2 } from '../../assets/imgs-brz/images';

const About = () => {
  const [activeTab, setActiveTab] = useState('History');

  const renderContent = () => {
    switch (activeTab) {
      case 'History':
        return (
          <p>
            From humble beginnings to becoming a leading name in the travel
            industry, Breeze Travel Agency has curated countless journeys, each
            leaving an indelible mark on the hearts of our cherished clients. We
            take pride in our handpicked team of experts, passionate about
            sharing the hidden gems and storied narratives that make Japan a
            destination like no other.
            <br />
            <br />
            As we reflect on our history, we remain dedicated to innovation,
            quality, and the spirit of exploration. With every tour we craft, we
            invite you to join us on a voyage through time and tradition,
            unlocking the secrets and wonders that Japan holds.
          </p>
        );
      case 'Vision':
        return (
          <p>
            Our vision is to inspire and empower travelers by offering
            unparalleled experiences that uncover the beauty and depth of Japan.
            We aim to be the most trusted travel agency, known for our
            dedication to quality and personalized service. By embracing
            innovation and sustainable practices, we strive to lead the industry
            in curating journeys that leave a lasting impact. Through our
            commitment to excellence, we seek to connect people with the
            cultural richness of Japan, creating memories that will be cherished
            for a lifetime.
          </p>
        );
      case 'Mission':
        return (
          <p>
            Cultural Connection - To connect travelers with the soul of Japan by
            immersing them in its rich tapestry of culture and history.
            <br />
            <br />
            Meticulous Design - To meticulously design each journey, ensuring an
            authentic and seamless travel experience.
            <br />
            <br />
            Tradition and Modernity - To blend tradition with modernity,
            showcasing the diverse and dynamic essence of Japan.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section className='bg-primary-300 py-20'>
      <div className='flex flex-col justify-center items-center container mx-auto'>
        <h2 className='mb-10'>About Us</h2>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mb-6 md:mb-0'>
            <img
              src={office2}
              alt='Office Interior'
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className='flex flex-col justify-between md:w-1/2 md:pl-8'>
            <div className='grid grid-cols-3 divide-x-reverse divide-primary-500 divide-solid'>
              <button
                onClick={() => setActiveTab('History')}
                className={`py-2  ${
                  activeTab === 'History'
                    ? ' bg-primary-500  text-brz-white'
                    : 'border-2 divider-solid border-primary-500'
                }`}
              >
                History
              </button>
              <button
                onClick={() => setActiveTab('Vision')}
                className={`py-2  ${
                  activeTab === 'Vision'
                    ? ' bg-primary-500  text-brz-white'
                    : 'border-2 border-solid border-primary-500'
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab('Mission')}
                className={`py-2  ${
                  activeTab === 'Mission'
                    ? ' bg-primary-500  text-brz-white'
                    : 'border-2 divider-solid border-primary-500'
                }`}
              >
                Mission
              </button>
            </div>
            <div className='text-gray-700 text-lg leading-relaxed'>
              {renderContent()}
            </div>
            <button className='btnOutlined my-10 w-[200px] hover:border-0 hover:bg-primary-500 hover:text-brz-white'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
