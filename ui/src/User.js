import React from 'react';
import UserData from './components/UserData'
import './assets/css/User.css';
import HeaderUser from './components/HeaderUser';

const user = () => {
  return (

    <div className="home">
      <header className="header">
        <HeaderUser />
      </header>
      <section>
        <UserData />
      </section>
    </div>

  )
}

export default user