import React from "react";
import AppContainer from "./components/AppContainer";
import UserCard from "./components/UserCard";
import TextCard from "./components/TextCard";
import MediaCard from "./components/MediaCard";
import SocialMediaCard from "./components/SocialMediaCard";
import LinksContainer from "./components/LinksContainer";

function App() {
  return (
    <AppContainer>
      <LinksContainer />
      <SocialMediaCard />
    </AppContainer>
  );
}

export default App;
