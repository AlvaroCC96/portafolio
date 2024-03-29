import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">

        <h2>Soy &Aacute;lvaro Castillo.</h2>
        <p>
        Desarrollador FullStack proactivo, con una fuerte capacidad de adaptación al cambio y 
        una disposici&oacute;n constante para aprender nuevas tecnolog&iacute;as relevantes en el mercado. 
        Mi meta es contribuir significativamente en mi entorno de trabajo, aportando mis conocimientos y habilidades, 
        adem&aacute;s de buscar un crecimiento continuo tanto a nivel personal como profesional.
        </p>
      </div>

      <div className="hero-img">
        
      <div>
          <img id="profile-img" src="./assets/images/11.jpg" alt="" />
          
        </div>

        <div className='tech-icon-list'>
          <div className="tech-icon">
            <img src="./assets/images/laravel.png" alt="laravel" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/python.png" alt="python" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/aws.png" alt="aws" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/mysql.png" alt="mysql" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/postgresql.png" alt="postgresql" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/git.png" alt="git" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
