import React from "react";
import {Container, Navbar, Col} from "react-bootstrap";

class Footer extends React.Component{
    render() {
        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear} - {fullYear+1},  All Rights Reserved by Coin A-Z</div>
                    </Col>
                </Container>
            </Navbar>

        );
    }
}

export default Footer;