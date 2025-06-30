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

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
