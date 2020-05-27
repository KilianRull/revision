import React from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"
import StyledButton from './button';
import StyledInput from "../components/input";
import styled from "styled-components"

const Caption = styled.p`
    font-size: 14px;
    line-height: 20px;
    padding:0 24px;
    margin-top: 32px;
    opacity: 0.66;
`

export default class MailChimpForm extends React.Component {
    constructor() {
      super()
      this.state = { 
            name: "",
            email: "", 
            result: "" };
            this.handleChange = this.handleChange.bind(this);
    }
    _handleSubmit = async e => {
      e.preventDefault()
      const result = await addToMailchimp(this.state.email, { FNAME: this.state.name})
      this.setState({result: result})
    }
  handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

  render() {
      return this.state.result.result === "success" ? (
        <div>SUCCESS</div>
      ) : this.state.result.result === "error" ? (
        <div>ERROR</div>
      ) : (
        <form onSubmit={this._handleSubmit}>
          <StyledInput
            placeholder="Name" fullWidth
            id="name-input"
            label="Name"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
          <StyledInput
            placeholder="E-Mail" fullWidth
            id="email-input"
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <StyledButton
            variant="contained"
            color="secondary"
            label="Submit"
            type="submit"
          >
            Claim Checklist
          </StyledButton>
          <Caption>By clicking the above button you agree to our Terms of Service and have read and understood our Privacy Policy.</Caption>
        </form>
      )
    }
  }