import { createBrowserRouter } from "react-router-dom";
import BackTest from "../BackTest";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BackTest />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
