import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import VenueDetails from "./VenueDetails";
jest.mock("react-router-dom");

describe('Venue Details Page',()=>{
    //Venue Page
    test("render 'Available Venue Details' ", ()=> {
      render(<VenueDetails/>);
      const linkElement = screen.getByText("Available Venue Details");
      expect(linkElement).toBeInTheDocument();
     });

     //Search Bar
     test("render 'Search Bar' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByPlaceholderText("Search Name here!...");
        expect(linkElement).toBeInTheDocument();
       });

       //Venue Id
       test("render 'Venue Id' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("id");
        expect(linkElement).toBeInTheDocument();
       });

       //Venue Name
       test("render 'Venue Name' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("name");
        expect(linkElement).toBeInTheDocument();
       });

       //venue Location
       test("render 'Venue Location' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("location");
        expect(linkElement).toBeInTheDocument();
       });

       //Seat Capacity
       test("render 'Venue Seat Capacity' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("seat");
        expect(linkElement).toBeInTheDocument();
       });

       //Venue Type
       test("render 'Venue Type' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("type");
        expect(linkElement).toBeInTheDocument();
       });

       //Action
       test("render 'Venue Name' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("action");
        expect(linkElement).toBeInTheDocument();
       });

       //Action
       test("render 'Venue Name' ", ()=> {
        render(<VenueDetails/>);
        const linkElement = screen.getByRole("action");
        expect(linkElement).toBeInTheDocument();
       });

       //Booking Button
       it("render 'Book Now Button' ", ()=>{
        const {getByRole}=render(<VenueDetails/>);
        const linkElement =getByRole("book-btn");
        expect(linkElement).toBeInTheDocument();
       });
    });