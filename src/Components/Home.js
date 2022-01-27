import React from 'react';
import image from "../bg.jpg"



// 1. for the main section we open a main section element. inside the is an image tag for the background image and then 
//  a section to put the actual content.


const Home = () => {
  return (
    <main>
      <img src={image} alt="Relax" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen  pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm Django.</h1>
      </section>
    </main>
  )
};

export default Home;