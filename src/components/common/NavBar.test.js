import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
jest.mock("react-router-dom");

describe('Venue NavBar',()=>{
    test("render 'Home Page Title' ", ()=> {
      render(<NavBar/>);
      const linkElement = screen.getByTestId("title");
      expect(linkElement).toBeInTheDocument();
     });

     test("render 'Venue Button' ", ()=> {
        render(<NavBar/>);
        const linkElement = screen.getByTestId("venue-btn");
        expect(linkElement).toBeInTheDocument();
       });

       test("render 'Venue Book Now Button' ", ()=> {
        render(<NavBar/>);
        const linkElement = screen.getByTestId("book-btn");
        expect(linkElement).toBeInTheDocument();
       });

       test("render 'Venue Search Button' ", ()=> {
        render(<NavBar/>);
        const linkElement = screen.getByTestId("search-btn");
        expect(linkElement).toBeInTheDocument();
       });
       
    });