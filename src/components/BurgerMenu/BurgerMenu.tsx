import * as React from 'react';
import { MenuBar, MenuWrapper } from './BurgerMenu.styles';

type BurgerMenuProps = {
  open: boolean;
  onPressed: (open: boolean) => void;
};

const BurgerMenu = (props: BurgerMenuProps) => {
  const { open, onPressed } = props;

  const onClicked = () => {
    onPressed && onPressed(!open);
  };

  return (
    <MenuWrapper className={open && 'active'} onClick={onClicked}>
      <MenuBar className={open && 'active'} index={0} />
      <MenuBar className={open && 'active'} index={1} />
      <MenuBar className={open && 'active'} index={2} />
    </MenuWrapper>
  );
};

export default BurgerMenu;
