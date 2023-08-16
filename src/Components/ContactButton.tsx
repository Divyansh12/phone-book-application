import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';

// import './contactbutton.scss';

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
        className='custom-btn'
      >
        {btnIcon === 'pencil' ? (
          <PencilIcon className='custom-btn-icon align-middle' />
        ) : btnIcon === 'plus' ? (
          <PlusIcon className='custom-btn-icon align-middle' />
        ) : null}
        {btnText}
      </Button>
    </>
  );
};

export default ContactButton;
