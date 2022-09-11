import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import SEO from '../components/SEO';
import techs from '../techs';

const randomTech = () => {
  const index = Math.floor(Math.random() * techs.length);

  return techs[index];
}

const tech = randomTech();

const Home: React.FC = () => {
  const [attempts, setAttempts] = useState<any>([]);
  const [guess, setGuess] = useState<any>([{ name: '' }]);

  const onGuess = (value: any) => {
    setGuess(value);
  }

  const onSubmit = (event: any) => {
    event.preventDefault();

    const name = guess[0]?.name;

    if (typeof name === 'undefined') {
      return;
    }

    if (name === tech.name) {
      setAttempts([
        ...attempts,
        { name: name, valid: true },
      ]);
    } else {
      setAttempts([
        ...attempts,
        { name: name, valid: false },
      ]);
    }

    setGuess([{ name: '' }]);
  }

  return (
    <SEO title="" description="Guess the technology (language, framework, ...) from the logo.">
      <Container>
        <Row className="mb-5">
          <Col lg={{ offset: 3, span: 6 }} className="text-center">
            <img src={`/tech/${tech.image}`} alt={tech.name} width="128" />
          </Col>
        </Row>
        <Row>
          <Col lg={{ offset: 3, span: 6 }}>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[0] === 'undefined' ? '' : attempts[0].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[0] === 'undefined' ? false : attempts[0].valid}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[1] === 'undefined' ? '' : attempts[1].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[1] === 'undefined' ? false : attempts[1].valid}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[2] === 'undefined' ? '' : attempts[2].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[2] === 'undefined' ? false : attempts[2].valid}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[3] === 'undefined' ? '' : attempts[3].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[3] === 'undefined' ? false : attempts[3].valid}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[4] === 'undefined' ? '' : attempts[4].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[4] === 'undefined' ? false : attempts[4].valid}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Typeahead
                  id="technology"
                  labelKey="name"
                  options={techs}
                  selected={guess}
                  placeholder="Choose a technology..."
                  onChange={onGuess}
                />
              </Form.Group>

              <Button type="submit">Guess</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </SEO>
  );
}

export default Home;
