import  {Component} from 'react';

class NavBar extends Component{
    render(){
        return(
            <header className="App-header">
            <nav className="navbar">
            <a className="navlink" href="/">              
              <span>
                {this.props.title}
              </span>
            </a>
          </nav>
          </header>
        )
    }
}

export default NavBar;