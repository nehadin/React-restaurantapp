import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({timedata}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Operating Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      
      <ListGroup.Item variant="primary">Monday : {timedata.Monday}</ListGroup.Item>
      <ListGroup.Item variant="info">Tuesday : {timedata.Tuesday}</ListGroup.Item>
      <ListGroup.Item variant="success">Wednesday : {timedata.Wednesday}</ListGroup.Item>
      <ListGroup.Item variant="danger">Thursday : {timedata.Thursday}</ListGroup.Item>
      <ListGroup.Item variant="warning">Friday : {timedata.Friday}</ListGroup.Item>
      <ListGroup.Item variant="light">Saturday : {timedata.Saturday}</ListGroup.Item>
      <ListGroup.Item variant="primary">Sunday : {timedata.Sunday}</ListGroup.Item>
      
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Operatingtime