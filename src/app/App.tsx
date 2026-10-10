import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shell } from "./Shell.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { NotFoundPage } from "../pages/NotFoundPage.tsx";
import { StoryPage } from "../pages/StoryPage.tsx";
import { TokenPage } from "../pages/TokenPage.tsx";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Shell />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "story", element: <StoryPage /> },
        { path: "token", element: <TokenPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
);

export function App() {
  return <RouterProvider router={router} />;
}
