import React, { Component } from 'react';
import {
    Col,
    Row,
    Container,
} from 'reactstrap';
import HomeBannerText from '../../components/HomeBannerText';
import AboutImage from '../../components/AboutImage';
import AboutImgFile from '../../assets/images/aboutimg.jpeg'

export default class HomeAbout extends Component {
    render() {
        return (
            <section id="homeabout" className="homeabout-container">
                <Container fluid>
                    <Row>
                        <Col sm={{ size: 6 }}>
                            <HomeBannerText title={'About Us'} desc={'We are a leading sandals company in West Java, established since 1945'} btnText={'More About Us'} />
                        </Col>
                        <Col sm={{ size: 6 }}>
                            <AboutImage imgSrc={AboutImgFile}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
