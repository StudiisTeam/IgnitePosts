import { ImgHTMLAttributes } from "react";
import styles from "./avata.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	url: string;
	hasBorder?: boolean;
}

export function Avatar({ hasBorder, url, ...props }: AvatarProps) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			src={url}
			{...props}
		/>
	);
}
