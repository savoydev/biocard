import React from "react";
import UserCard from "./Cards/UserCard";
import ImageCard from "./Cards/ImageCard";
import TextCard from "./Cards/TextCard";
import VideoCard from "./Cards/VideoCard";
import CreateLinkCard from "../components/Cards/CreateLinkCard";
import ThemeSelectionCard from "../components/Cards/ThemeSelectionCard";
import Button from "../components/Common/Button";
import EditCardLink from "./Cards/EditLinkCard";

const mockLinks = require("../data/Links.json");
const mockUsers = require("../data/UserInfo.json");

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
      activeEditLink: null
    };
  }

  componentDidMount() {
    this.getUser();
    this.getLinks();
  }

  async getUser() {
    this.setState({
      user: mockUsers
    });
  }

  async getLinks() {
    this.setState({
      Links: mockLinks
    });
  }

  getLinkType = () => {
    let link = this.props.link;

    if (link.includes("youtube")) {
      return this.getYoutubeEmbedType();
    }
  };

  getYoutubeEmbedType = link => {
    let embedString = "";
    if (link.includes("embed")) {
      embedString = link.split("/embed/").pop();
    } else if (link.includes("watch")) {
      embedString = link.split("/watch?v=").pop();
    }
    return embedString;
  };

  addLink = link => {
    this.setState({
      Links: this.state.Links.concat(link),
      ShowLinkCreation: false
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
              as={edit ? "div" : "a"}
              edit={edit}
              showEditLink={edit ? this.showEditLink : null}
            />
          );
        } else if (links[i].Link.includes("youtube")) {
          linkComponents.push(
            <VideoCard
              title={links[i].Title}
              embedString={this.getYoutubeEmbedType(links[i].Link)}
              color={this.state.Color}
              cardStyle={this.state.CardStyle}
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
              as={edit ? "div" : "a"}
            />
          );
        }
      }
    }

    return linkComponents;
  };

  updateColor = color => {
    this.props.updateColor(color);
  };

  updateCardStyle = cardStyle => {
    this.props.updateCardStyle(cardStyle);
  };

  themeSelectionDone = () => {
    this.setState({
      ShowThemeSelection: false
    });
  };

  linkCreationDone = () => {
    this.setState({
      ShowLinkCreation: false
    });
  };

  showEditLink = link => {
    this.setState({
      ShowEditLink: true,
      activeEditLink: link
    });
  };

  linkEditDone = () => {
    this.setState({
      ShowEditLink: false
    });
  };

  showColorSelection = () => {
    this.setState(
      {
        ShowThemeSelection: true
      },
      () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    );
  };

  showLinkCreation = () => {
    this.setState({
      ShowLinkCreation: true
    });
  };

  toggleEditMode = () => {
    const editMode = this.state.editMode;
    this.setState(
      {
        editMode: !editMode
      },
      () => {
        this.renderLinkTypes();
      }
    );
  };

  render() {
    const renderLinks = this.renderLinkTypes();
    return (
      <React.Fragment>
        {this.state.user && <UserCard user={this.state.user} />}
        {renderLinks}
        <Button type="button" onClick={this.toggleEditMode}>
          Edit links
        </Button>
        <Button type="button" onClick={this.showLinkCreation}>
          Create new link
        </Button>
        <Button type="button" onClick={this.showColorSelection}>
          Change theme
        </Button>
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
