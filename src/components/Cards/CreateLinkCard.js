import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import SlideCard from "./SlideCard";

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
  color: ${props => props.color.BASE};
  font-family: "Heebo";
  font-size: 1.25rem;
  line-height: 1.25rem;
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input.attrs(props => ({
  type: "text"
}))`
  border: 2px solid ${props => props.color.LIGHT};
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
  height: 50px;
  position: relaitve;
  top: -3px;
  width: 100%;
  box-shadow: none;
  font-size: 1.25rem;
  padding-left: 8px;
  box-sizing: border-box;
  color: ${props => props.color.BASE};
`;

const StyledButton = styled(Button)`
  margin: 40px 0 60px 0;
`;

class CreateLinkCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCreateCard: false,
      Title: "",
      Link: "",
      ImageURL: "",
      Description: ""
    };
  }

  showCreateCard = () => {
    let showCreateCard = this.state.showCreateCard;
    this.setState({
      showCreateCard: !showCreateCard
    });
  };

  submitLink = event => {
    event.preventDefault();
    this.addLink();
  };

  addLink = () => {
    let newLink = {
      ImageURL: this.state.ImageURL,
      Title: this.state.Title,
      Description: this.state.Description,
      Link: this.state.Link
    };
    this.props.addLink(newLink);
    this.setState({
      showCreateCard: false,
      Title: "",
      Link: "",
      ImageURL: "",
      Description: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { Title, Link, ImageURL, Description } = this.state;
    return (
      <SlideCard
        color={this.props.color}
        cardStyle={this.props.cardStyle}
        show={this.props.show}
      >
        <SlideCard.Header>Create a new link</SlideCard.Header>
        <form onSubmit={this.submitLink}>
          <InputWrapper>
            <InputLabel htmlFor="Title" color={this.props.color}>
              Title
            </InputLabel>
            <InputField
              name="Title"
              color={this.props.color}
              onChange={this.onChange}
              value={Title}
              cardStyle={this.props.cardStyle}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="Link" color={this.props.color}>
              Link
            </InputLabel>
            <InputField
              name="Link"
              color={this.props.color}
              onChange={this.onChange}
              value={Link}
              cardStyle={this.props.cardStyle}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="ImageURL" color={this.props.color}>
              Image URL
            </InputLabel>
            <InputField
              name="ImageURL"
              color={this.props.color}
              onChange={this.onChange}
              value={ImageURL}
              cardStyle={this.props.cardStyle}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="Description" color={this.props.color}>
              Description
            </InputLabel>
            <InputField
              name="Description"
              color={this.props.color}
              onChange={this.onChange}
              value={Description}
              cardStyle={this.props.cardStyle}
            />
          </InputWrapper>
          <StyledButton
            type="Submit"
            color={this.props.color}
            cardStyle={this.props.cardStyle}
          >
            Add Link
          </StyledButton>
        </form>
      </SlideCard>
    );
  }
}

export default CreateLinkCard;
