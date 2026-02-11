import {component$, Slot} from '@builder.io/qwik';
import {UniversalLayout} from '../components/universal-layout';
import {
  Menu,
  MenuDivider,
  MenuGroup,
  MenuGroupSummary,
  MenuItem,
  Submenu,
} from '../components/menu';
import {
  DropUp,
  DropUpButtonSelector,
  DropUpItem,
  DropUpSubmenu,
} from '../components/drop-up';

export default component$(() => {
  return (
    <UniversalLayout>
      <div q:slot="outerLeft" class="h-full w-56">
        <Menu>
          <MenuItem href="/">Components</MenuItem>
          <MenuItem href="/universal-layout-demo">
            Universal Layout Demo
          </MenuItem>
          <MenuItem href="#nowhere">Example Menu Item 1</MenuItem>
          <MenuItem href="#nowhere">Example Menu Item 2</MenuItem>
          <MenuItem href="#nowhere">Example Menu Item 3</MenuItem>
          <MenuGroup>
            <MenuGroupSummary>Parent 1</MenuGroupSummary>
            <Submenu>
              <MenuItem href="#nowhere">Menu Item 3</MenuItem>
              <MenuItem href="#nowhere">Menu Item 4</MenuItem>
            </Submenu>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup open>
            <MenuGroupSummary>Parent 2 Opened</MenuGroupSummary>
            <Submenu>
              <MenuItem href="#nowhere">Menu Item 5</MenuItem>
              <MenuItem href="#nowhere" selected>
                Menu Item 6 Selected
              </MenuItem>
            </Submenu>
          </MenuGroup>
        </Menu>
        <div class="fixed bottom-0 left-0 w-56">
          <DropUp class="w-full text-center">
            <DropUpButtonSelector class="btn-ghost flex w-full justify-start">
              <span class="text-left">Drop Up</span>
            </DropUpButtonSelector>
            <DropUpSubmenu>
              <DropUpItem>Item 1</DropUpItem>
              <DropUpItem>Item 2</DropUpItem>
            </DropUpSubmenu>
          </DropUp>
        </div>
      </div>
      <Slot />
    </UniversalLayout>
  );
});
