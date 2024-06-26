import { getContext } from 'svelte';
import type { CreateThemeContextReturn } from './create-theme-context.svelte.js';
import type { Theme } from './types.js';

/**
 * @example
 * ```svelte
 * <script>
 *  import { useTheme } from 'svelte-os-themes';
 *
 *  let theme = useTheme();
 *
 *  $inspect(theme.value);
 * </script>
 *
 * <button
 *  type="button"
 *  onclick={function () {
 *    theme.value = 'light';
 *  }}
 * >
 *  Light
 * </button>
 * <button
 *  type="button"
 *  onclick={function () {
 *    theme.value = 'dark';
 *  }}
 * >
 *  Dark
 * </button>
 * <button
 *  type="button"
 *  onclick={function () {
 *    theme.value = 'system';
 *  }}
 * >
 *  System
 * </button>
 * ```
 */
export function useTheme() {
  const context = getContext<CreateThemeContextReturn>('theme');

  return {
    get value() {
      return context.theme;
    },
    set value(theme: Theme) {
      if (context) {
        context.theme = theme;
      }
    },
  };
}
