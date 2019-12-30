import React from "react";
import UserCard from "./UserCard";
import MediaCard from "./MediaCard";
import TextCard from "./TextCard";
import CreateLinkCard from "./CreateLink";

class LinksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Links: [
        {
          ImageURL:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBHsq0b7HxFc%2Fmaxresdefault.jpg&f=1&nofb=1",
          Link:
            "https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A",
          Title: "Mixed Feelings",
          Description: "New single"
        },
        {
          ImageURL: "",
          Link:
            "https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A",
          Title: "Mixed Feelings",
          Description: "Check out my lastest release"
        }
      ]
    };
  }

  addLink = link => {
    this.setState({
      Links: this.state.Links.concat(link)
    });
  };

  renderLinkTypes = () => {
    let links = this.state.Links;
    let linkComponents = [];
    if (links.length) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].ImageURL.length || links[i].Link.includes("youtube")) {
          linkComponents.push(
            <MediaCard
              image={links[i].ImageURL}
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
              key={i}
            />
          );
        } else {
          linkComponents.push(
            <TextCard
              link={links[i].Link}
              title={links[i].Title}
              description={links[i].Description}
              key={i}
            />
          );
        }
      }
    }

    return linkComponents;
  };

  render() {
    const renderLinks = this.renderLinkTypes();
    return (
      <React.Fragment>
        <UserCard
          image="https://i1.sndcdn.com/avatars-000378232415-umh2jq-t500x500.jpg"
          name="Artist Name Here"
          description="Artist bio can go here"
        />
        {renderLinks}
        <MediaCard link="https://www.youtube.com/embed/VxWlL1Phh70" />
        <MediaCard link="https://www.youtube.com/watch?v=0FtJMvnHjU4" />
        <CreateLinkCard addLink={this.addLink} />
      </React.Fragment>
    );
  }
}

export default LinksContainer;