import { LayoutState, usePrefsLayout } from "./layout";
import { ThemeState, usePrefsTheme } from "./theme/state";
import { VimState, usePrefsVim } from "./vim";

export interface PrefsState extends ThemeState, VimState, LayoutState {}

export const usePrefs = (): PrefsState => {
	const theme = usePrefsTheme();
	const vim = usePrefsVim();
	const layout = usePrefsLayout();
	return { ...theme, ...vim, ...layout };
};