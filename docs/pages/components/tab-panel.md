---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

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
import SlTab from '@onsonr/nebula/dist/react/tab';
import SlTabGroup from '@onsonr/nebula/dist/react/tab-group';
import SlTabPanel from '@onsonr/nebula/dist/react/tab-panel';

const App = () => (
  <SlTabGroup>
    <SlTab slot="nav" panel="general">
      General
    </SlTab>
    <SlTab slot="nav" panel="custom">
      Custom
    </SlTab>
    <SlTab slot="nav" panel="advanced">
      Advanced
    </SlTab>
    <SlTab slot="nav" panel="disabled" disabled>
      Disabled
    </SlTab>

    <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
    <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
    <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
    <SlTabPanel name="disabled">This is a disabled tab panel.</SlTabPanel>
  </SlTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
