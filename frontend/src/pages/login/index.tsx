import React, { Component } from "react";
import { Alert, Container, Form, FormGroup } from "react-bootstrap";

import { ENDPOINT, SESSION_KEY } from "../../config";

export class LogIn extends Component<{}, ILogInStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showLogInFailed: false
    };

    this._usernameKeyPressHandler = this._usernameKeyPressHandler.bind(this);
    this._passwordKeyPressHandler = this._passwordKeyPressHandler.bind(this);
    this._logInRequest = this._logInRequest.bind(this);
    this._onEnterKeyPress = this._onEnterKeyPress.bind(this);
  }

  public render() {
    return (
      <Container>
        {
          // @ts-ignore
          this.state.showLogInFailed ?
          <Alert dismissible variant="danger" onClose={() => this.setState({showLogInFailed: false})}>
            <Alert.Heading>Invalid Credentials</Alert.Heading>
          </Alert> : 
          null
        }

        <Form id="form-control" action={ENDPOINT + "/apis/login"} encType="multipart/form-data" method="post">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              name="username" 
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this._usernameKeyPressHandler}
              onKeyPress={this._onEnterKeyPress}
            />
          </Form.Group>
    
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password} 
              onChange={this._passwordKeyPressHandler}
              onKeyPress={this._onEnterKeyPress}
            />
          </FormGroup>
    
          <Form.Control type="button" value="Log In" onClick={this._logInRequest} />
        </Form>

        <a href="/register">Don't have an account? Register here</a>
      </Container>
    );
  }

  private _usernameKeyPressHandler(e: any) {
    this.setState({username: e.target.value});
  }

  private _passwordKeyPressHandler(e: any) {
    this.setState({password: e.target.value});
  }

  private _onEnterKeyPress(e: any) {
    if(e.key === "Enter") {
      this._logInRequest();
    }
  }

  private _logInRequest() {
    let formData = new FormData(document.getElementById("form-control") as HTMLFormElement);

    fetch(ENDPOINT + "/apis/login", {
      method: "POST",
      mode: "cors",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      // Check if the session token is stored
      if(!data.payload.token) {
        // Alert user that the login failed, probably of incorrect credentials
        this.setState({ showLogInFailed: true });
        return;
      }
      
      // Store session token
      sessionStorage.setItem(SESSION_KEY, data.payload.token);

      // Redirect to app
      // @ts-ignore
      this.props.history.push("/app");
    })
    .catch((err) => console.error(err));
  }
}

interface ILogInStates {
  username: string;
  password: string;
  showLogInFailed: boolean;
}

export default LogIn;
