import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const color = 'black';
const customBtn = css`
  display: flex !important;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff8767, #fe67a3);
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  color: white !important;
  border: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }

  &:hover {
    color: ${color} !important;
  }
`;

const customBtnIcon = css`
  height: 20px !important;
  width: 20px !important;
  margin-right: 5px;
`;




interface ContactButtonProps {
  btnIcon: 'pencil' | 'plus';
  btnText: string;
  setIsEdit: (value: boolean) => void;
  btnType: 'add' | 'edit';
  setModalShow: (value: boolean) => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  btnIcon,
  btnText,
  setIsEdit,
  btnType,
  setModalShow,
}) => {
  return (
    <>
      <Button
        title={btnType === 'add' ? 'Add Contact' : 'Edit Contact'}
        variant='default'
        onClick={() => {
          setModalShow(true);
          btnType === 'add' ? setIsEdit(false) : setIsEdit(true);
        }}
        css={customBtn}
      >
        {btnIcon === 'pencil' ? (
          <PencilIcon css={customBtnIcon} />
        ) : btnIcon === 'plus' ? (
          <PlusIcon css={customBtnIcon}  />
        ) : null}
        {btnText}
      </Button>
    </>
  );
};

export default ContactButton;
