import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import ReachMe from "./components/ReachMe";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
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
