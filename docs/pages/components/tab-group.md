---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html:preview
<nu-tab-group>
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="custom">Custom</nu-tab>
  <nu-tab slot="nav" panel="advanced">Advanced</nu-tab>
  <nu-tab slot="nav" panel="disabled" disabled>Disabled</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="custom">This is the custom tab panel.</nu-tab-panel>
  <nu-tab-panel name="advanced">This is the advanced tab panel.</nu-tab-panel>
  <nu-tab-panel name="disabled">This is a disabled tab panel.</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup>
    <NuTab slot="nav" panel="general">
      General
    </NuTab>
    <NuTab slot="nav" panel="custom">
      Custom
    </NuTab>
    <NuTab slot="nav" panel="advanced">
      Advanced
    </NuTab>
    <NuTab slot="nav" panel="disabled" disabled>
      Disabled
    </NuTab>

    <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
    <NuTabPanel name="custom">This is the custom tab panel.</NuTabPanel>
    <NuTabPanel name="advanced">This is the advanced tab panel.</NuTabPanel>
    <NuTabPanel name="disabled">This is a disabled tab panel.</NuTabPanel>
  </NuTabGroup>
);
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<nu-tab-group placement="bottom">
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="custom">Custom</nu-tab>
  <nu-tab slot="nav" panel="advanced">Advanced</nu-tab>
  <nu-tab slot="nav" panel="disabled" disabled>Disabled</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="custom">This is the custom tab panel.</nu-tab-panel>
  <nu-tab-panel name="advanced">This is the advanced tab panel.</nu-tab-panel>
  <nu-tab-panel name="disabled">This is a disabled tab panel.</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup placement="bottom">
    <NuTab slot="nav" panel="general">
      General
    </NuTab>
    <NuTab slot="nav" panel="custom">
      Custom
    </NuTab>
    <NuTab slot="nav" panel="advanced">
      Advanced
    </NuTab>
    <NuTab slot="nav" panel="disabled" disabled>
      Disabled
    </NuTab>

    <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
    <NuTabPanel name="custom">This is the custom tab panel.</NuTabPanel>
    <NuTabPanel name="advanced">This is the advanced tab panel.</NuTabPanel>
    <NuTabPanel name="disabled">This is a disabled tab panel.</NuTabPanel>
  </NuTabGroup>
);
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<nu-tab-group placement="start">
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="custom">Custom</nu-tab>
  <nu-tab slot="nav" panel="advanced">Advanced</nu-tab>
  <nu-tab slot="nav" panel="disabled" disabled>Disabled</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="custom">This is the custom tab panel.</nu-tab-panel>
  <nu-tab-panel name="advanced">This is the advanced tab panel.</nu-tab-panel>
  <nu-tab-panel name="disabled">This is a disabled tab panel.</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup placement="start">
    <NuTab slot="nav" panel="general">
      General
    </NuTab>
    <NuTab slot="nav" panel="custom">
      Custom
    </NuTab>
    <NuTab slot="nav" panel="advanced">
      Advanced
    </NuTab>
    <NuTab slot="nav" panel="disabled" disabled>
      Disabled
    </NuTab>

    <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
    <NuTabPanel name="custom">This is the custom tab panel.</NuTabPanel>
    <NuTabPanel name="advanced">This is the advanced tab panel.</NuTabPanel>
    <NuTabPanel name="disabled">This is a disabled tab panel.</NuTabPanel>
  </NuTabGroup>
);
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<nu-tab-group placement="end">
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="custom">Custom</nu-tab>
  <nu-tab slot="nav" panel="advanced">Advanced</nu-tab>
  <nu-tab slot="nav" panel="disabled" disabled>Disabled</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="custom">This is the custom tab panel.</nu-tab-panel>
  <nu-tab-panel name="advanced">This is the advanced tab panel.</nu-tab-panel>
  <nu-tab-panel name="disabled">This is a disabled tab panel.</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup placement="end">
    <NuTab slot="nav" panel="general">
      General
    </NuTab>
    <NuTab slot="nav" panel="custom">
      Custom
    </NuTab>
    <NuTab slot="nav" panel="advanced">
      Advanced
    </NuTab>
    <NuTab slot="nav" panel="disabled" disabled>
      Disabled
    </NuTab>

    <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
    <NuTabPanel name="custom">This is the custom tab panel.</NuTabPanel>
    <NuTabPanel name="advanced">This is the advanced tab panel.</NuTabPanel>
    <NuTabPanel name="disabled">This is a disabled tab panel.</NuTabPanel>
  </NuTabGroup>
);
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<nu-tab-group class="tabs-closable">
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="closable-1" closable>Closable 1</nu-tab>
  <nu-tab slot="nav" panel="closable-2" closable>Closable 2</nu-tab>
  <nu-tab slot="nav" panel="closable-3" closable>Closable 3</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="closable-1">This is the first closable tab panel.</nu-tab-panel>
  <nu-tab-panel name="closable-2">This is the second closable tab panel.</nu-tab-panel>
  <nu-tab-panel name="closable-3">This is the third closable tab panel.</nu-tab-panel>
