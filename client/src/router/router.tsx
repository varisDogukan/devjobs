import Error from "@/components/error/Error";
import { Landing, HomeLayout } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/devjobs/:id",
        element: <div>Job Detail Page</div>,
      },
    ],
  },
]);

export default router;
