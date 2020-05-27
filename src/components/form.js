import React from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"
import StyledButton from './button';
import StyledInput from "../components/input";

export default class MailChimpForm extends React.Component {
    constructor() {
      super()
      this.state = { 
            name: "",
            email: "", 
            result: null };
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
      return (
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
        </form>
      )
    }
  }