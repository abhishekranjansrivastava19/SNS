import React from 'react'
import './Home_page.css';
import Sidenav from '../Sidenav/Sidenav'

const Home_page = () => {
  return (
    <div>
      <div className='homepage bg-body-tertiary mt-5' style={{marginTop:'18vh'}}>
      <div className='container-fluid'>
        <div className='row p-4 bg-body-tertiary'>
          <div className='col-2'></div>
          <div className='col-4'>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className='col-6'></div>
        </div>
        <div className='row'>
          <div className='col-2 p-0'>
          </div>
          <div className='col-8 p-0 bg-body-tertiary'>
          <Sidenav />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home_page
