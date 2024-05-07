import Text from "@/components/text/Text";
import HomeLayout from "@/pages/HomeLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Text variant='xLarge'>Job List</Text>,
      },
      {
        path: "job/:id",
        element: <div>Job Detail Page</div>,
      },
    ],
  },
]);

export default router;
