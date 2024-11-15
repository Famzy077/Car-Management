// import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import '../index.css'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect,useState } from 'react'
import Axios from 'axios'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [activeindex, setActiveIndex] = useState(0)
  const totalSlides = 3; // Number of slides

  const dateTime = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (totalSlides));
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const toggleBtn = () => {
    setIsOpen(!isOpen)
  }

  // const [nav, setNav] = useState(false)
  // const navToogle = () => {
  //   setNav(!nav)
  // }
  // const navigate = useNavigate()
  Axios.defaults.withCredentials = true;
  const handleLogout = () => {
    Axios.get('http://localhost:4005/auth/logout')
    .then(res => {
      if(res.data.status){
        window.location.href = '/'
        // navigate('/')
      }
    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <div>
      <header className='header'>
        <menu>
          <h1><span className='text-brown'>Tesla</span>Cars</h1>
          <div className="menu">
          <i className='fa-solid fa-bars' onClick={toggleBtn}></i>
          </div>
        </menu>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>Cars</Link></li>
            <li><Link to={'/'}>Find Cars</Link></li>
            <div className='userIcon'>
              <li ><i className='fa-solid fa-user'></i>
              <ul className='drop-down'>
                <li><Link to={'/dashboard'}>Profile</Link></li>
                <li onClick={handleLogout}><Link to={'/'}>Logout</Link></li>
                <li><Link>Bookmark</Link></li>
              </ul>
            </li>
            </div>
          </ul>
        </nav>
          <div className='booking'>
            <h2 className='mt-4 p-[10px] px-[15px] rounded-lg bg-orange-700'><a href="#BOOK">Booking</a></h2>
          </div>

        {isOpen && (
          <div className='toggleMenu'>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/'}>Cars</Link></div>
            <div><Link to={'/'}>Find cars</Link></div>
            <div><Link to={'/dashboard'}>Profile</Link></div>
            <div onClick={handleLogout}><Link to={'/'}>Logout</Link></div>
          </div>
        )}
      </header>


      <Carousel className='caro' activeindex={activeindex}>
        <div className="relative w-full">
          <img
             src="https://img.freepik.com/free-photo/woman-enjoying-her-financially-independence-while-buying-car_23-2149434355.jpg?t=st=1731699953~exp=1731703553~hmac=df35fc105bd34848a0c65352f0da993a2b577e9cb542113b05eb2e1e83d568c6&w=740"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Your Partner in Health and Wellness
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts
              </Typography>
              <div className="flex justify-center gap-2 mb-8">
                <Button size="lg" color="white">
                  <Link to={'/'}>Explore</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-full">
        <img
          src="https://img.freepik.com/free-photo/view-3d-car_23-2150998628.jpg?t=st=1731700131~exp=1731703731~hmac=420ffbdc5f37c7a2caf7b788a987bd557b80d85f68c8cfb0d57df0d519aa7e0e&w=740"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We are committed to providing you with the best treatment
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/'}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_815.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              We believe everyone should have easy  access to best treatment
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a cl quality
              
              
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/'}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>

      <div className="arrow-top text-end relative my-10 mx-2">
        <a href="#top" className="text-3xl text-blue-900 font-bold items-center p-5 bg-gray-100 shadow-xl h-[50px] w-[50px] rounded-full"><i className="fa-solid fa-arrow-up"></i></a>
      </div>

      <footer className=''>
        <main className='footer grid p-10 bg-blue-400 text-white leading-10 text-xl'>
          <div className="footer-content">
            <h1 className='m-4 font-bold text-2xl'>Tesla Cars</h1>
            <div>
              <p>123 Anywhere St., Any City 12345</p>
              <p>123-456-7890</p>
              <p>hellocallcenter@gmail.com</p>
            </div>
          </div>
          <div>
            <p><Link to={''}>About Us</Link></p>
            <p><Link to={''}>Departments</Link></p>
            <p><Link to={''}>Doctors</Link></p>
            <p><Link to={''}>Timetable</Link></p>
            <p><Link to={''}>Appointment</Link></p>
            <p><Link to={''}>Testimonials</Link></p>
          </div>
          <div>
            <p><Link to={''}>Blog</Link></p>
            <p><Link to={''}>Contact Us</Link></p>
            <p><Link to={''}>FAQs</Link></p>
            <p><Link to={''}>Privacy Policy</Link></p>
            <p><Link to={''}>Terms and Conditions</Link></p>
          </div>
          <div>
            <h2>Be Our Subscribers</h2>
            <p>To get the latest news about health from our experts</p>
            <form className='shadow-none' onSubmit={handleSubmit} action="">
              <input required className='w-auto p-1' type="email" placeholder='Subscribe'/> <br />
              <button className='border-1 rounded-lg bg-orange-900 text-white px-9 shadow-xl'>Submit</button>
            </form>
          </div>
        </main>
        <article className='footerArticle'>
          <div>
          <p>Follow Us</p>
            <div><i className="fa-brands fa-square-facebook"></i></div>
            <div><i className="fa-brands fa-youtube"></i></div>
            <div><i className="fa-brands fa-linkedin"></i></div>
            <div><i className="fa-brands fa-instagram"></i></div>
            <div><i className="fa-brands fa-linkedin"></i></div>
          </div>
          <div>
            <p>Copyright © {dateTime } Health Care developed by <b>Femi</b>. All rights reserved.</p>
          </div>
        </article>
      </footer>
    </div>


  )
}
const handleSubmit = (index) => {
  index.preventDefault()
  index.target.reset()
    alert('Thanks for subscribed')
}
export default Home