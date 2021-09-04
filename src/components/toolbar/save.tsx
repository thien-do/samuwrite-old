import { TippyProps } from "@tippyjs/react";
import { FileState } from "~/src/components/file/state";
import { VscSave } from "react-icons/vsc";
import { Button } from "~/src/components/button/button";
import { ButtonMoreMenuItem } from "~/src/components/button/more/menu";
import { Editor } from "../editor/state/state";

interface Props {
	file: FileState;
	editor: Editor | null;
	singleton: TippyProps["singleton"];
}

const save = async (props: Props) => {
	if (props.file.handle === null) throw Error("Not support save new file yet");
	const writable = await props.file.handle.createWritable();
	if (props.editor === null) throw Error("Editor is not inited");
	const text = props.editor.getValue();
	writable.write(text);
	props.file.setDirty(false);
	await writable.close();
};

const saveAs = (_props: Props): ButtonMoreMenuItem => ({
	action: () => window.alert("Coming soon"),
	label: "Save as…",
	shortcut: [
		{ type: "command-or-control" },
		{ type: "shift" },
		{ type: "char", value: "S" },
	],
});

export const ToolbarSave = (props: Props): JSX.Element => (
	<Button
		onClick={() => void save(props)}
		Icon={VscSave}
		shortcut={[{ type: "command-or-control" }, { type: "char", value: "S" }]}
		tooltip="Save"
		tooltipSingleton={props.singleton}
		more={[saveAs(props)]}
	/>
);