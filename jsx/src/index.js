import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class App extends React.Component {
    render() {
        return (
    
            <div className="App">
                 <div>
                     <p>ABC UNI</p>
                     <p1>Online Testing</p1>
                     <h1>LOGIN</h1>
                 </div>
                <div className="input-container">
                    <input type="text" placeholder="Username" />
                    <i class="zmdi zmdi-account zmdi-hc-lg"></i>
                </div>

                <div className="input-container-2">
                    <input type="password" placeholder="Password"  />
                   
                    <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
                    <button type="submit">Log In</button>
                </div>

                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));