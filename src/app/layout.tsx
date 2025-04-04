// src/app/layout.tsx
import { Route } from "@lazarv/react-server/router";
import FilePage from "./files/[id]/page";
import HomePage from "./page";

export default function Layout() {
  const matchers = {
    number: (value) => {
      const isNumber = /^\d+$/.test(value);
      console.log(`Matching ${value} as number: ${isNumber}`);
      return isNumber;
    },
  };

  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/files/[id=number]"
        render={(props) => {
          console.log("Route matched with props:", props);
          return <FilePage {...props} />;
        }}
        matchers={matchers}
      />{" "}
    </>
  );
}
