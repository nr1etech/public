import {component$} from '@builder.io/qwik';
import {
  Menu,
  MenuItem,
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
          <MenuItem href="#nowhere">Menu Item 1</MenuItem>
          <MenuItem href="#nowhere">Menu Item 2</MenuItem>
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
      </div>
    </UniversalLayout>
  );
});
