import React from "react";
import Button from "../Common/Button";
import SlideCard from "../Cards/SlideCard";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
  color: ${props => props.theme.color.BASE};
  font-family: "Heebo";
  font-size: 1.25rem;
  line-height: 1.25rem;
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input.attrs(props => ({
  type: "text"
}))`
  border: 2px solid ${props => props.theme.color.LIGHT};
  border-radius: ${props => props.theme.cardStyle.BORDER_RADIUS};
  height: 50px;
  position: relaitve;
  top: -3px;
  width: 100%;
  box-shadow: none;
  font-size: 1.25rem;
  padding-left: 8px;
  box-sizing: border-box;
  color: ${props => props.theme.color.BASE};
`;

const StyledButton = styled(Button)`
  margin: 20px 0 60px 0;
`;

class EditCardLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Link: "",
      ImageURL: "",
      Description: ""
    };
  }

  addLink = () => {
    let newLink = {
      ImageURL: this.state.ImageURL,
      Title: this.state.Title,
      Description: this.state.Description,
      Link: this.state.Link
    };
    this.props.addLink(newLink);
    this.setState({
      Title: "",
      Link: "",
      ImageURL: "",
      Description: ""
    });
  };

  submitLink = event => {
    event.preventDefault();
    this.addLink();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SlideCard show={this.props.show}>
        <SlideCard.Header>Edit link</SlideCard.Header>
        <form onSubmit={this.submitLink}>
          <InputWrapper>
            <InputLabel htmlFor="Title">Title</InputLabel>
            <InputField
              name="Title"
              onChange={this.onChange}
              value={this.props.link.Title}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="Link">Link</InputLabel>
            <InputField
              name="Link"
              onChange={this.onChange}
              value={this.props.link.Link}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="ImageURL">Image URL</InputLabel>
            <InputField
              name="ImageURL"
              onChange={this.onChange}
              value={this.props.link.ImageURL}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor="Description">Description</InputLabel>
            <InputField
              name="Description"
              onChange={this.onChange}
              value={this.props.link.Description}
            />
          </InputWrapper>
          <SlideCard.ButtonRow>
            <StyledButton type="Submit">Save</StyledButton>
            <StyledButton
              type="button"
              secondary
              onClick={this.props.linkEditDone}
            >
              Cancel
            </StyledButton>
          </SlideCard.ButtonRow>
        </form>
      </SlideCard>
    );
  }
}

export default EditCardLink;
