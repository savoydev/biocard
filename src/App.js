import React from "react";
import AppContainer from "./components/AppContainer";
import UserCard from "./components/UserCard";
import TextCard from "./components/TextCard";
import MediaCard from "./components/MediaCard";
import SocialMediaCard from "./components/SocialMediaCard";

function App() {
  return (
    <AppContainer>
      <UserCard name="Artist Name Here" description="Artist bio can go here" />
      <TextCard
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
        description="Check out my latest release!"
      />
      <MediaCard link="https://www.youtube.com/embed/VxWlL1Phh70" />
      <MediaCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBHsq0b7HxFc%2Fmaxresdefault.jpg&f=1&nofb=1"
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
      />
      <SocialMediaCard />
    </AppContainer>
  );
}

export default App;
