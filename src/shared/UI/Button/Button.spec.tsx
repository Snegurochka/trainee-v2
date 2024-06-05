import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ThemeAppProvider } from "../../../features/Theme";

describe("Button", () => {
//   it("should run handler on click", () => {
//     const onClick = jest.fn();
//     render(
//       <ThemeAppProvider>
//         <Button onClick={onClick} />
//       </ThemeAppProvider>
//     );
//     const element = screen.getByRole("button");
//     userEvent.click(element);
//     expect(onClick).toHaveBeenCalledTimes(1);
//   });

  it("should display children", () => {
    const onClick = jest.fn();
    render(
      <ThemeAppProvider>
        <Button onClick={onClick}>test</Button>
      </ThemeAppProvider>
    );
    const element = screen.getByText("test");
    expect(element).toBeInTheDocument();
  });
});
