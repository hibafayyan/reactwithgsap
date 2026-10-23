
import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
  DropdownItem,
} from "flowbite-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navRef = useRef(null);


 useGSAP(() => {
  gsap.from([".nav-link", ".dropdown-link"], {
    x: 25,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });
}, []);
  return (
    <FlowbiteNavbar ref={navRef}
      fluid
      className="fixed top-0 z-50 w-full border-b border-blue-700 bg-blue-800 px-4 py-3"
    >
      <NavbarBrand href="#home">
        <span className="text-4xl font-semibold text-white">
          SoftLand
        </span>
      </NavbarBrand>

      <div className="flex md:order-2">
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink
          href="#home"
          active
          className= "!text-white hover:!text-gray-300 nav-link"
        >
          Home
        </NavbarLink>

        <NavbarLink
          href="#about"
          className="!text-white hover:!text-gray-300 nav-link"
        >
          About
        </NavbarLink>

        <NavbarLink
          href="#features"
          className="!text-white hover:!text-gray-300 nav-link"
        >
          Features
        </NavbarLink>

        <NavbarLink
          href="#pricing"
          className="!text-white hover:!text-gray-300 nav-link"
        >
          Pricing
        </NavbarLink>

        <NavbarLink
          href="#blog"
          className="!text-white hover:!text-gray-300 nav-link"
        >
          Blog
        </NavbarLink>

      <Dropdown
  label={
    <span className="text-white hover:text-gray-300">
      Drop Down
    </span>
  }
  inline
>
          <DropdownItem href="#dropdown1">
            Drop Down 1
          </DropdownItem>
          <DropdownItem href="#dropdown2">
            Drop Down 2
          </DropdownItem>
          <DropdownItem href="#dropdown3">
            Drop Down 3
          </DropdownItem>
        </Dropdown>

        <NavbarLink
          href="#contact"
          className="!text-white hover:!text-gray-300 nav-link"
        >
          Contact Us
        </NavbarLink>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}

export default Navbar;
