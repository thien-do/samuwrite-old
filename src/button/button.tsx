import { forwardRef } from "react";
import { IconType } from "react-icons";
import { VscChevronDown } from "react-icons/vsc";
import { MenuItem } from "~src/menu/item/interface";
import { Menu } from "~src/menu/menu";
import { ShortcutText } from "../shortcut/shortcut";
import s from "./button.module.css";

export interface ButtonProps {
	Icon: IconType;
	onClick?: () => void;
	shortcut?: string;
	more?: MenuItem[];
	selected?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref): JSX.Element => {
		return (
			<div className={[s.container].join(" ")}>
				<button
					className={[
						s.button,
						s.primary,
						props.selected ? s.selected : "",
					].join(" ")}
					onClick={props.onClick}
					ref={ref}
				>
					<props.Icon size={24} />
					{props.shortcut && <ShortcutText keys={props.shortcut} />}
				</button>
				{props.more && (
					<div className={s.more}>
						<Menu items={props.more} button={{ Icon: VscChevronDown }} />
					</div>
				)}
			</div>
		);
	}
);
