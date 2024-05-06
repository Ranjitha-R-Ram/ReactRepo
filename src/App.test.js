import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import VenueViewAll from "./components/Event/VenueViewAll";
import AddVenue from "./components/Event/AddVenue";
jest.mock("react-router-dom");
describe('Search venue and Book Venue Page',()=>{
  test("render 'View All Venue Details' ", ()=> {
    render(<VenueViewAll/>);
    const linkElement = screen.getByText("View All Venue Details");
    expect(linkElement).toBeInTheDocument();
   });
   //Search Bar
   test("render 'Search Bar' ", ()=> {
    render(<VenueViewAll/>);
    const linkElement = screen.getByPlaceholderText("Search Name here!...");
    expect(linkElement).toBeInTheDocument();
   });
   //Add Venue Page
test("render 'Add Venue Title' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByText("Insert Venue Details");
  expect(linkElement).toBeInTheDocument();
});
//Check the Venue Name
test("render 'Venue Name' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByRole("venuename");
  expect(linkElement).toBeInTheDocument();
});

//Check venue Location
test("render 'Venue Location' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByRole("venue-location");
  expect(linkElement).toBeInTheDocument();
});
//Check Venue seat Details
test("render 'Venue Seat Details' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByRole("venue-seat");
  expect(linkElement).toBeInTheDocument();
});

//Check Venue Type
test("render 'Venue Type' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByRole("venue-type");
  expect(linkElement).toBeInTheDocument();
});

//Check save button
test("render 'Save Button' ",()=>{
  render(<AddVenue/>);
  const linkElement = screen.getByTestId("save-btn");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Save");
});

});
