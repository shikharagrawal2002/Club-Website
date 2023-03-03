import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          {/* <SidebarLink to="/services" onClick={toggle}>
            Services
          </SidebarLink> */}
          <SidebarLink to="/domains" onClick={toggle}>
            Domains
          </SidebarLink>
          <SidebarLink to="/events" onClick={toggle}>
            Events
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle}>
            Projects
          </SidebarLink>
          {/* <SidebarLink to="/event" onClick={toggle}>
            Our Events
          </SidebarLink> */}
          <SidebarLink to="/team" onClick={toggle}>
            Our Team
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
