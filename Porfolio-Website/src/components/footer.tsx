import React from 'react';
import { components } from './Navbar';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';
import './componentsStyles/footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <section className='footer'>
      <div>
        <div className='footer-container'>
          <div className=''> 
            <div className='logo'>
              <h2>LOGO</h2>
            </div>
            <div className='flex flex-col gap-2 justify-center '>
              <p className='footer-title'>{`Get 15% off your first order!`}</p>
              <p className='footer-subtitle'>{`Sign up to our mailing list below to get 15% off your first order. Don't worry, we hate spam too.`}</p>
            </div>
            <div className='subscribe-container'>
              <Input placeholder='Enter your email'/>
              <Button variant={"default"}>Subscribe</Button>
            </div>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 px-10 pt-10'> 
            <div className='services-section'>
              <h4>Services</h4>
              <ul className='flex flex-col gap-5 pt-8'>
                <Link href={'/services/'}><li>Data Analysis</li></Link>
                <Link href={'/services/'}><li>Data Science</li></Link>
                <Link href={'/services/'}><li>Web Development</li></Link>
              </ul>
            </div>
            <div className='all-access-section'>
              <h4>All-Access Pass</h4>
              <ul className='flex flex-col gap-5 pt-8'>
                <li>Sign Up</li>
                <li>Login In</li>
                <li>Reset Password</li>
              </ul>
            </div>
            <div className='information-section'>
              <h4>Information</h4>
              <ul className='flex flex-col gap-5 pt-8'>
                <li>FAQs</li>
                <Link href={"/Contact/"}><li>Contact Us</li></Link>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className='footer-info'>
            <p className='footer-credit'>This is my portfolio website created by <span className='text-destructive'>Rao Hamza Tariq</span></p>
            <div className='social-icons'>
              <a href={"https://www.linkedin.com/in/rao-hamza-tariq/?originalSubdomain=pk"}>
                <FaLinkedin />
              </a>
              <a href='https://twitter.com/rao_hamza_tariq'>
                <FaXTwitter />
              </a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}

export default Footer;
