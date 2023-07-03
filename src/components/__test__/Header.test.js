import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import HeaderComponent from "../Header";
import store from "../../../utils/store";

test("Check if logo is rendering properly", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.png");
});

test("Cart should have 0 items on initial rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const cartItems = header.getByTestId("cartItems");
  expect(cartItems.innerHTML).toBe("Cart - 0");
});

test("Online status is shown on rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("onlineStatus");
  expect(onlineStatus.innerHTML).toBe("✔️");
});
