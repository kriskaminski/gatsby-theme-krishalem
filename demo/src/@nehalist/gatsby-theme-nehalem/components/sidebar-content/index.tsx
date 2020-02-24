import React, {FunctionComponent} from "react";
import styled from "styled-components";
import Bio from "@nehalist/gatsby-theme-nehalem/src/components/bio";
import Theme from "@nehalist/gatsby-theme-nehalem/src/styles/theme";

const StickySidebarContent = styled.div`
  position: sticky;
  top: 30px;
`;

const SidebarContent: FunctionComponent = () => {
  return (
    <StickySidebarContent>
      <Bio textAlign={`justify`} avatarStyle={{float: `left`, marginRight: `10px`}}/>
    </StickySidebarContent>
  );
};

export default SidebarContent;
