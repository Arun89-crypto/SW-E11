import React, { useEffect, useState } from "react";
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

	useEffect(() => {
		var input = document.getElementById("mood-picker");
		input!.onkeydown = function (e: any) {
			var key = e.keyCode || e.charCode;
			if (key === 8) {
				setChosenEmoji(chosenEmoji?.slice(0, -1));
			}
		};
	});

	return (
		<div>
			<TextField
				id="mood-picker"
				label='Pick your mood'
				value={chosenEmoji}
				InputLabelProps={{
					shrink: true,
				}}
				sx={{ my: 2, width: "280px" }}
			/>
			<Picker onEmojiClick={onEmojiClick} />
		</div>
	);
};
