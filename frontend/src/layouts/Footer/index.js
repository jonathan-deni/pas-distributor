import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import WhatsappImg from '../../assets/images/whatsapp.png'

class Header extends Component {

  render() {
    return (
      <footer>
        <div className="container-footer">
          <div className="content-footer">
            <Row>
              <Col>
                <Row xs={10}>
                  <Col lg={12}>
                    <div className="address-footer">
                      Address: 
                      Jl. KHZ. Mustofa No.317, Kahuripan, Kec. Tawang, Tasikmalaya, Jawa Barat 46115
                    </div>
                  </Col>
                </Row>
                <Row xs={5}>
                  <Col lg={12}>
                    <div className="copyright-footer">
                      Copyright 2021 © PT Jetset Tasikmalaya
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    Follow Us :
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ size: 3 }}>
                    <img src={WhatsappImg} />
                  </Col>
                  <Col sm={{ size: 3 }}>
                    <img src={WhatsappImg} />
                  </Col>
                  <Col sm={{ size: 3 }}>
                    <img src={WhatsappImg} />
                  </Col>
                  <Col sm={{ size: 3 }}>
                    <img src={WhatsappImg} />
                  </Col>
                </Row>
              </Col>
            </Row>

          </div>
        </div>
      </footer>
    );
  }
}

export default Header;