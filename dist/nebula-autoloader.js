import {
  getBasePath
} from "./chunks/chunk.LC4DGO3P.js";
import "./chunks/chunk.TGTXVMVL.js";

// src/nebula-autoloader.ts
var observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node);
      }
    }
  }
});
async function discover(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsNebulaElement = rootTagName == null ? void 0 : rootTagName.startsWith("nu-");
  const tags = [...root.querySelectorAll(":not(:defined)")].map((el) => el.tagName.toLowerCase()).filter((tag) => tag.startsWith("nu-"));
  if (rootIsNebulaElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister.map((tagName) => register(tagName)));
}
function register(tagName) {
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }
  const tagWithoutPrefix = tagName.replace(/^nu-/i, "");
  const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
  });
}
discover(document.body);
observer.observe(document.documentElement, { subtree: true, childList: true });
export {
  discover
};
