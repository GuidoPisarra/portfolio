import React from 'react';
import Navbar from './components/NavBar';
import LangCarusel from './components/LangCarusel'
import Card from './components/Card';
import  './Page.css';
import CardInfo from './components/CardInfo';
import Footer from './components/Footer';

function Page  (){
    
    return(         
            <div className="page">
                <Navbar title='Bienvenid@s!'/>
                <Card/>
                <div className='title'>
                    <h1 >Conocimientos</h1>

                </div>
                <LangCarusel/>
                <div className='title'>
                    <h1>Estudios</h1>                    
                </div>
                <div className='cole '>
                    <div className="study">
                        <CardInfo title="Universitarios" info="HTML5, Css, PHP, Boostrap, Angular, Javascript, Java, GO, PostgreSQL, Git"/>
                    </div>
                    <div className="study">
                        <CardInfo title="Autodidacta" info="Vue js, Node js, Npm, React "/>
                    </div>
                </div>
                <Footer/>
            </div>
          )


}
export default Page;