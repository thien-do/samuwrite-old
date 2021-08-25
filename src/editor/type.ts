import * as monaco from "monaco-editor";

export type Editor = monaco.editor.IStandaloneCodeEditor;

export type EditorModel = monaco.editor.ITextModel;

export interface EditorVimMode {
	dispose: () => void;
}

export type initVimModeFn = (
	editor: Editor,
	statusElm: HTMLElement
) => EditorVimMode;
