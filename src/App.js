import React, { useContext } from "react";
import "./App.css";
import "./components/natour-project/starter/css/main.css";
import Sidebar from "./components/natour-project/starter/eachComponent/sidebar";
import Header from "./components/natour-project/starter/eachComponent/header";
import Realtors from "./components/natour-project/starter/eachComponent/realtors";
import Features from "./components/natour-project/starter/eachComponent/features";
import Homes from "./components/natour-project/starter/eachComponent/homes";
import Gallery from "./components/natour-project/starter/eachComponent/gallery";
import Footer from "./components/natour-project/starter/eachComponent/footer";
import StoryContent from "./components/natour-project/starter/eachComponent/storyContent";
import StoryPictures from "./components/natour-project/starter/eachComponent/storyPicutures";

function App() {
  return (
    <body className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </body>
  );
}

export default App;
