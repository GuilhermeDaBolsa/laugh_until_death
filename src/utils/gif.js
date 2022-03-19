function removeCreatorFromGifTitle(gifTitle) {
	const lastOccurrenceOfCreatorSeparator = gifTitle.lastIndexOf("GIF by");

	if (lastOccurrenceOfCreatorSeparator != -1) {
		return gifTitle.substring(0, lastOccurrenceOfCreatorSeparator);
	}
	return gifTitle;
}

module.exports = { removeCreatorFromGifTitle }