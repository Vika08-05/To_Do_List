import React, { Fragment } from "react"
import '../../index.css';
import { Link } from "react-router-dom"

class Header extends React.Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="card-header" style={{ marginBottom: "-4%" }}>
                <p> <i Name="fa fa-bars"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i><input class="fa fa-calendar ml-4" aria-hidden="true" disabled value={this.state.curTime}></input> <input type="search" class="searchinput"></input><i className="fa fa-search" aria-hidden="true"></i> <span className="float-right"> <Link to="/" className="mr-4 navTask">Task</Link> <Link to="/newTask"  className="mr-4">New</Link></span> </p>
            </div>
        )
    }


}


export default Header
