import { useMediaQuery } from "react-responsive";
export const useScreenType = () => {
	const isMobile = useMediaQuery({ maxWidth: 990 });
	const isDesktop = useMediaQuery({ minWidth: 990 });

	if (isDesktop) {
		return "desktop";
	}
	if (isMobile) {
		return "mobile";
	}
	return "desktop";
};
