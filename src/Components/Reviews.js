import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Reviews({ reviewdata }) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                Viiew Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                    <Card body style={{ width: '800px' }}>
                        {
                            reviewdata.map(data=>

                                <div>
                                    <strong className='me-5'> {data.name}</strong>
                                    <small className='ms-auto p-3'>({data.rating} Ratings)</small> <br/><small>| {data.date} </small>
                                    <p> {data.comments} </p>
                                </div>
                                
                            )

                        }
                        </Card>
                       
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Reviews