import React, { useState } from 'react';
import '../../sass/design/design.scss';
import data from './CardDesc';
import Model from './Model';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardDescription () {
  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);
  
  const getData = (img, title, desc, fullDescr, problem, duration, role, responsabilities, FigmaImg, video) => {
    let tempData = [img, title, desc, fullDescr, problem, duration, role, responsabilities,FigmaImg, video];
    setTempData(item => [1, ...tempData])
    console.warn(tempData);
    return setModel(true);

  }
  return (
    <div id="design" className='color--container'>
      <Container>
      <Row className=' py-4'>
          <Col >
            <h3 className='title-design'>UX Case Studies</h3>
          </Col>
        </Row>
        {data.cardData.map((item, index)=>{
          return (
            <Row className='clearfix py-4 ' key={index}>
              <Col sm={4}>
                <img src={item.imgScr} className='img-fluid ' alt="" />
              </Col>
              <Col sm={8} className='pt-4 px-4'>
                <h3>{item.title}</h3>
                <p className='fs-4'>{item.desc}</p>
                <Button variant="primary"  className='btn-bd-primary' onClick={() =>  getData(item.title, item.desc, item.imgScr, item.fullDescr, item.problem, item.duration, item.role, item.responsabilities,item.FigmaImg, item.video)}>
                  Find out more
              </Button>
              </Col>
            </Row>
          )

        })}
       
        
      </Container>
      {
        model === true ? <Model  img={tempData[3]} title={tempData[1]} desc={tempData[2]} fullDescr={tempData[4]} problem={tempData[5]} duration={tempData[6]} role={tempData[7]} responsabilities={tempData[8]} FigmaImg={tempData[9]} video={tempData[10]} hide={() => setModel(false) } /> : ''
      }
       
    </div>
    
  )
}

export default CardDescription