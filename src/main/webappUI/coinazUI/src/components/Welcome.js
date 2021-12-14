import React from 'react';
import {Link} from "react-router-dom";

 class Welcome extends React.Component {
     render() {
         return(
             <>
                <h1>Welcome!</h1>
                <div className="container">
                     Welcome {this.props.match.params.name}. You can view your todos here <Link to="/todos">here</Link>
                </div>
             </>
        )
     }}

export default Welcome;
