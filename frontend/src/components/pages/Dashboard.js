import React, {Component} from "react";
import axios from "axios";

export default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            dashboard : []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/register")
            .then((data) => {
                this.setState({dashboard : data});
            });
    }

    render() {
        return (
            <div className="text-white"> Dashboard
                {/*<NavigationBar/>*/}
            </div>
        );
    }
}

