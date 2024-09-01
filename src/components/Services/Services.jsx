import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export const Services=()=>{
    return (
        <>
        <section className='bg-primary-100  p-16'>
            <div className='container mx-auto flex flex-col gap-16 items-center'>
                <div>
                    <h1>Our Services</h1>
                </div>
                <div className='container flex justify-between items-center'>
                    <div　className="flex flex-col gap-4 justify-center items-center text-center w-1/3 lg:flex-row ">
                        <Link to="/" className="w-24 h-24 border border-solid p-6 border-primary-500 rounded flex items-center justify-center">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex justify-center items-center text-left'>  
                            <p className='text-xl leading-7 '>
                                <span className='hidden lg:inline'>Curated </span>
                                  Cultural
                                <span className='block md:inline lg:block text-left'> Tours</span> 
                            </p>
                        </div>
                    </div>
                    <div　className="flex flex-col gap-4 justify-center items-center text-center w-1/3 lg:flex-row ">
                        <Link to="/" className="w-24 h-24 border border-solid p-6 border-primary-500 rounded flex items-center justify-center">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex justify-center items-center text-left'>  
                            <p className='text-xl leading-7 '>
                                Seasonal
                                <span className='hidden lg:block'>Experience and</span>
                                <span className='block md:inline lg:block'> Festivals</span> 
                            </p>
                        </div>
                    </div>
                    <div　className="flex flex-col gap-4 justify-center items-center text-center w-1/3 lg:flex-row ">
                        <Link to="/" className="w-24 h-24 border border-solid p-6 border-primary-500 rounded flex items-center justify-center">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex justify-center items-center text-left'>  
                            <p className='text-xl leading-7 '>
                                <span className='hidden lg:block'>Customized</span>
                                Adventure
                                <span className='block md:inline lg:block'> Packages</span> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
} 