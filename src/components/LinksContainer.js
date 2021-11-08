import React from 'react';
import UserCard from './Cards/UserCard';
import ImageCard from './Cards/ImageCard';
import TextCard from './Cards/TextCard';
import VideoCard from './Cards/VideoCard';
import CreateLinkCard from '../components/Cards/CreateLinkCard';
import ThemeSelectionCard from '../components/Cards/ThemeSelectionCard';
import Button from '../components/Common/Button';
import EditCardLink from './Cards/EditLinkCard';
import styled from 'styled-components';
import ARViewer from './ARViewer';

const mockLinks = require('../data/Links.json');
const mockUsers = require('../data/UserInfo.json');

const StyledAdminBar = styled.div`
background: #fff;
position: fixed;
left: 0;
right: 0;
z-index: 2;
bottom: -10px;
padding: 10px 8px 20px 8px;
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-around;
border-radius: ${(props) => props.theme.cardStyle.BORDER_RADIUS};
box-shadow: ${(props) => props.theme.cardStyle.CARD_TOP_SHADOW};

button{
  margin: 0 6px;
  display: inline-block;
  padding: 10px 0;
  font-size: 1.15rem;
  min-width: 0;
  color: #000;
  margin-bottom: 0;  svg {
    position: relative;
    top: 6px;
  }
}

@media (min-width: 1000px) {
  left: 0;
  top:0;
  right: auto;
  display:flex;
  flex-direction: column;
}
`;

class LinksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowThemeSelection: false,
      ShowLinkCreation: false,
      ShowEditLink: false,
      editMode: false,
      user: null,
      Links: [],
      activeEditLink: null,
      showAR: false,
    };
  }

  componentDidMount() {
    this.getUser();
    this.getLinks();
  }

  async getUser() {
    this.setState({
      user: mockUsers,
    });
  }

  async getLinks() {
    this.setState({
      Links: mockLinks,
    });
  }

  getLinkType = () => {
    let link = this.props.link;

    if (link.includes('youtube')) {
      return this.getYoutubeEmbedType();
    }
  };

  getYoutubeEmbedType = (link) => {
    let embedString = '';
    if (link.includes('embed')) {
      embedString = link.split('/embed/').pop();
    } else if (link.includes('watch')) {
      embedString = link.split('/watch?v=').pop();
    }
    return embedString;
  };

  addLink = (link) => {
    this.setState({
      Links: this.state.Links.concat(link),
      ShowLinkCreation: false,
    });
  };

  renderLinkTypes = () => {
    let edit = this.state.editMode;
    let links = this.state.Links;
    let linkComponents = [];
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].ImageURL.length) {
          linkComponents.push(
            <ImageCard
              thisLink={links[i]}
              key={i}
              as={edit ? 'div' : 'a'}
              edit={edit}
              showEditLink={edit ? this.showEditLink : null}
            />
          );
        } else if (links[i].Link.includes('youtube')) {
          linkComponents.push(
            <VideoCard
              title={links[i].Title}
              embedString={this.getYoutubeEmbedType(links[i].Link)}
              key={i}
            />
          );
        } else {
          linkComponents.push(
            <TextCard
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
              color={this.state.Color}
              cardStyle={this.state.CardStyle}
              key={i}
              as={edit ? 'div' : 'a'}
            />
          );
        }
      }
    }

    return linkComponents;
  };

  updateColor = (color) => {
    this.props.updateColor(color);
  };

  updateCardStyle = (cardStyle) => {
    this.props.updateCardStyle(cardStyle);
  };

  themeSelectionDone = () => {
    this.setState({
      ShowThemeSelection: false,
    });
  };

  linkCreationDone = () => {
    this.setState({
      ShowLinkCreation: false,
    });
  };

  showEditLink = (link) => {
    this.setState({
      ShowEditLink: true,
      activeEditLink: link,
    });
  };

  linkEditDone = () => {
    this.setState({
      ShowEditLink: false,
    });
  };

  showColorSelection = () => {
    this.setState(
      {
        ShowThemeSelection: true,
      },
      () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );
  };

  showLinkCreation = () => {
    this.setState({
      ShowLinkCreation: true,
    });
  };

  toggleEditMode = () => {
    const editMode = this.state.editMode;
    this.setState(
      {
        editMode: !editMode,
      },
      () => {
        this.renderLinkTypes();
      }
    );
  };

  showAR = () => {
    this.setState({
      showAR: true,
    });
  };

  closeAR = () => {
    this.setState({
      showAR: false,
    });
  };

  render() {
    const renderLinks = this.renderLinkTypes();
    return (
      <React.Fragment>
        {this.state.user && <UserCard user={this.state.user} />}
        {renderLinks}
        {this.state.showAR && (
          <>
            <Button type="button" onClick={this.showAR}>
              View in AR!
            </Button>
            <ARViewer show={this.state.showAR} closeAR={this.closeAR} />
          </>
        )}
        <StyledAdminBar>
          <Button type="button" secondary onClick={this.toggleEditMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>{' '}
            Edit
          </Button>
          <Button type="button" secondary onClick={this.showLinkCreation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>{' '}
            New
          </Button>
          <Button type="button" secondary onClick={this.showColorSelection}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>{' '}
            Theme
          </Button>
        </StyledAdminBar>
        <CreateLinkCard
          show={this.state.ShowLinkCreation}
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
          addLink={this.addLink}
          linkCreationDone={this.linkCreationDone}
        />
        <ThemeSelectionCard
          show={this.state.ShowThemeSelection}
          color={this.state.Color}
          cardStyle={this.state.CardStyle}
          themeSelectionDone={this.themeSelectionDone}
          updateCardStyle={this.updateCardStyle}
          updateColor={this.updateColor}
        />
        {this.state.activeEditLink && (
          <EditCardLink
            link={this.state.activeEditLink}
            show={this.state.ShowEditLink}
            linkEditDone={this.linkEditDone}
          />
        )}
      </React.Fragment>
    );
  }
}

export default LinksContainer;
