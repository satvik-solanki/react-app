import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import FormLayout from "src/layouts/FormLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/form",
    layout: FormLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  // {
  //   exact: true,
  //   path: "/404",
  //   component: lazy(() => import("src/views/errors/NotFound")),
  // },
  // {
  //   component: () => <Redirect to="/404" />,
  // },
];
