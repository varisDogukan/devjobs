import Error from "@/components/error/Error";
import { Landing, HomeLayout } from "@/pages";
import DevJobDetail from "@/pages/DevJobDetail";
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
        element: <DevJobDetail />,
      },
    ],
  },
]);

export default router;
