import Acordeon from "./Acordeon";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  test("render icon", () => {
    render(<Acordeon />)
    expect(screen.getByAltText('react-icon')).toBeDefined();
  });
});
