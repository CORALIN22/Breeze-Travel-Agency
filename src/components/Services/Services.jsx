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
                    <div　className="flex gap-4 md:flex-col">
                        <Link to="/" className="flex items-center border border-solid p-6 border-primary-500 rounded">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10 border-0 border-inherit" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex items-center'>
                            <p className='text-xl leading-7'>Curated <span className=''>Cultural</span> <br />Tours</p>
                        </div>
                    </div>
                    <div　className="flex gap-4">
                        <Link to="/" className="flex items-center border border-solid p-6 border-primary-500 rounded">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex items-center'>
                        <p className='text-xl leading-7'>Seasonal <br /><span>Experience and </span><br />Festivals</p>
                        </div>
                    </div>
                    <div　className="flex gap-4">
                        <Link to="/" className="flex items-center border border-solid p-6 border-primary-500 rounded">
                            <FontAwesomeIcon 
                            icon={faBookOpen} // Use faCartShopping here
                            style={{ color: "rgba(180, 136, 127, 1)" }} // Applying custom color
                            className="text-xl w-10 h-10" // Tailwind class for icon size
                            />
                        </Link>
                        <div className='flex items-center'>
                            <p className='text-xl leading-7'><span>Customized </span><br />Adventure<br />Packages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
} 