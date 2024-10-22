import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import './home.modules.css';

const Home = () => {
  return (
    <>
      <div className="full-screen">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">Welcome to Recipe App</h1>
          <Link href="/recipe-list">
            <Button variant="secondary">Explore Recipes</Button>
          </Link>
        </div>
        <div className="developer">
          <h4 className="developer-text">
            Developed by <span className="developer-name">Rao Hamza Tariq</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;