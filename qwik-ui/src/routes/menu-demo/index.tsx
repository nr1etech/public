import {component$} from '@builder.io/qwik';
import {
  Menu,
  MenuLink,
  MenuGroup,
  MenuGroupSummary,
  Submenu,
  MenuDivider,
} from '../../components/menu';
import {UniversalLayout} from '../../components/universal-layout';

export default component$(() => {
  return (
    <UniversalLayout>
      <div q:slot="outerLeft" class="h-full">
        <Menu>
          <MenuLink href="#nowhere">Menu Item 1</MenuLink>
          <MenuLink href="#nowhere">Menu Item 2</MenuLink>
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
      </div>
    </UniversalLayout>
  );
});
