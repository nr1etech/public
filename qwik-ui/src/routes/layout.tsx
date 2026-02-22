import {component$, Slot} from '@builder.io/qwik';
import {UniversalLayout} from '../components/universal-layout';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuGroupSummary,
  MenuLink,
  Submenu,
} from '../components/menu';
import {
  DropUp,
  DropUpButton,
  DropUpButtonSelector,
  DropUpLink,
  DropUpSubmenu,
} from '../components/drop-up';

export default component$(() => {
  return (
    <UniversalLayout>
      <div q:slot="outerLeft" class="h-full w-56">
        <Menu>
          <MenuLink href="/">Components</MenuLink>
          <MenuLink href="/universal-layout-demo">
            Universal Layout Demo
          </MenuLink>
          <MenuLink href="#nowhere">Example Menu Item 1</MenuLink>
          <MenuLink href="#nowhere">Example Menu Item 2</MenuLink>
          <MenuButton onClick$={() => alert('Clicked!')}>
            Example Menu Button 3
          </MenuButton>
          <MenuGroup>
            <MenuGroupSummary>Parent 1</MenuGroupSummary>
            <Submenu>
              <MenuLink href="#nowhere">Menu Item 3</MenuLink>
              <MenuLink href="#nowhere">Menu Item 4</MenuLink>
            </Submenu>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup open>
            <MenuGroupSummary>Parent 2 Opened</MenuGroupSummary>
            <Submenu>
              <MenuLink href="#nowhere">Menu Item 5</MenuLink>
              <MenuLink href="#nowhere" selected>
                Menu Item 6 Selected
              </MenuLink>
            </Submenu>
          </MenuGroup>
        </Menu>
        <div class="left-0 w-56">
          <DropUp class="w-full text-center">
            <DropUpButtonSelector class="btn-ghost flex w-full justify-start">
              <span class="text-left">Drop Up</span>
            </DropUpButtonSelector>
            <DropUpSubmenu>
              <DropUpLink href="#nowhere">Item link 1</DropUpLink>
              <DropUpLink href="#nowhere">Item link 2</DropUpLink>
              <DropUpButton onClick$={() => alert('Clicked!')}>
                Item button 3
              </DropUpButton>
            </DropUpSubmenu>
          </DropUp>
        </div>
      </div>
      <Slot />
    </UniversalLayout>
  );
});
