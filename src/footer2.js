import React, { Component } from 'react'
import "./footer2.css";
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default class Footer2 extends Component {
  render() {
    return (
          <div >
            <div className="container-fluid wrapper">
              <div className="row">
                  <div className="quickLinks col-md-2">
                    <p className="quick">Quick Links</p>
                  </div>
                  <div  className="all col-md-1">
                    <p>ABOUT US</p>  
                  </div>
                  <div  className="all col-md-1">
                    <p>OUR TEAM</p> 
                  </div>
                  <div  className="all col-md-1 shift-a">
                    <p>ALUMINI</p> 
                  </div>
                  <div  className="all col-md-1">
                    <p>PROJECTS</p>  
                  </div>
                  <div  className="all col-md-1">
                    <p>RESOURCES</p> 
                  </div>
                  <div  className="all col-md-1 shift">
                    <p>BLOGS</p>                
                  </div>           
                  <div className="icons col-md-4">
                    <div className="lg">
                      <h1><FaYoutube/></h1><h2><FaInstagram/></h2><h2><FaFacebook/></h2>
                    </div>
                  </div>
               </div>
            </div>
          </div>   
    )
  }
}