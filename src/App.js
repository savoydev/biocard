import React from "react";
import MediaCard from "./components/MediaCard";
import AppContainer from "./components/AppContainer";
import UserCard from "./components/UserCard";

function App() {
  return (
    <AppContainer>
      <UserCard name="Artist Name Here" description="Artist bio can go here" />
      <MediaCard
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
        description="Check out my latest release!"
      />
      <MediaCard
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
        description="Check out my latest release!"
      />
      <MediaCard
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
        description="Check out my latest release!"
      />
      <MediaCard
        link="https://open.spotify.com/album/0MOImG9dhPplgcVsrOveK5?si=7hR53EyvQXGm0FXJpJJu0A"
        title="Mixed Feelings"
        description="Check out my latest release!"
      />
    </AppContainer>
  );
}

export default App;
