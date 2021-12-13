import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
	const domNodeRef = useRef();

	useEffect(() => {
		const clickOutsideHandler = (e) => {
			if (!domNodeRef.current) {
				return;
			} else if (!domNodeRef.current.contains(e.target)) {
				handler();
			}
		};
		document.addEventListener("mousedown", clickOutsideHandler);

		return () => {
			document.removeEventListener("mousedown", clickOutsideHandler);
		};
	}, [handler]);

	return domNodeRef;
};

export default useClickOutside;
