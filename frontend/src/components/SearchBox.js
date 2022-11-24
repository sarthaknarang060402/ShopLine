import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Col sm={8}>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className=''
          ></Form.Control>
        </Col>
        <Col sm={4}>
          <Button type='submit' variant='outline-success' className=''>
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox
