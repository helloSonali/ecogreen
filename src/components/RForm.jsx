import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Navbar from './Navbar';
// import Navbar2 from './Navbar2';
import Footer from './Footer';


const styles = {
  container: {
    marginTop: '50px',
    marginBottom: '50px',

  },
  headerTitle: {
    textAlign: 'center',
    fontFamily:'Roboto',
    fontWeight:'800',
 

  },
  myform: {
    border: '1px solid #c7c7c7',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    fontSize: '14px',
    fontFamily: "Roboto"
  },
  formControl: {
    height: 'calc(1.5em + .75rem + 2px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
  formControlCheckbox: {
    position: 'static',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  button: {
    backgroundColor: '#8dc63f',
    borderColor: '#007bff',
    color: '#fff',
    display: 'inline-block',
    fontWeight: '400',
    textAlign: 'center',
    verticalAlign: 'middle',
    userSelect: 'none',
    border: '1px solid transparent',
    padding: '.375rem .75rem',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    borderRadius: '.25rem',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },
};
function RForm() {
  return (
    <React.Fragment>
      <Navbar />

      <div style={styles.container} className=" offset-3 container">
        <div className="col-md-7 mx-auto">
          <div style={styles.headerTitle} className="header-title">
            <h1 style={styles.headerTitle}>Request quote</h1>
            <p>Please tell us about your needs using the form below, and we will contact you and provide you with an accurate quotation.

            </p>
          </div>
          <div style={styles.myform} className="myform form">
            <Form>
              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>First Name</Form.Label>
                <Form.Control style={styles.formControl} type="text" placeholder="Enter First Name" />

              </Form.Group>


              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Last Name</Form.Label>
                <Form.Control style={styles.formControl} type="text" placeholder="Enter Last Name" />
              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Company</Form.Label>
                <Form.Control style={styles.formControl} type="text" />

              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Address</Form.Label>
                <Form.Control style={styles.formControl} type="text" />
              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>City</Form.Label>
                <Form.Control style={styles.formControl} type="text" />

              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3">
                <Form.Label style={styles.formLabel} >State</Form.Label>
                <Form.Select>
                  <option> select</option>
                </Form.Select>
              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Zip</Form.Label>
                <Form.Control style={styles.formControl} type="number" />
              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3">
                <Form.Label style={styles.formLabel} >Country</Form.Label>
                <Form.Select>
                  <option> select</option>
                </Form.Select>
              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Phone</Form.Label>
                <Form.Control style={styles.formControl} type="number" />

              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Fax</Form.Label>
                <Form.Control style={styles.formControl} type="text" placeholder="Enter email" />

              </Form.Group>
              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Email</Form.Label>
                <Form.Control style={styles.formControl} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>
              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Confirm Email</Form.Label>
                <Form.Control style={styles.formControl} type="email" />

              </Form.Group>

              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>How did you hear about us?</Form.Label>
                <Form.Control style={styles.formControl} type="text" />

              </Form.Group>
              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Purchase Timeframe</Form.Label>
                <Form.Control style={styles.formControl} type="text" />

              </Form.Group>
              <Form.Group style={styles.formGroup} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={styles.formLabel}>Request Here</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group style={styles.formControlCheckbox} className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button style={styles.button} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />

    </React.Fragment>
  )
}

export default RForm

// <Navbar2/>