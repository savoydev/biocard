import React, { Component } from "react";
import BasicCard from "./BasicCard";
import styled from "styled-components";
import COLORS from "../constants/Colors";

const CreateLinkCardStyled = styled(BasicCard)`
  background-color: #fff;
`;

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

const InputField = styled.input`
  border: 2px solid ${props => props.color.LIGHT};
  border-radius: ${props => props.cardStyle.BORDER_RADIUS};
  height: 50px;
  position: relaitve;
  top: -3px;
  width: 100%;
  font-size: 1.25rem;
  padding-left: 8px;
  box-sizing: border-box;
  color: ${props => props.color.BASE};
`;

const Button = styled.button`
  background: ${props => props.color.DEFAULT_GRADIENT};
  color: ${COLORS.EGGSHELL};
  font-family: "Open Sans";
  font-weight: bold;
  border: none;
  font-size: 1.25rem;
  line-height: 2.5rem;
  border-radius: ${props => props.cardStyle.BTN_BORDER_RADIUS};
  margin: 0 auto;
  display: block;
  min-width: 100px;
  padding: 10px 30px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: ${props => props.cardStyle.BTN_SHADOW};
  transition: all 0.3s;
  :hover {
    transform: scale(1.025);
    transition: all 0.3s;
    box-shadow: 0px 5px 15px rgba(130, 130, 130, 0.25);
  }
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
      <React.Fragment>
        {this.state.showCreateCard && (
          <CreateLinkCardStyled
            color={this.props.color}
            cardStyle={this.props.cardStyle}
          >
            <form onSubmit={this.submitLink}>
              <InputWrapper>
                <InputLabel htmlFor="Title" color={this.props.color}>
                  Title
                </InputLabel>
                <InputField
                  type="text"
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
                  type="text"
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
                  type="text"
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
                  type="text"
                  name="Description"
                  color={this.props.color}
                  onChange={this.onChange}
                  value={Description}
                  cardStyle={this.props.cardStyle}
                />
              </InputWrapper>
              <Button
                type="Submit"
                color={this.props.color}
                cardStyle={this.props.cardStyle}
              >
                Add Link
              </Button>
            </form>
          </CreateLinkCardStyled>
        )}
        <Button
          type="button"
          color={this.props.color}
          onClick={this.showCreateCard}
          disabled={this.state.showCreateCard}
          cardStyle={this.props.cardStyle}
        >
          Create new link
        </Button>
      </React.Fragment>
    );
  }
}

export default CreateLinkCard;
