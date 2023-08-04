import React,{useState} from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [showMenu , setShowMenu] = useState(false);
  const new_design_menu = (showMenu)=>{
    if(document.documentElement.clientWidth<=800){
      return{right: !showMenu && '-100'}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt='logo of web' width={100} />

            <OutsideClickHandler onOutsideClick={()=>{setShowMenu(false)}}>
              <div className="flexCenter h-menu" style={{new_design_menu}}>
                  <a href=''>Residencies</a>
                  <a href=''>Our Values</a>
                  <a href=''>Contact Us</a>
                  <a href=''>Get Started</a>
                  <button className='button'>
                      <a href=''>Contact</a>
                  </button>
              </div>
            </OutsideClickHandler>

            <div className='menu-icon' onClick={() => {
              setShowMenu((prev) => !prev);
              console.log(showMenu); // Use the updated value here since `setShowMenu` is asynchronous
            }}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
    </section>
  )
}

export default Header