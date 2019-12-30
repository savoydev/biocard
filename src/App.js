import React from "react";
import AppContainer from "./components/AppContainer";
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
