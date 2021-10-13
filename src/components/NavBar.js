import  {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <header className="App-header">
            <nav className="navbar">
                          
              <span>
                {this.props.title}
              </span>
            
          </nav>
          </header>
        )
    }
}

export default NavBar;