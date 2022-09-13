import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Typeahead } from 'react-bootstrap-typeahead';
import SEO from '../components/SEO';
import techs from '../techs';

const randomTech = () => {
  const index = Math.floor(Math.random() * techs.length);

  return techs[index];
}

let tech = randomTech();

const Home: React.FC = () => {
  const [attempts, setAttempts] = useState<any>([]);
  const [guess, setGuess] = useState<any>([{ name: '' }]);
  const [hasHint, setHasHint] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const onGuess = (value: any) => {
    setGuess(value);
  }

  const onRestart = () => {
    setGuess([{ name: '' }]);
    setHasHint(false);
    setIsEnd(false);
    setAttempts([]);
    tech = randomTech();
  }

  const onSubmit = (event: any) => {
    event.preventDefault();

    const name = guess[0]?.name;

    if (typeof name === 'undefined' || name === '') {
      return;
    }

    if (name === tech.name) {
      setAttempts([
        ...attempts,
        { name: name, valid: true },
      ]);
      setHasHint(true);
      setIsEnd(true);
    } else {
      setAttempts([
        ...attempts,
        { name: name, valid: false },
      ]);
    }

    if (attempts.length === 5) {
      setHasHint(true);
      setIsEnd(true);
    }

    setGuess([{ name: '' }]);
  }

  const showHint = () => {
    setHasHint(true);
  }

  return (
    <SEO title="" description="Guess the technology (language, framework, ...) from the logo.">
      <Container>
        <Row className="mb-5">
          <Col lg={{ offset: 3, span: 6 }} className="text-center">
            <img src={`/tech/${tech.image}`} alt={tech.name} width="200" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={{ offset: 3, span: 6 }}>
            <Alert variant="dark">
              {
                isEnd ? (
                  <Alert.Heading>{tech.name}</Alert.Heading>
                ) : null
              }
              {
                hasHint ? (
                  tech.hint
                ) : (
                  <div className="text-center">
                    <Button onClick={showHint} variant="outline-dark">Show hint</Button>
                  </div>
                )
              }
              {
                isEnd ? (
                  <>
                    <hr />
                    <Alert.Link href={tech.url}>{tech.url}</Alert.Link>
                  </>
                ) : null
              }
            </Alert>
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
                <Form.Control
                  type="text"
                  placeholder={typeof attempts[5] === 'undefined' ? '' : attempts[5].name}
                  disabled
                  readOnly
                  isValid={typeof attempts[5] === 'undefined' ? false : attempts[5].valid}
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

              {
                isEnd ? (
                  <div className="text-center">
                    <Button onClick={onRestart} variant="success">Try another!</Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button type="submit">Guess</Button>
                  </div>
                )
              }
            </Form>
          </Col>
        </Row>
      </Container>
    </SEO>
  );
}

export default Home;
