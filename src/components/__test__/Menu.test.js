import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import { Provider } from "react-redux";
import store from "../../../utils/store";
import HeaderComponent from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, waitFor } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Check whether able to add menu items to cart", async () => {
  const restaurantMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(restaurantMenu.getByTestId("menu")));
  const addButton = restaurantMenu.getAllByTestId("add-btn");
  fireEvent.click(addButton[0]);
  fireEvent.click(addButton[1]);
  fireEvent.click(addButton[2]);
  const cartItems = restaurantMenu.getByTestId("cartItems");
  expect(cartItems.innerHTML).toBe("Cart - 3");
});
