import { render } from "@testing-library/react";
import Head from "../compornents/Head";


describe('<Head />', () => {
  it('should be able to render', () => {
    const head = render(<Head />);

    expect(head).toBeTruthy();
  });
})
