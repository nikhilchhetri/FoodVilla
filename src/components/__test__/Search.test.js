import { fireEvent, render, waitFor } from "@testing-library/react";
import { RESTAURANT_DATA } from "../../mocks/data";
import BodyComponent from "../body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../../utils/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(15);
});

test("Search for string(food) in input box and render filtered restaurant", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-button"));
    const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput, {
      target: {
        value: "ki",
      },
    });
    const searchBtn = body.getByTestId("search-button");
    fireEvent.click(searchBtn);
    const restaurantList = body.getByTestId("restaurant-list");
    expect(restaurantList.children.length).toBe(2);
  });
});

test("Check list of all restaurant is rendered properly", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("search-button"));
    const restaurantList = body.getByTestId("restaurant-list");
    expect(restaurantList.children.length).toBe(16);
  });
});
