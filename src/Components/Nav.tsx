import React from "react";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
// import { useTheme } from "@emotion/react";
import { useFavourites } from "../Context/favouriteContacts";
import { favoriteContactsContextType } from "../models/models";

interface NavProps {
  view: string;
  setView: (view: string) => void;
}

const Nav: React.FC<NavProps> = ({ view, setView }) => {
  // const theme = useTheme();
  const { favouriteContacts } = useFavourites() as favoriteContactsContextType;
  const size = favouriteContacts.length;

  const textStyles = css`
    cursor: pointer;
    color: ${view === "players" ? 'red' : "inherit"};
  `;

  const hStackStyles = css`
    justify-content: center;
    margin: 2rem auto;
    p {
      cursor: pointer;
    }
  `;

  const tagStyles = css`
    background-color: red;
    color: white;
  `;

  return (
    <div css={hStackStyles}>
      <p
        css={textStyles}
        onClick={() => setView("contacts")}
      >
        Contacts
      </p>
      <div onClick={() => setView("favourites")} css={textStyles}>
        <p css={textStyles} style={{ color: view === "team" ? 'red' : "inherit" }}>
          Favourite Contacts
        </p>
        {/* {size > 0 && (
          <div css={tagStyles} style={{ marginLeft: "1rem" }}>
            {size}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Nav;
