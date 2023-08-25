import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Model extends Component {
  
  render () {
    let modelStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',
  }
    return (
      <div>
        <div className="modal show fade" style={modelStyle}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.title}</h5>
                <button type="button" className="btn-close" onClick={this.props.hide}></button>
              </div>
              <div className="modal-body">
                <Container className='p-4'>
                  <Row>
                    <Col sm={4}>
                      <img src={this.props.img} className='img-fluid'/>
                    </Col>
                    <Col sm={8} className='pt-4 px-4'>
                      <p>{this.props.desc}</p>
                      <p>{this.props.fullDescr}</p>
                      <p>The Problem: <br/> {this.props.problem}</p>
                      <p>Duration: <br/> {this.props.duration}</p>
                      <p>My role: <br/> {this.props.role}</p>
                      <p>Responsabilities: <br/> {this.props.responsabilities} </p>
                    </Col>
                  </Row>
                  <Row height={288}>
                    <Col> 
                      <img src={this.props.FigmaImg} alt=""  className='img-fluid' />
                    </Col>
                    <Col>
                      <img src={this.props.video} alt="" className='img-fluid' />
                    </Col>
                    
                  </Row>
                </Container>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}