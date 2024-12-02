import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: window.location.pathname.replace("/", "") || "all",
    photos: [],
  };

  // tab
  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name);
      this.updateContent(name);
    },
  });

  // content
  const content = new Content({
    $app,
    initialState: [],
  });

  // state
  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    try {
      const currentTab = tabName === "all" ? "" : tabName;
      const photos = await request(currentTab);
      this.setState({
        ...this.state,
        currentTab: tabName,
        photos: photos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  window.addEventListener("popstate", async () => {
    this.updateContent(window.location.pathname.replace("/", "") || "all");
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
