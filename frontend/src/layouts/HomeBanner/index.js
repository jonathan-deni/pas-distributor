import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CarouselShowScreen from '../../components/CarouselHomeScreen';
import HomeBannerText from '../../components/HomeBannerText';

export default class HomeBanner extends Component {
  render() {
    return (
      <section id="homebanner" className="container-homebanner">
        <Container fluid>
          <Row>
            <Col sm={{ size: 6 }}>
              <CarouselShowScreen />
            </Col>
            <Col sm={{ size: 6 }}>
              <HomeBannerText title={'Best Fit to Your Feet'} desc={'Find your best preferences here'} btnText={'Shop Now'}  />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
