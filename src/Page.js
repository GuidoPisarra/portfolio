import React, { Component } from 'react';
import Navbar from '../src/components/NavBar';
import LangCarusel from '../src/components/LangCarusel'

import  './Page.css';

function Page  (){
    
    return(         
            <div className="page">
                <Navbar/>
                <LangCarusel/>
            </div>
          )


}
export default Page;