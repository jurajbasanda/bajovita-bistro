import React from 'react';
import {Link,useLocation} from 'react-router-dom';

import NavIndex from './NavIndex'


export default function NoMatch() {
    let location = useLocation();
  return (
      <>
    <NavIndex/>
          <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h3>404
              Not Found for <code>{location.pathname}</code>
            </h3>
            <Link to='/' style={{color:'white'}}><h2>Go Back</h2></Link>
          </div>
          </>
        );
      }
