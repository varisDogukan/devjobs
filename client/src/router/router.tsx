import { Landing, HomeLayout } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/:id",
        element: <div>Job Detail Page</div>,
      },
    ],
  },
]);

export default router;
