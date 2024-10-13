import React from 'react'
import {home} from '../Data/dummydata'
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        {home.map((val, i)=> (
            <div className='heroContainer'>
                <h3>{val.text}</h3>
                <h1>
                  <Typewriter
                    options = {{strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart: true, loop: true }}
                  />
                </h1>
                <p data-aos='fade-left'>{val.desc}</p>
                <button className='primaryBtn' >Download CV</button>
            </div>
        ))}
      </section>
    </div>
  )
}

export default Hero
