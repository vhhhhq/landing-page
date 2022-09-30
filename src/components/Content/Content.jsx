import React from 'react'
import './Content.scss'
import one from '../../assets/one.svg'
import two from '../../assets/two.svg'
import Header from '../Header/Header'
import three from '../../assets/three.svg'



const Content = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Header/>
          <div className='card'>
              <div className='content'>
                  <h1>The Formation of Miilky Way Galaxy</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id vitae quis et sed.</p>
              </div>
              <img src={one} alt="" />
          </div>
          <div className='card'>
              <div className='content'>
                  <h1>Learn About Meteor Shower</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id vitae quis et sed lectus ac imperdiet tellus.</p>
              </div>
              <img src={two} alt="" />
          </div>
          <div className='card'>
              <div className='content'>
                  <h1>Discover Our Earth</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium nibh risus, massa, nisi posuere enim nascetur...</p>
              </div>
              <img src={three} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Content