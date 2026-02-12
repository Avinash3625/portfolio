import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};

export default useScrollReveal;
