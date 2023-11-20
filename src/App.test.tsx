import {describe, expect, it} from 'vitest';
import {render, screen} from "@testing-library/react";
import App from "./App.tsx";


describe('Renders main page correctly', () => {
    it('Should render the page correctly', () => {
        render(<App/>);
        const button = screen.queryByText('Welcome');
        expect(button).not.toBeNull();
    });
});