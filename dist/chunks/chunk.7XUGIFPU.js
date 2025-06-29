import {
  library_default_default
} from "./chunk.QJNQMLBJ.js";
import {
  library_sonr_default
} from "./chunk.HSYOPFFS.js";
import {
  library_system_default
} from "./chunk.4UBLNU4Z.js";
import {
  library_crypto_default
} from "./chunk.HLBRWCYX.js";

// src/components/icon/library.ts
var registry = [library_default_default, library_system_default, library_crypto_default, library_sonr_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator,
    spriteSheet: options.spriteSheet
  });
  watchedIcons.forEach((icon) => {
    if (icon.library === name) {
      icon.setIcon();
    }
  });
}
function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}

export {
  watchIcon,
  unwatchIcon,
  getIconLibrary,
  registerIconLibrary,
  unregisterIconLibrary
};
