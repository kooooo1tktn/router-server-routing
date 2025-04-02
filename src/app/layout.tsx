import { Route } from "@lazarv/react-server/router";
import { matchers } from "../utils/matchers";
import FilePage from "./files/[id]/page";

type RouteParams = {
  id: string;
  parsed?: number;
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My App</h1>
        </header>
        <main>
          <Route
            path="/files/[id=number]"
            render={({ params }: { params: RouteParams }) => (
              <FilePage
                params={{
                  id: params.id,
                  parsed: params.parsed,
                }}
              />
            )}
            matchers={matchers}
          />
        </main>
      </body>
    </html>
  );
}