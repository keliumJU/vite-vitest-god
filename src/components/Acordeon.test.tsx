import Acordeon from "./Acordeon";
import { render, screen } from "@testing-library/react";
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

describe("Accordion", () => {
  test("render icon", () => {
    render(<Acordeon />)
    expect(screen.getByAltText('react-icon')).toBeDefined();
  });
  test("render title", () => {
    i18n.changeLanguage('en')
    render(
    <I18nextProvider i18n={i18n}>
      <Acordeon />
    </I18nextProvider>
    )
    expect(screen.getByText('title accordeon')).toBeDefined();
  });
});

