import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { TextField } from "@mui/material";

export const EmojiPickers = () => {
	const [chosenEmoji, setChosenEmoji] = useState<string>();

	const onEmojiClick = (event: any, emojiObject: any): any => {
		chosenEmoji === undefined
			? setChosenEmoji(emojiObject?.emoji)
			: setChosenEmoji(chosenEmoji + emojiObject?.emoji);
		console.log(emojiObject);
	};

	return (
		<div>
			<TextField
				label='Pick your mood'
				value={chosenEmoji}
				InputLabelProps={{
					shrink: true,
				}}
				sx={{my:2, width: '280px'}}
			/>
			<Picker onEmojiClick={onEmojiClick} />
		</div>
	);
};
