import React, { Component } from 'react';
import { Box, Flex, Button, Text } from 'rebass';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: {

      },
      formValid: true
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
        case "email":
          {
            if(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "c";
                return { success };
              })
            }
            else {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "w";
                return { success };
              })
            }
            break
          }

          case "password":
            {
              if(value.length >= 7) {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "c";
                  return { success };
                })
              }
              else {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "w";
                  return { success };
                })
              }
              break
            }
          default:
            break
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.success.email === "c" && this.state.success.password === "c") {
      this.props.logInUser({ email: this.state.email, password: this.state.password });
      this.setState({email: '', password: '', formValid: true});
    }
    else {
      this.setState({ formValid: false });
    }
  }

  render() {
    return (
      <div>
        <Box
        as='form'
        onSubmit={this.handleSubmit}
        py={3}
        width={1/2}
        mx='auto'
        >
          <Flex mb={3}>
            <Box width={1/2} px={2}>
              <input type="text" onChange={this.handleChange} name="email" value={this.state.email} id="email" placeholder="Email" />
            </Box>
            <Box width={1/2} px={2}>
              <input type="password" onChange={this.handleChange} name="password" value={this.state.password} id="password" placeholder="Password" />
            </Box>
          </Flex>
          <Flex flexWrap='wrap'>
              <Button variant='primary' px={2} mr={2} type="submit" style={{cursor: "pointer"}}>
                Submit
              </Button>
          </Flex>
          {
            this.state.formValid ? null : (
              <Text fontSize={3} color='red' mt={2} mb={2}>
                Enter a correct email and make sure that the password is more than 6 characters.
              </Text>
            )
          }
        </Box>
      </div>
    );
  }
}

export default LogInForm;
