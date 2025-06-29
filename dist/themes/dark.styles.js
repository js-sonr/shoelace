import { css } from "lit";

export default css`
  :host,
  .nu-theme-dark {
    color-scheme: dark;

    --nu-color-gray-50: hsl(240 5.1% 15%);
    --nu-color-gray-100: hsl(240 5.7% 18.2%);
    --nu-color-gray-200: hsl(240 4.6% 22%);
    --nu-color-gray-300: hsl(240 5% 27.6%);
    --nu-color-gray-400: hsl(240 5% 35.5%);
    --nu-color-gray-500: hsl(240 3.7% 44%);
    --nu-color-gray-600: hsl(240 5.3% 58%);
    --nu-color-gray-700: hsl(240 5.6% 73%);
    --nu-color-gray-800: hsl(240 7.3% 84%);
    --nu-color-gray-900: hsl(240 9.1% 91.8%);
    --nu-color-gray-950: hsl(0 0% 95%);

    --nu-color-red-50: hsl(0 56% 23.9%);
    --nu-color-red-100: hsl(0.6 60% 33.9%);
    --nu-color-red-200: hsl(0.9 67.2% 37.1%);
    --nu-color-red-300: hsl(1.1 71.3% 43.7%);
    --nu-color-red-400: hsl(1 76% 52.5%);
    --nu-color-red-500: hsl(0.7 89.6% 57.2%);
    --nu-color-red-600: hsl(0 98.6% 67.9%);
    --nu-color-red-700: hsl(0 100% 72.3%);
    --nu-color-red-800: hsl(0 100% 85.6%);
    --nu-color-red-900: hsl(0 100% 90.3%);
    --nu-color-red-950: hsl(0 100% 95.9%);

    --nu-color-orange-50: hsl(15 64.2% 23.3%);
    --nu-color-orange-100: hsl(15.1 70.9% 31.1%);
    --nu-color-orange-200: hsl(15.3 75.7% 35.5%);
    --nu-color-orange-300: hsl(17.1 83.5% 42.7%);
    --nu-color-orange-400: hsl(20.1 88% 50.8%);
    --nu-color-orange-500: hsl(24.3 100% 50.5%);
    --nu-color-orange-600: hsl(27.2 100% 57.7%);
    --nu-color-orange-700: hsl(31.3 100% 68.7%);
    --nu-color-orange-800: hsl(33.8 100% 79.3%);
    --nu-color-orange-900: hsl(38.9 100% 87.7%);
    --nu-color-orange-950: hsl(46.2 100% 95%);

    --nu-color-amber-50: hsl(21.9 66.3% 21.1%);
    --nu-color-amber-100: hsl(21.5 73.6% 29.7%);
    --nu-color-amber-200: hsl(22.3 77.6% 33.3%);
    --nu-color-amber-300: hsl(25.4 84.2% 39.6%);
    --nu-color-amber-400: hsl(31.4 87.4% 46.7%);
    --nu-color-amber-500: hsl(37 96.6% 48.3%);
    --nu-color-amber-600: hsl(43.3 100% 53.4%);
    --nu-color-amber-700: hsl(46.5 100% 61.1%);
    --nu-color-amber-800: hsl(49.3 100% 73%);
    --nu-color-amber-900: hsl(51.8 100% 85%);
    --nu-color-amber-950: hsl(60 100% 94.6%);

    --nu-color-yellow-50: hsl(32.5 60% 18.2%);
    --nu-color-yellow-100: hsl(28.1 68.6% 29%);
    --nu-color-yellow-200: hsl(31.3 75.8% 30.8%);
    --nu-color-yellow-300: hsl(34.7 84.4% 35.3%);
    --nu-color-yellow-400: hsl(40.1 87.3% 43.3%);
    --nu-color-yellow-500: hsl(44.7 88% 46%);
    --nu-color-yellow-600: hsl(47.7 100% 50.9%);
    --nu-color-yellow-700: hsl(51.3 100% 59.9%);
    --nu-color-yellow-800: hsl(54.6 100% 73%);
    --nu-color-yellow-900: hsl(58.9 100% 84.2%);
    --nu-color-yellow-950: hsl(60 100% 94%);

    --nu-color-lime-50: hsl(86.5 54.4% 18%);
    --nu-color-lime-100: hsl(87.6 56.8% 23.3%);
    --nu-color-lime-200: hsl(85.8 63.2% 24.5%);
    --nu-color-lime-300: hsl(86.1 72% 29.4%);
    --nu-color-lime-400: hsl(85.5 76.8% 37.3%);
    --nu-color-lime-500: hsl(84.3 74.2% 42.1%);
    --nu-color-lime-600: hsl(82.8 81.5% 52.6%);
    --nu-color-lime-700: hsl(82 89.9% 64%);
    --nu-color-lime-800: hsl(80.9 97.9% 76.6%);
    --nu-color-lime-900: hsl(77.9 100% 85.8%);
    --nu-color-lime-950: hsl(69.5 100% 93.8%);

    --nu-color-green-50: hsl(144.3 53.6% 16%);
    --nu-color-green-100: hsl(143.2 55.4% 23.5%);
    --nu-color-green-200: hsl(141.5 58.2% 26.3%);
    --nu-color-green-300: hsl(140.8 64.2% 31.8%);
    --nu-color-green-400: hsl(140.3 68% 39.2%);
    --nu-color-green-500: hsl(141.1 64.9% 43%);
    --nu-color-green-600: hsl(141.6 72.4% 55.2%);
    --nu-color-green-700: hsl(141.7 82.7% 70.1%);
    --nu-color-green-800: hsl(141 90.9% 82.1%);
    --nu-color-green-900: hsl(142 100% 89.1%);
    --nu-color-green-950: hsl(144 100% 95.5%);

    --nu-color-emerald-50: hsl(164.3 75% 13.5%);
    --nu-color-emerald-100: hsl(163.5 72.6% 20.1%);
    --nu-color-emerald-200: hsl(162.1 73.7% 22.4%);
    --nu-color-emerald-300: hsl(161.3 77.3% 27.6%);
    --nu-color-emerald-400: hsl(159.6 77.1% 34.3%);
    --nu-color-emerald-500: hsl(159.1 73.5% 37.9%);
    --nu-color-emerald-600: hsl(157.8 66.8% 48.9%);
    --nu-color-emerald-700: hsl(156.2 76.1% 63.8%);
    --nu-color-emerald-800: hsl(152.4 84.4% 77.4%);
    --nu-color-emerald-900: hsl(149.3 100% 87%);
    --nu-color-emerald-950: hsl(158.6 100% 94.8%);

    --nu-color-teal-50: hsl(176.5 51.5% 15.4%);
    --nu-color-teal-100: hsl(175.9 54.7% 22.3%);
    --nu-color-teal-200: hsl(175.9 60.7% 23.9%);
    --nu-color-teal-300: hsl(174.5 67.3% 28.8%);
    --nu-color-teal-400: hsl(174.4 71.9% 34.9%);
    --nu-color-teal-500: hsl(173.1 71% 38.3%);
    --nu-color-teal-600: hsl(172.3 68.2% 48.1%);
    --nu-color-teal-700: hsl(170.5 81.3% 61.5%);
    --nu-color-teal-800: hsl(168.4 92.1% 75.2%);
    --nu-color-teal-900: hsl(168.3 100% 86%);
    --nu-color-teal-950: hsl(180 100% 95.5%);

    --nu-color-cyan-50: hsl(197, 84%, 12%);
    --nu-color-cyan-100: hsl(197, 84%, 19%);
    --nu-color-cyan-200: hsl(197, 84%, 27%);
    --nu-color-cyan-300: hsl(197, 83%, 33%);
    --nu-color-cyan-400: hsl(197, 83%, 40%);
    --nu-color-cyan-500: hsl(197, 84%, 48%);
    --nu-color-cyan-600: hsl(198, 100%, 59%);
    --nu-color-cyan-700: hsl(198, 100%, 73%);
    --nu-color-cyan-800: hsl(198, 100%, 83%);
    --nu-color-cyan-900: hsl(198, 100%, 90%);
    --nu-color-cyan-950: hsl(195, 100%, 97%);

    --nu-color-sky-50: hsl(203 63.8% 20.9%);
    --nu-color-sky-100: hsl(203.4 70.4% 28%);
    --nu-color-sky-200: hsl(202.7 75.8% 30.8%);
    --nu-color-sky-300: hsl(203.1 80.4% 36.1%);
    --nu-color-sky-400: hsl(202.1 80.5% 44.3%);
    --nu-color-sky-500: hsl(199.7 85.9% 47.7%);
    --nu-color-sky-600: hsl(198.7 97.9% 57.2%);
    --nu-color-sky-700: hsl(198.7 100% 70.5%);
    --nu-color-sky-800: hsl(198.8 100% 82.5%);
    --nu-color-sky-900: hsl(198.5 100% 89.9%);
    --nu-color-sky-950: hsl(186 100% 95.5%);

    --nu-color-blue-50: hsl(227.1 49.5% 22.7%);
    --nu-color-blue-100: hsl(225.8 58.9% 36.8%);
    --nu-color-blue-200: hsl(227.7 64.4% 42.9%);
    --nu-color-blue-300: hsl(226.1 72.7% 51.2%);
    --nu-color-blue-400: hsl(222.6 86.5% 56.3%);
    --nu-color-blue-500: hsl(217.8 95.8% 57.4%);
    --nu-color-blue-600: hsl(213.3 100% 65%);
    --nu-color-blue-700: hsl(210.9 100% 74.8%);
    --nu-color-blue-800: hsl(211.5 100% 83.4%);
    --nu-color-blue-900: hsl(211 100% 88.9%);
    --nu-color-blue-950: hsl(201.8 100% 95.3%);

    --nu-color-indigo-50: hsl(243.5 40.8% 27%);
    --nu-color-indigo-100: hsl(242.9 45.7% 37.6%);
    --nu-color-indigo-200: hsl(244.7 52.7% 43.1%);
    --nu-color-indigo-300: hsl(245.3 60.5% 52.4%);
    --nu-color-indigo-400: hsl(244.1 79.2% 60.4%);
    --nu-color-indigo-500: hsl(239.6 88.7% 63.8%);
    --nu-color-indigo-600: hsl(234.5 96.7% 70.9%);
    --nu-color-indigo-700: hsl(229.4 100% 78.3%);
    --nu-color-indigo-800: hsl(227.1 100% 85%);
    --nu-color-indigo-900: hsl(223.8 100% 89.9%);
    --nu-color-indigo-950: hsl(220 100% 95.1%);

    --nu-color-violet-50: hsl(265.1 57.3% 25.4%);
    --nu-color-violet-100: hsl(263.5 63.8% 39.4%);
    --nu-color-violet-200: hsl(263.4 66.2% 44.1%);
    --nu-color-violet-300: hsl(263.7 72.8% 52.4%);
    --nu-color-violet-400: hsl(262.5 87.3% 59.8%);
    --nu-color-violet-500: hsl(258.3 95.1% 63.2%);
    --nu-color-violet-600: hsl(255.1 100% 67.2%);
    --nu-color-violet-700: hsl(253 100% 81.5%);
    --nu-color-violet-800: hsl(251.7 100% 87.9%);
    --nu-color-violet-900: hsl(254.1 100% 91.7%);
    --nu-color-violet-950: hsl(257.1 100% 96.1%);

    --nu-color-purple-50: hsl(276 54.3% 20.5%);
    --nu-color-purple-100: hsl(273.6 61.8% 35.4%);
    --nu-color-purple-200: hsl(272.9 64% 41.4%);
    --nu-color-purple-300: hsl(271.9 68.1% 49.2%);
    --nu-color-purple-400: hsl(271.5 85.1% 57.8%);
    --nu-color-purple-500: hsl(270.7 96.4% 62.1%);
    --nu-color-purple-600: hsl(270.5 100% 71.9%);
    --nu-color-purple-700: hsl(270.9 100% 81.3%);
    --nu-color-purple-800: hsl(272.4 100% 87.7%);
    --nu-color-purple-900: hsl(276.7 100% 91.5%);
    --nu-color-purple-950: hsl(300 100% 96.5%);

    --nu-color-fuchsia-50: hsl(297.1 51.2% 18.6%);
    --nu-color-fuchsia-100: hsl(296.7 59.5% 31.5%);
    --nu-color-fuchsia-200: hsl(295.4 65.4% 35.1%);
    --nu-color-fuchsia-300: hsl(294.6 67.4% 42.2%);
    --nu-color-fuchsia-400: hsl(293.3 68.7% 51.2%);
    --nu-color-fuchsia-500: hsl(292.1 88.4% 57.7%);
    --nu-color-fuchsia-600: hsl(292 98.5% 59.5%);
    --nu-color-fuchsia-700: hsl(292.4 100% 79.5%);
    --nu-color-fuchsia-800: hsl(292.9 100% 86.8%);
    --nu-color-fuchsia-900: hsl(300 100% 91.5%);
    --nu-color-fuchsia-950: hsl(300 100% 96.3%);

    --nu-color-pink-50: hsl(336.2 59.6% 20%);
    --nu-color-pink-100: hsl(336.8 63.9% 34%);
    --nu-color-pink-200: hsl(336.8 68.7% 37.6%);
    --nu-color-pink-300: hsl(336.1 71.8% 44.5%);
    --nu-color-pink-400: hsl(333.9 74.9% 53.1%);
    --nu-color-pink-500: hsl(330.7 86.3% 57.7%);
    --nu-color-pink-600: hsl(328.6 91.5% 67.2%);
    --nu-color-pink-700: hsl(327.4 97.6% 78.7%);
    --nu-color-pink-800: hsl(325.1 100% 86.6%);
    --nu-color-pink-900: hsl(322.1 100% 91.3%);
    --nu-color-pink-950: hsl(315 100% 95.9%);

    --nu-color-rose-50: hsl(342.3 62.9% 21.5%);
    --nu-color-rose-100: hsl(342.8 68.9% 34.2%);
    --nu-color-rose-200: hsl(344.8 72.6% 37.3%);
    --nu-color-rose-300: hsl(346.9 75.8% 43.7%);
    --nu-color-rose-400: hsl(348.2 80.1% 52.7%);
    --nu-color-rose-500: hsl(350.4 94.8% 57.5%);
    --nu-color-rose-600: hsl(351.2 100% 58.1%);
    --nu-color-rose-700: hsl(352.3 100% 78.1%);
    --nu-color-rose-800: hsl(352 100% 86.2%);
    --nu-color-rose-900: hsl(354.5 100% 90.7%);
    --nu-color-rose-950: hsl(353.3 100% 95.7%);

    --nu-color-primary-50: hsl(197, 84%, 12%);
    --nu-color-primary-100: hsl(197, 84%, 19%);
    --nu-color-primary-200: hsl(197, 84%, 27%);
    --nu-color-primary-300: hsl(197, 83%, 33%);
    --nu-color-primary-400: hsl(197, 83%, 40%);
    --nu-color-primary-500: hsl(197, 84%, 48%);
    --nu-color-primary-600: hsl(198, 100%, 59%);
    --nu-color-primary-700: hsl(198, 100%, 73%);
    --nu-color-primary-800: hsl(198, 100%, 83%);
    --nu-color-primary-900: hsl(198, 100%, 90%);
    --nu-color-primary-950: hsl(195, 100%, 97%);

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

    --nu-color-neutral-0: hsl(240, 5.9%, 11%);
    --nu-color-neutral-1000: hsl(0, 0%, 100%);

    --nu-border-radius-small: 0.3rem;
    --nu-border-radius-medium: 0.5rem;
    --nu-border-radius-large: 0.75rem;
    --nu-border-radius-x-large: 1rem;

    --nu-border-radius-circle: 50%;
    --nu-border-radius-pill: 9999px;

    --nu-shadow-x-small: 0 1px 2px rgb(0 0 0 / 18%);
    --nu-shadow-small: 0 1px 2px rgb(0 0 0 / 24%);
    --nu-shadow-medium: 0 2px 4px rgb(0 0 0 / 24%);
    --nu-shadow-large: 0 2px 8px rgb(0 0 0 / 24%);
    --nu-shadow-x-large: 0 4px 16px rgb(0 0 0 / 24%);

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

    --nu-focus-ring-color: var(--nu-color-primary-700);
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
    --nu-input-border-color: var(--nu-color-neutral-400);
    --nu-input-border-color-hover: var(--nu-color-neutral-500);
    --nu-input-border-color-focus: var(--nu-color-primary-600);
    --nu-input-border-color-disabled: var(--nu-color-neutral-400);
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

    --nu-input-color: var(--nu-color-neutral-700);
    --nu-input-color-hover: var(--nu-color-neutral-700);
    --nu-input-color-focus: var(--nu-color-neutral-700);
    --nu-input-color-disabled: var(--nu-color-neutral-900);
    --nu-input-icon-color: var(--nu-color-neutral-500);
    --nu-input-icon-color-hover: var(--nu-color-neutral-600);
    --nu-input-icon-color-focus: var(--nu-color-neutral-600);
    --nu-input-placeholder-color: var(--nu-color-neutral-500);
    --nu-input-placeholder-color-disabled: var(--nu-color-neutral-600);
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
    --nu-input-help-text-color: var(--nu-color-neutral-600);

    --nu-toggle-size-small: 0.875rem;
    --nu-toggle-size-medium: 1.125rem;
    --nu-toggle-size-large: 1.375rem;

    --nu-overlay-background-color: hsl(0 0% 0% / 43%);

    --nu-panel-background-color: var(--nu-color-neutral-50);
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