</nu-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('sl-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`sl-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('sl-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <NuTabGroup className="tabs-closable" onSlClose={handleClose}>
      <NuTab slot="nav" panel="general">
        General
      </NuTab>
      <NuTab slot="nav" panel="closable-1" closable onSlClose={handleClose}>
        Closable 1
      </NuTab>
      <NuTab slot="nav" panel="closable-2" closable onSlClose={handleClose}>
        Closable 2
      </NuTab>
      <NuTab slot="nav" panel="closable-3" closable onSlClose={handleClose}>
        Closable 3
      </NuTab>

      <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
      <NuTabPanel name="closable-1">This is the first closable tab panel.</NuTabPanel>
      <NuTabPanel name="closable-2">This is the second closable tab panel.</NuTabPanel>
      <NuTabPanel name="closable-3">This is the third closable tab panel.</NuTabPanel>
    </NuTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<nu-tab-group>
  <nu-tab slot="nav" panel="tab-1">Tab 1</nu-tab>
  <nu-tab slot="nav" panel="tab-2">Tab 2</nu-tab>
  <nu-tab slot="nav" panel="tab-3">Tab 3</nu-tab>
  <nu-tab slot="nav" panel="tab-4">Tab 4</nu-tab>
  <nu-tab slot="nav" panel="tab-5">Tab 5</nu-tab>
  <nu-tab slot="nav" panel="tab-6">Tab 6</nu-tab>
  <nu-tab slot="nav" panel="tab-7">Tab 7</nu-tab>
  <nu-tab slot="nav" panel="tab-8">Tab 8</nu-tab>
  <nu-tab slot="nav" panel="tab-9">Tab 9</nu-tab>
  <nu-tab slot="nav" panel="tab-10">Tab 10</nu-tab>
  <nu-tab slot="nav" panel="tab-11">Tab 11</nu-tab>
  <nu-tab slot="nav" panel="tab-12">Tab 12</nu-tab>
  <nu-tab slot="nav" panel="tab-13">Tab 13</nu-tab>
  <nu-tab slot="nav" panel="tab-14">Tab 14</nu-tab>
  <nu-tab slot="nav" panel="tab-15">Tab 15</nu-tab>
  <nu-tab slot="nav" panel="tab-16">Tab 16</nu-tab>
  <nu-tab slot="nav" panel="tab-17">Tab 17</nu-tab>
  <nu-tab slot="nav" panel="tab-18">Tab 18</nu-tab>
  <nu-tab slot="nav" panel="tab-19">Tab 19</nu-tab>
  <nu-tab slot="nav" panel="tab-20">Tab 20</nu-tab>

  <nu-tab-panel name="tab-1">Tab panel 1</nu-tab-panel>
  <nu-tab-panel name="tab-2">Tab panel 2</nu-tab-panel>
  <nu-tab-panel name="tab-3">Tab panel 3</nu-tab-panel>
  <nu-tab-panel name="tab-4">Tab panel 4</nu-tab-panel>
  <nu-tab-panel name="tab-5">Tab panel 5</nu-tab-panel>
  <nu-tab-panel name="tab-6">Tab panel 6</nu-tab-panel>
  <nu-tab-panel name="tab-7">Tab panel 7</nu-tab-panel>
  <nu-tab-panel name="tab-8">Tab panel 8</nu-tab-panel>
  <nu-tab-panel name="tab-9">Tab panel 9</nu-tab-panel>
  <nu-tab-panel name="tab-10">Tab panel 10</nu-tab-panel>
  <nu-tab-panel name="tab-11">Tab panel 11</nu-tab-panel>
  <nu-tab-panel name="tab-12">Tab panel 12</nu-tab-panel>
  <nu-tab-panel name="tab-13">Tab panel 13</nu-tab-panel>
  <nu-tab-panel name="tab-14">Tab panel 14</nu-tab-panel>
  <nu-tab-panel name="tab-15">Tab panel 15</nu-tab-panel>
  <nu-tab-panel name="tab-16">Tab panel 16</nu-tab-panel>
  <nu-tab-panel name="tab-17">Tab panel 17</nu-tab-panel>
  <nu-tab-panel name="tab-18">Tab panel 18</nu-tab-panel>
  <nu-tab-panel name="tab-19">Tab panel 19</nu-tab-panel>
  <nu-tab-panel name="tab-20">Tab panel 20</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup>
    <NuTab slot="nav" panel="tab-1">
      Tab 1
    </NuTab>
    <NuTab slot="nav" panel="tab-2">
      Tab 2
    </NuTab>
    <NuTab slot="nav" panel="tab-3">
      Tab 3
    </NuTab>
    <NuTab slot="nav" panel="tab-4">
      Tab 4
    </NuTab>
    <NuTab slot="nav" panel="tab-5">
      Tab 5
    </NuTab>
    <NuTab slot="nav" panel="tab-6">
      Tab 6
    </NuTab>
    <NuTab slot="nav" panel="tab-7">
      Tab 7
    </NuTab>
    <NuTab slot="nav" panel="tab-8">
      Tab 8
    </NuTab>
    <NuTab slot="nav" panel="tab-9">
      Tab 9
    </NuTab>
    <NuTab slot="nav" panel="tab-10">
      Tab 10
    </NuTab>
    <NuTab slot="nav" panel="tab-11">
      Tab 11
    </NuTab>
    <NuTab slot="nav" panel="tab-12">
      Tab 12
    </NuTab>
    <NuTab slot="nav" panel="tab-13">
      Tab 13
    </NuTab>
    <NuTab slot="nav" panel="tab-14">
      Tab 14
    </NuTab>
    <NuTab slot="nav" panel="tab-15">
      Tab 15
    </NuTab>
    <NuTab slot="nav" panel="tab-16">
      Tab 16
    </NuTab>
    <NuTab slot="nav" panel="tab-17">
      Tab 17
    </NuTab>
    <NuTab slot="nav" panel="tab-18">
      Tab 18
    </NuTab>
    <NuTab slot="nav" panel="tab-19">
      Tab 19
    </NuTab>
    <NuTab slot="nav" panel="tab-20">
      Tab 20
    </NuTab>

    <NuTabPanel name="tab-1">Tab panel 1</NuTabPanel>
    <NuTabPanel name="tab-2">Tab panel 2</NuTabPanel>
    <NuTabPanel name="tab-3">Tab panel 3</NuTabPanel>
    <NuTabPanel name="tab-4">Tab panel 4</NuTabPanel>
    <NuTabPanel name="tab-5">Tab panel 5</NuTabPanel>
    <NuTabPanel name="tab-6">Tab panel 6</NuTabPanel>
    <NuTabPanel name="tab-7">Tab panel 7</NuTabPanel>
    <NuTabPanel name="tab-8">Tab panel 8</NuTabPanel>
    <NuTabPanel name="tab-9">Tab panel 9</NuTabPanel>
    <NuTabPanel name="tab-10">Tab panel 10</NuTabPanel>
    <NuTabPanel name="tab-11">Tab panel 11</NuTabPanel>
    <NuTabPanel name="tab-12">Tab panel 12</NuTabPanel>
    <NuTabPanel name="tab-13">Tab panel 13</NuTabPanel>
    <NuTabPanel name="tab-14">Tab panel 14</NuTabPanel>
    <NuTabPanel name="tab-15">Tab panel 15</NuTabPanel>
    <NuTabPanel name="tab-16">Tab panel 16</NuTabPanel>
    <NuTabPanel name="tab-17">Tab panel 17</NuTabPanel>
    <NuTabPanel name="tab-18">Tab panel 18</NuTabPanel>
    <NuTabPanel name="tab-19">Tab panel 19</NuTabPanel>
    <NuTabPanel name="tab-20">Tab panel 20</NuTabPanel>
  </NuTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<nu-tab-group activation="manual">
  <nu-tab slot="nav" panel="general">General</nu-tab>
  <nu-tab slot="nav" panel="custom">Custom</nu-tab>
  <nu-tab slot="nav" panel="advanced">Advanced</nu-tab>
  <nu-tab slot="nav" panel="disabled" disabled>Disabled</nu-tab>

  <nu-tab-panel name="general">This is the general tab panel.</nu-tab-panel>
  <nu-tab-panel name="custom">This is the custom tab panel.</nu-tab-panel>
  <nu-tab-panel name="advanced">This is the advanced tab panel.</nu-tab-panel>
  <nu-tab-panel name="disabled">This is a disabled tab panel.</nu-tab-panel>
</nu-tab-group>
```

```jsx:react
import SlTab from '@sonr.io/nebula/dist/react/tab';
import SlTabGroup from '@sonr.io/nebula/dist/react/tab-group';
import SlTabPanel from '@sonr.io/nebula/dist/react/tab-panel';

const App = () => (
  <NuTabGroup activation="manual">
    <NuTab slot="nav" panel="general">
      General
    </NuTab>
    <NuTab slot="nav" panel="custom">
      Custom
    </NuTab>
    <NuTab slot="nav" panel="advanced">
      Advanced
    </NuTab>
    <NuTab slot="nav" panel="disabled" disabled>
      Disabled
    </NuTab>

    <NuTabPanel name="general">This is the general tab panel.</NuTabPanel>
    <NuTabPanel name="custom">This is the custom tab panel.</NuTabPanel>
    <NuTabPanel name="advanced">This is the advanced tab panel.</NuTabPanel>
    <NuTabPanel name="disabled">This is a disabled tab panel.</NuTabPanel>
  </NuTabGroup>
);
```
