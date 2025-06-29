import { css } from "lit";

export default css`
  :root,
  :host,
  .nu-theme-light {
    color-scheme: light;

    --nu-color-gray-50: hsl(0 0% 97.5%);
    --nu-color-gray-100: hsl(240 4.8% 95.9%);
    --nu-color-gray-200: hsl(240 5.9% 90%);
    --nu-color-gray-300: hsl(240 4.9% 83.9%);
    --nu-color-gray-400: hsl(240 5% 64.9%);
    --nu-color-gray-500: hsl(240 3.8% 46.1%);
    --nu-color-gray-600: hsl(240 5.2% 33.9%);
    --nu-color-gray-700: hsl(240 5.3% 26.1%);
    --nu-color-gray-800: hsl(240 3.7% 15.9%);
    --nu-color-gray-900: hsl(240 5.9% 10%);
    --nu-color-gray-950: hsl(240 7.3% 8%);

    --nu-color-red-50: hsl(0 85.7% 97.3%);
    --nu-color-red-100: hsl(0 93.3% 94.1%);
    --nu-color-red-200: hsl(0 96.3% 89.4%);
    --nu-color-red-300: hsl(0 93.5% 81.8%);
    --nu-color-red-400: hsl(0 90.6% 70.8%);
    --nu-color-red-500: hsl(0 84.2% 60.2%);
    --nu-color-red-600: hsl(0 72.2% 50.6%);
    --nu-color-red-700: hsl(0 73.7% 41.8%);
    --nu-color-red-800: hsl(0 70% 35.3%);
    --nu-color-red-900: hsl(0 62.8% 30.6%);
    --nu-color-red-950: hsl(0 60% 19.6%);

    --nu-color-orange-50: hsl(33.3 100% 96.5%);
    --nu-color-orange-100: hsl(34.3 100% 91.8%);
    --nu-color-orange-200: hsl(32.1 97.7% 83.1%);
    --nu-color-orange-300: hsl(30.7 97.2% 72.4%);
    --nu-color-orange-400: hsl(27 96% 61%);
    --nu-color-orange-500: hsl(24.6 95% 53.1%);
    --nu-color-orange-600: hsl(20.5 90.2% 48.2%);
    --nu-color-orange-700: hsl(17.5 88.3% 40.4%);
    --nu-color-orange-800: hsl(15 79.1% 33.7%);
    --nu-color-orange-900: hsl(15.3 74.6% 27.8%);
    --nu-color-orange-950: hsl(15.2 69.1% 19%);

    --nu-color-amber-50: hsl(48 100% 96.1%);
    --nu-color-amber-100: hsl(48 96.5% 88.8%);
    --nu-color-amber-200: hsl(48 96.6% 76.7%);
    --nu-color-amber-300: hsl(45.9 96.7% 64.5%);
    --nu-color-amber-400: hsl(43.3 96.4% 56.3%);
    --nu-color-amber-500: hsl(37.7 92.1% 50.2%);
    --nu-color-amber-600: hsl(32.1 94.6% 43.7%);
    --nu-color-amber-700: hsl(26 90.5% 37.1%);
    --nu-color-amber-800: hsl(22.7 82.5% 31.4%);
    --nu-color-amber-900: hsl(21.7 77.8% 26.5%);
    --nu-color-amber-950: hsl(22.9 74.1% 16.7%);

    --nu-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --nu-color-yellow-100: hsl(54.9 96.7% 88%);
    --nu-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --nu-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --nu-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --nu-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --nu-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --nu-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --nu-color-yellow-800: hsl(31.8 81% 28.8%);
    --nu-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --nu-color-yellow-950: hsl(33.1 69% 13.9%);

    --nu-color-lime-50: hsl(78.3 92% 95.1%);
    --nu-color-lime-100: hsl(79.6 89.1% 89.2%);
    --nu-color-lime-200: hsl(80.9 88.5% 79.6%);
    --nu-color-lime-300: hsl(82 84.5% 67.1%);
    --nu-color-lime-400: hsl(82.7 78% 55.5%);
    --nu-color-lime-500: hsl(83.7 80.5% 44.3%);
    --nu-color-lime-600: hsl(84.8 85.2% 34.5%);
    --nu-color-lime-700: hsl(85.9 78.4% 27.3%);
    --nu-color-lime-800: hsl(86.3 69% 22.7%);
    --nu-color-lime-900: hsl(87.6 61.2% 20.2%);
    --nu-color-lime-950: hsl(86.5 60.6% 13.9%);

    --nu-color-green-50: hsl(138.5 76.5% 96.7%);
    --nu-color-green-100: hsl(140.6 84.2% 92.5%);
    --nu-color-green-200: hsl(141 78.9% 85.1%);
    --nu-color-green-300: hsl(141.7 76.6% 73.1%);
    --nu-color-green-400: hsl(141.9 69.2% 58%);
    --nu-color-green-500: hsl(142.1 70.6% 45.3%);
    --nu-color-green-600: hsl(142.1 76.2% 36.3%);
    --nu-color-green-700: hsl(142.4 71.8% 29.2%);
    --nu-color-green-800: hsl(142.8 64.2% 24.1%);
    --nu-color-green-900: hsl(143.8 61.2% 20.2%);
    --nu-color-green-950: hsl(144.3 60.7% 12%);

    --nu-color-emerald-50: hsl(151.8 81% 95.9%);
    --nu-color-emerald-100: hsl(149.3 80.4% 90%);
    --nu-color-emerald-200: hsl(152.4 76% 80.4%);
    --nu-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --nu-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --nu-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --nu-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --nu-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --nu-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --nu-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --nu-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --nu-color-teal-50: hsl(166.2 76.5% 96.7%);
    --nu-color-teal-100: hsl(167.2 85.5% 89.2%);
    --nu-color-teal-200: hsl(168.4 83.8% 78.2%);
    --nu-color-teal-300: hsl(170.6 76.9% 64.3%);
    --nu-color-teal-400: hsl(172.5 66% 50.4%);
    --nu-color-teal-500: hsl(173.4 80.4% 40%);
    --nu-color-teal-600: hsl(174.7 83.9% 31.6%);
    --nu-color-teal-700: hsl(175.3 77.4% 26.1%);
    --nu-color-teal-800: hsl(176.1 69.4% 21.8%);
    --nu-color-teal-900: hsl(175.9 60.8% 19%);
    --nu-color-teal-950: hsl(176.5 58.6% 11.4%);

    --nu-color-cyan-50: hsl(195, 100%, 97%);
    --nu-color-cyan-100: hsl(198, 100%, 90%);
    --nu-color-cyan-200: hsl(198, 100%, 83%);
    --nu-color-cyan-300: hsl(198, 100%, 73%);
    --nu-color-cyan-400: hsl(198, 100%, 59%);
    --nu-color-cyan-500: hsl(197, 84%, 48%);
    --nu-color-cyan-600: hsl(197, 83%, 40%);
    --nu-color-cyan-700: hsl(197, 83%, 33%);
    --nu-color-cyan-800: hsl(197, 84%, 27%);
    --nu-color-cyan-900: hsl(197, 84%, 19%);
    --nu-color-cyan-950: hsl(197, 84%, 12%);

    --nu-color-sky-50: hsl(204 100% 97.1%);
    --nu-color-sky-100: hsl(204 93.8% 93.7%);
    --nu-color-sky-200: hsl(200.6 94.4% 86.1%);
    --nu-color-sky-300: hsl(199.4 95.5% 73.9%);
    --nu-color-sky-400: hsl(198.4 93.2% 59.6%);
    --nu-color-sky-500: hsl(198.6 88.7% 48.4%);
    --nu-color-sky-600: hsl(200.4 98% 39.4%);
    --nu-color-sky-700: hsl(201.3 96.3% 32.2%);
    --nu-color-sky-800: hsl(201 90% 27.5%);
    --nu-color-sky-900: hsl(202 80.3% 23.9%);
    --nu-color-sky-950: hsl(202.3 73.8% 16.5%);

    --nu-color-blue-50: hsl(213.8 100% 96.9%);
    --nu-color-blue-100: hsl(214.3 94.6% 92.7%);
    --nu-color-blue-200: hsl(213.3 96.9% 87.3%);
    --nu-color-blue-300: hsl(211.7 96.4% 78.4%);
    --nu-color-blue-400: hsl(213.1 93.9% 67.8%);
    --nu-color-blue-500: hsl(217.2 91.2% 59.8%);
    --nu-color-blue-600: hsl(221.2 83.2% 53.3%);
    --nu-color-blue-700: hsl(224.3 76.3% 48%);
    --nu-color-blue-800: hsl(225.9 70.7% 40.2%);
    --nu-color-blue-900: hsl(224.4 64.3% 32.9%);
    --nu-color-blue-950: hsl(226.2 55.3% 18.4%);

    --nu-color-indigo-50: hsl(225.9 100% 96.7%);
    --nu-color-indigo-100: hsl(226.5 100% 93.9%);
    --nu-color-indigo-200: hsl(228 96.5% 88.8%);
    --nu-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --nu-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --nu-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --nu-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --nu-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --nu-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --nu-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --nu-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --nu-color-violet-50: hsl(250 100% 97.6%);
    --nu-color-violet-100: hsl(251.4 91.3% 95.5%);
    --nu-color-violet-200: hsl(250.5 95.2% 91.8%);
    --nu-color-violet-300: hsl(252.5 94.7% 85.1%);
    --nu-color-violet-400: hsl(255.1 91.7% 76.3%);
    --nu-color-violet-500: hsl(258.3 89.5% 66.3%);
    --nu-color-violet-600: hsl(262.1 83.3% 57.8%);
    --nu-color-violet-700: hsl(263.4 70% 50.4%);
    --nu-color-violet-800: hsl(263.4 69.3% 42.2%);
    --nu-color-violet-900: hsl(263.5 67.4% 34.9%);
    --nu-color-violet-950: hsl(265.1 61.5% 21.4%);

    --nu-color-purple-50: hsl(270 100% 98%);
    --nu-color-purple-100: hsl(268.7 100% 95.5%);
    --nu-color-purple-200: hsl(268.6 100% 91.8%);
    --nu-color-purple-300: hsl(269.2 97.4% 85.1%);
    --nu-color-purple-400: hsl(270 95.2% 75.3%);
    --nu-color-purple-500: hsl(270.7 91% 65.1%);
    --nu-color-purple-600: hsl(271.5 81.3% 55.9%);
    --nu-color-purple-700: hsl(272.1 71.7% 47.1%);
    --nu-color-purple-800: hsl(272.9 67.2% 39.4%);
    --nu-color-purple-900: hsl(273.6 65.6% 32%);
    --nu-color-purple-950: hsl(276 59.5% 16.5%);

    --nu-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --nu-color-fuchsia-100: hsl(287 100% 95.5%);
    --nu-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --nu-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --nu-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --nu-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --nu-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --nu-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --nu-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --nu-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --nu-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --nu-color-pink-50: hsl(327.3 73.3% 97.1%);
    --nu-color-pink-100: hsl(325.7 77.8% 94.7%);
    --nu-color-pink-200: hsl(325.9 84.6% 89.8%);
    --nu-color-pink-300: hsl(327.4 87.1% 81.8%);
    --nu-color-pink-400: hsl(328.6 85.5% 70.2%);
    --nu-color-pink-500: hsl(330.4 81.2% 60.4%);
    --nu-color-pink-600: hsl(333.3 71.4% 50.6%);
    --nu-color-pink-700: hsl(335.1 77.6% 42%);
    --nu-color-pink-800: hsl(335.8 74.4% 35.3%);
    --nu-color-pink-900: hsl(335.9 69% 30.4%);
    --nu-color-pink-950: hsl(336.2 65.4% 15.9%);

    --nu-color-rose-50: hsl(355.7 100% 97.3%);
    --nu-color-rose-100: hsl(355.6 100% 94.7%);
    --nu-color-rose-200: hsl(352.7 96.1% 90%);
    --nu-color-rose-300: hsl(352.6 95.7% 81.8%);
    --nu-color-rose-400: hsl(351.3 94.5% 71.4%);
    --nu-color-rose-500: hsl(349.7 89.2% 60.2%);
    --nu-color-rose-600: hsl(346.8 77.2% 49.8%);
    --nu-color-rose-700: hsl(345.3 82.7% 40.8%);
    --nu-color-rose-800: hsl(343.4 79.7% 34.7%);
    --nu-color-rose-900: hsl(341.5 75.5% 30.4%);
    --nu-color-rose-950: hsl(341.3 70.1% 17.1%);

    --nu-color-primary-50: hsl(195, 100%, 97%);
    --nu-color-primary-100: hsl(198, 100%, 90%);
    --nu-color-primary-200: hsl(198, 100%, 83%);
    --nu-color-primary-300: hsl(198, 100%, 73%);
    --nu-color-primary-400: hsl(198, 100%, 59%);
    --nu-color-primary-500: hsl(197, 84%, 48%);
    --nu-color-primary-600: hsl(197, 83%, 40%);
    --nu-color-primary-700: hsl(197, 83%, 33%);
    --nu-color-primary-800: hsl(197, 84%, 27%);
    --nu-color-primary-900: hsl(197, 84%, 19%);
    --nu-color-primary-950: hsl(197, 84%, 12%);

    --nu-color-success-50: var(--nu-color-green-50);
    --nu-color-success-100: var(--nu-color-green-100);
    --nu-color-success-200: var(--nu-color-green-200);
    --nu-color-success-300: var(--nu-color-green-300);
    --nu-color-success-400: var(--nu-color-green-400);
    --nu-color-success-500: var(--nu-color-green-500);
    --nu-color-success-600: var(--nu-color-green-600);
    --nu-color-success-700: var(--nu-color-green-700);
    --nu-color-success-800: var(--nu-color-green-800);
    --nu-color-success-900: var(--nu-color-green-900);
    --nu-color-success-950: var(--nu-color-green-950);

    --nu-color-warning-50: var(--nu-color-amber-50);
    --nu-color-warning-100: var(--nu-color-amber-100);
    --nu-color-warning-200: var(--nu-color-amber-200);
    --nu-color-warning-300: var(--nu-color-amber-300);
    --nu-color-warning-400: var(--nu-color-amber-400);
    --nu-color-warning-500: var(--nu-color-amber-500);
    --nu-color-warning-600: var(--nu-color-amber-600);
    --nu-color-warning-700: var(--nu-color-amber-700);
    --nu-color-warning-800: var(--nu-color-amber-800);
    --nu-color-warning-900: var(--nu-color-amber-900);
    --nu-color-warning-950: var(--nu-color-amber-950);

    --nu-color-danger-50: var(--nu-color-red-50);
    --nu-color-danger-100: var(--nu-color-red-100);
    --nu-color-danger-200: var(--nu-color-red-200);
    --nu-color-danger-300: var(--nu-color-red-300);
    --nu-color-danger-400: var(--nu-color-red-400);
    --nu-color-danger-500: var(--nu-color-red-500);
    --nu-color-danger-600: var(--nu-color-red-600);
    --nu-color-danger-700: var(--nu-color-red-700);
    --nu-color-danger-800: var(--nu-color-red-800);
    --nu-color-danger-900: var(--nu-color-red-900);
    --nu-color-danger-950: var(--nu-color-red-950);

    --nu-color-neutral-50: var(--nu-color-gray-50);
    --nu-color-neutral-100: var(--nu-color-gray-100);
    --nu-color-neutral-200: var(--nu-color-gray-200);
    --nu-color-neutral-300: var(--nu-color-gray-300);
    --nu-color-neutral-400: var(--nu-color-gray-400);
    --nu-color-neutral-500: var(--nu-color-gray-500);
    --nu-color-neutral-600: var(--nu-color-gray-600);
    --nu-color-neutral-700: var(--nu-color-gray-700);
    --nu-color-neutral-800: var(--nu-color-gray-800);
    --nu-color-neutral-900: var(--nu-color-gray-900);
    --nu-color-neutral-950: var(--nu-color-gray-950);

    --nu-color-neutral-0: hsl(0, 0%, 100%);
    --nu-color-neutral-1000: hsl(0, 0%, 0%);

    --nu-border-radius-small: 0.3rem;
    --nu-border-radius-medium: 0.5rem;
    --nu-border-radius-large: 0.75rem;
    --nu-border-radius-x-large: 1rem;

    --nu-border-radius-circle: 50%;
    --nu-border-radius-pill: 9999px;

    --nu-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --nu-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --nu-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --nu-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --nu-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --nu-spacing-3x-small: 0.125rem;
    --nu-spacing-2x-small: 0.25rem;
    --nu-spacing-x-small: 0.5rem;
    --nu-spacing-small: 0.75rem;
    --nu-spacing-medium: 1rem;
    --nu-spacing-large: 1.25rem;
    --nu-spacing-x-large: 1.75rem;
    --nu-spacing-2x-large: 2.25rem;
    --nu-spacing-3x-large: 3rem;
    --nu-spacing-4x-large: 4.5rem;

    --nu-transition-x-slow: 1000ms;
    --nu-transition-slow: 500ms;
    --nu-transition-medium: 250ms;
    --nu-transition-fast: 150ms;
    --nu-transition-x-fast: 50ms;

    --nu-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --nu-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --nu-font-serif: Georgia, "Times New Roman", serif;

    --nu-font-size-2x-small: 0.625rem;
    --nu-font-size-x-small: 0.75rem;
    --nu-font-size-small: 0.875rem;
    --nu-font-size-medium: 1rem;
    --nu-font-size-large: 1.25rem;
    --nu-font-size-x-large: 1.5rem;
    --nu-font-size-2x-large: 2.25rem;
    --nu-font-size-3x-large: 3rem;
    --nu-font-size-4x-large: 4.5rem;

    --nu-font-weight-light: 300;
    --nu-font-weight-normal: 400;
    --nu-font-weight-semibold: 500;
    --nu-font-weight-bold: 700;

    --nu-letter-spacing-denser: -0.03em;
    --nu-letter-spacing-dense: -0.015em;
    --nu-letter-spacing-normal: normal;
    --nu-letter-spacing-loose: 0.075em;
    --nu-letter-spacing-looser: 0.15em;

    --nu-line-height-denser: 1;
    --nu-line-height-dense: 1.5;
    --nu-line-height-normal: 1.625;
    --nu-line-height-loose: 1.75;
    --nu-line-height-looser: 2;

    --nu-focus-ring-color: var(--nu-color-primary-600);
    --nu-focus-ring-style: solid;
    --nu-focus-ring-width: 3px;
    --nu-focus-ring: var(--nu-focus-ring-style) var(--nu-focus-ring-width)
      var(--nu-focus-ring-color);
    --nu-focus-ring-offset: 1px;

    --nu-button-font-size-small: var(--nu-font-size-x-small);
    --nu-button-font-size-medium: var(--nu-font-size-small);
    --nu-button-font-size-large: var(--nu-font-size-medium);

    --nu-input-height-small: 1.875rem;
    --nu-input-height-medium: 2.5rem;
    --nu-input-height-large: 3.125rem;

    --nu-input-background-color: var(--nu-color-neutral-0);
    --nu-input-background-color-hover: var(--nu-input-background-color);
    --nu-input-background-color-focus: var(--nu-input-background-color);
    --nu-input-background-color-disabled: var(--nu-color-neutral-100);
    --nu-input-border-color: var(--nu-color-neutral-300);
    --nu-input-border-color-hover: var(--nu-color-neutral-400);
    --nu-input-border-color-focus: var(--nu-color-primary-500);
    --nu-input-border-color-disabled: var(--nu-color-neutral-300);
    --nu-input-border-width: 1px;
    --nu-input-required-content: "*";
    --nu-input-required-content-offset: -2px;
    --nu-input-required-content-color: var(--nu-input-label-color);

    --nu-input-border-radius-small: var(--nu-border-radius-medium);
    --nu-input-border-radius-medium: var(--nu-border-radius-medium);
    --nu-input-border-radius-large: var(--nu-border-radius-medium);

    --nu-input-font-family: var(--nu-font-sans);
    --nu-input-font-weight: var(--nu-font-weight-normal);
    --nu-input-font-size-small: var(--nu-font-size-small);
    --nu-input-font-size-medium: var(--nu-font-size-medium);
    --nu-input-font-size-large: var(--nu-font-size-large);
    --nu-input-letter-spacing: var(--nu-letter-spacing-normal);

    --nu-input-color: var(--nu-color-stone-700);
    --nu-input-color-hover: var(--nu-color-stone-700);
    --nu-input-color-focus: var(--nu-color-stone-700);
    --nu-input-color-disabled: var(--nu-color-stone-900);
    --nu-input-icon-color: var(--nu-color-stone-500);
    --nu-input-icon-color-hover: var(--nu-color-stone-600);
    --nu-input-icon-color-focus: var(--nu-color-stone-600);
    --nu-input-placeholder-color: var(--nu-color-stone-500);
    --nu-input-placeholder-color-disabled: var(--nu-color-stone-600);
    --nu-input-spacing-small: var(--nu-spacing-small);
    --nu-input-spacing-medium: var(--nu-spacing-medium);
    --nu-input-spacing-large: var(--nu-spacing-large);

    --nu-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --nu-input-focus-ring-offset: 0;

    --nu-input-filled-background-color: var(--nu-color-neutral-100);
    --nu-input-filled-background-color-hover: var(--nu-color-neutral-100);
    --nu-input-filled-background-color-focus: var(--nu-color-neutral-100);
    --nu-input-filled-background-color-disabled: var(--nu-color-neutral-100);
    --nu-input-filled-color: var(--nu-color-neutral-800);
    --nu-input-filled-color-hover: var(--nu-color-neutral-800);
    --nu-input-filled-color-focus: var(--nu-color-neutral-700);
    --nu-input-filled-color-disabled: var(--nu-color-neutral-800);

    --nu-input-label-font-size-small: var(--nu-font-size-small);
    --nu-input-label-font-size-medium: var(--nu-font-size-medium);
    --nu-input-label-font-size-large: var(--nu-font-size-large);
    --nu-input-label-color: inherit;

    --nu-input-help-text-font-size-small: var(--nu-font-size-x-small);
    --nu-input-help-text-font-size-medium: var(--nu-font-size-small);
    --nu-input-help-text-font-size-large: var(--nu-font-size-medium);
    --nu-input-help-text-color: var(--nu-color-neutral-500);

    --nu-toggle-size-small: 0.875rem;
    --nu-toggle-size-medium: 1.125rem;
    --nu-toggle-size-large: 1.375rem;

    --nu-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --nu-panel-background-color: var(--nu-color-neutral-0);
    --nu-panel-border-color: var(--nu-color-neutral-200);
    --nu-panel-border-width: 1px;

    --nu-tooltip-border-radius: var(--nu-border-radius-medium);
    --nu-tooltip-background-color: var(--nu-color-neutral-800);
    --nu-tooltip-color: var(--nu-color-neutral-0);
    --nu-tooltip-font-family: var(--nu-font-sans);
    --nu-tooltip-font-weight: var(--nu-font-weight-normal);
    --nu-tooltip-font-size: var(--nu-font-size-small);
    --nu-tooltip-line-height: var(--nu-line-height-dense);
    --nu-tooltip-padding: var(--nu-spacing-2x-small) var(--nu-spacing-x-small);
    --nu-tooltip-arrow-size: 6px;

    --nu-z-index-drawer: 700;
    --nu-z-index-dialog: 800;
    --nu-z-index-dropdown: 900;
    --nu-z-index-toast: 950;
    --nu-z-index-tooltip: 1000;
  }

  @supports (scrollbar-gutter: stable) {
    .nu-scroll-lock {
      scrollbar-gutter: var(--nu-scroll-lock-gutter) !important;
    }

    .nu-scroll-lock body {
      overflow: hidden !important;
    }
  }

  @supports not (scrollbar-gutter: stable) {
    .nu-scroll-lock body {
      padding-right: var(--nu-scroll-lock-size) !important;
      overflow: hidden !important;
    }
  }

  .nu-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--nu-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .nu-toast-stack sl-alert {
    margin: var(--nu-spacing-medium);
  }

  .nu-toast-stack sl-alert::part(base) {
    box-shadow: var(--nu-shadow-large);
  }
`;
