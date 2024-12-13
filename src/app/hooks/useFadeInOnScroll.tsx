// 'use client';
// import { useRef, useEffect } from 'react';

// export const useFadeInOnScroll = <T extends HTMLElement>() => {
// 	const ref = useRef<T>(null);

// 	useEffect(() => {
// 		const handleFadeIn = (entries: IntersectionObserverEntry[]) => {
// 			entries.forEach((entry) => {
// 				if (entry.isIntersecting && ref.current) {
// 					ref.current.style.opacity = '1';
// 					ref.current.style.transform = 'translateY(0)';
// 				}
// 			});
// 		};

// 		const observer = new IntersectionObserver(handleFadeIn, { threshold: 0.4 });

// 		if (ref.current) observer.observe(ref.current);

// 		return () => {
// 			if (ref.current) observer.unobserve(ref.current);
// 		};
// 	}, []);

// 	return ref;
// };

'use client';
import { useRef, useEffect } from 'react';

export const useFadeInOnScroll = <T extends HTMLElement>() => {
	const ref = useRef<T>(null);

	useEffect(() => {
		// Store the current ref value in a local variable
		const currentRef = ref.current;

		const handleFadeIn = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && currentRef) {
					currentRef.style.opacity = '1';
					currentRef.style.transform = 'translateY(0)';
				}
			});
		};

		const observer = new IntersectionObserver(handleFadeIn, { threshold: 0.4 });

		if (currentRef) observer.observe(currentRef);

		return () => {
			// Cleanup uses the same 'currentRef'
			if (currentRef) observer.unobserve(currentRef);
		};
	}, []);

	return ref;
};
