import { useState } from "react";

export const useServerSection = () => {
	const [showChannels, setShowChannels] = useState(false);

	const toggleChannels = () => {
		setShowChannels(!showChannels);
	};

	return {
		showChannels,
		toggleChannels,
	};
};
