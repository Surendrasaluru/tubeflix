import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import ReachMe from "./components/ReachMe";
import ShortPage from "./components/ShortPage";
import MusicPage from "./components/MusicPage";
import KidsPage from "./components/KidsPage";
import Plus from "./components/Plus";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/home",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "reachme",
        element: <ReachMe />,
      },
      {
        path: "shorts",
        element: <ShortPage />,
      },
      {
        path: "music",
        element: <MusicPage />,
      },
      {
        path: "kids",
        element: <KidsPage />,
      },
      {
        path: "plus",
        element: <Plus />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="bg-black text-white">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
