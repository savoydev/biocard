import React, { Component } from "react";
import BasicCard from "./BasicCard";
import styled, { ThemeConsumer } from "styled-components";
import COLORS from "../constants/Colors";

const CreateLinkCardStyled = styled(BasicCard)`
  background-color: #fff;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  margin-right: 10px;
  color: ${COLORS.PRUSSIAN_BLUE};
  font-family: "Heebo";
  font-size: 1.25rem;
  line-height: 1.25rem;
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  border: 2px solid #0b3c5d30;
  border-radius: 10px;
  height: 50px;
  position: relaitve;
  top: -3px;
  width: 100%;
  font-size: 1.25rem;
  padding-left: 8px;
  box-sizing: border-box;
  color: ${COLORS.PRUSSIAN_BLUE};
`;

const Button = styled.button`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(11, 60, 93, 1) 0%,
    rgba(50, 140, 193, 1) 70%
  );
  color: ${COLORS.EGGSHELL};
  border: none;
  font-size: 1.25rem;
  line-height: 2.5rem;
  border-radius: 30px;
  margin: 0 auto;
  display: block;
  min-width: 100px;
  padding: 10px 30px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(130, 130, 130, 0.45);
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
      Image: "",
      Description: ""
    };
  }

  showCreateCard = () => {
    let showCreateCard = this.state.showCreateCard;
    this.setState({
      showCreateCard: !showCreateCard
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showCreateCard && (
          <CreateLinkCardStyled>
            <form onSubmit={this.addLink}>
              <InputWrapper>
                <InputLabel>Title</InputLabel>
                <InputField type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Link</InputLabel>
                <InputField type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Image URL</InputLabel>
                <InputField type="text" />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Description</InputLabel>
                <InputField type="text" />
              </InputWrapper>
            </form>
          </CreateLinkCardStyled>
        )}
        <Button
          type="button"
          onClick={this.showCreateCard}
          disabled={this.state.showCreateCard}
        >
          Add new link
        </Button>
      </React.Fragment>
    );
  }
}

export default CreateLinkCard;
