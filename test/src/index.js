import React from 'react'
import ReactDOM from 'react-dom'
import styles from './login.module.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
class Button extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" Component={Button}>
                    <Button className={styles.button}>Button</Button>
                </Route>
            </Router>
        )
    }
}
ReactDOM.render(<Button />, document.getElementById("root"))