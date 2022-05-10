import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./../../test-utils"
import SignUp from "./"

test("renders learn react link", () => {
  render(<SignUp />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
