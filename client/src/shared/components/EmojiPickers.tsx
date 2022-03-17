import React, { useState } from "react";
import Picker from "emoji-picker-react";

export const EmojiPickers = () => {
	const [chosenEmoji, setChosenEmoji] = useState();

	const onEmojiClick = (event: any, emojiObject: any): any => {
		setChosenEmoji(emojiObject);
	};

	return (
		<div>
			<Picker onEmojiClick={onEmojiClick} />
		</div>
	);
};
