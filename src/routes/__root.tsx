import { Fragment } from "react";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

const Route = createRootRoute({
  component: () => (
    <Fragment>
      <HeadContent />
      <Outlet />
      {process.env.NODE_ENV === "development" && (
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
      <Scripts />
    </Fragment>
  ),
});

export { Route };
