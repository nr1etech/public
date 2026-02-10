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
      <div q:slot="left">
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

  // return (
  //   <div class="bg-base-100 space-y-8 p-8">
  //     <h1 class="mb-6 text-3xl font-bold">Menu Component Demo</h1>
  //
  //     {/* Basic Menu */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Basic Menu</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/">Home</MenuItem>
  //           <MenuItem href="/about">About</MenuItem>
  //           <MenuItem href="/contact">Contact</MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Menu with Selected State */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Menu with Selected Item</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/">Home</MenuItem>
  //           <MenuItem href="/about" selected={true}>
  //             About (Selected)
  //           </MenuItem>
  //           <MenuItem href="/contact">Contact</MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Menu with Loading State */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Menu with Loading State</h2>
  //       <p class="text-sm text-gray-600">
  //         Loading state: {loadingSignal.value ? 'Loading...' : 'Ready'}
  //       </p>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/" loading={loadingSignal}>
  //             Home
  //           </MenuItem>
  //           <MenuItem href="/about" loading={loadingSignal}>
  //             About
  //           </MenuItem>
  //           <MenuItem href="/contact" loading={loadingSignal}>
  //             Contact
  //           </MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Menu with Groups (Closed) */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Menu with Collapsible Groups</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/">Home</MenuItem>
  //           <MenuGroup>
  //             <MenuGroupSummary>Products</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/products/electronics">Electronics</MenuItem>
  //               <MenuItem href="/products/clothing">Clothing</MenuItem>
  //               <MenuItem href="/products/books">Books</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuGroup>
  //             <MenuGroupSummary>Services</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/services/consulting">Consulting</MenuItem>
  //               <MenuItem href="/services/support">Support</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuItem href="/contact">Contact</MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Menu with Open Group */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Menu with Open Group</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/">Home</MenuItem>
  //           <MenuGroup open={true}>
  //             <MenuGroupSummary>Resources (Open by Default)</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/docs">Documentation</MenuItem>
  //               <MenuItem href="/tutorials">Tutorials</MenuItem>
  //               <MenuItem href="/examples">Examples</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuItem href="/about">About</MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Complex Nested Menu */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Complex Nested Menu</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/" selected={true}>
  //             Dashboard
  //           </MenuItem>
  //           <MenuGroup open={true}>
  //             <MenuGroupSummary>📁 Projects</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/projects/active">Active Projects</MenuItem>
  //               <MenuItem href="/projects/archived">Archived</MenuItem>
  //               <MenuItem href="/projects/templates">Templates</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuGroup>
  //             <MenuGroupSummary>👥 Team</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/team/members">Members</MenuItem>
  //               <MenuItem href="/team/roles">Roles</MenuItem>
  //               <MenuItem href="/team/permissions">Permissions</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuGroup>
  //             <MenuGroupSummary>⚙️ Settings</MenuGroupSummary>
  //             <Submenu>
  //               <MenuItem href="/settings/profile">Profile</MenuItem>
  //               <MenuItem href="/settings/preferences">Preferences</MenuItem>
  //               <MenuItem href="/settings/security">Security</MenuItem>
  //             </Submenu>
  //           </MenuGroup>
  //           <MenuItem href="/help">❓ Help</MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //
  //     {/* Menu without Prefetch */}
  //     <section class="space-y-4">
  //       <h2 class="text-2xl font-semibold">Menu without Prefetch</h2>
  //       <div class="bg-base-200 w-64 rounded-lg p-4">
  //         <Menu>
  //           <MenuItem href="/" prefetch={false}>
  //             Home (No Prefetch)
  //           </MenuItem>
  //           <MenuItem href="/about" prefetch={false}>
  //             About (No Prefetch)
  //           </MenuItem>
  //           <MenuItem href="/contact" prefetch={false}>
  //             Contact (No Prefetch)
  //           </MenuItem>
  //         </Menu>
  //       </div>
  //     </section>
  //   </div>
  // );
});
