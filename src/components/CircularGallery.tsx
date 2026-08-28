// src/components/CircularGallery.tsx
import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
}

export interface GalleryItem {
    common: string;
    binomial: string;
    photo: {
        url: string;
        text: string;
        pos?: string;
        by: string;
    };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
    items: GalleryItem[];
    radius?: number;
    autoRotateSpeed?: number;
}

export const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
    ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
        const [rotation, setRotation] = useState(0);
        const [isScrolling, setIsScrolling] = useState(false);
        const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
        const animationFrameRef = useRef<number | null>(null);

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolling(true);
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }

                const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
                const scrollRotation = scrollProgress * 360;
                setRotation(scrollRotation);

                scrollTimeoutRef.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 150);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }
            };
        }, []);

        useEffect(() => {
            const autoRotate = () => {
                if (!isScrolling) {
                    setRotation(prev => prev + autoRotateSpeed);
                }
                animationFrameRef.current = requestAnimationFrame(autoRotate);
            };

            animationFrameRef.current = requestAnimationFrame(autoRotate);

            return () => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
            };
        }, [isScrolling, autoRotateSpeed]);

        const anglePerItem = 360 / items.length;

        return (
            <div
                ref={ref}
                role="region"
                aria-label="Circular 3D Gallery"
                className={cn("relative w-full h-full flex items-center justify-center", className)}
                style={{ perspective: '2000px' }}
                {...props}
            >
                <div
                    className="relative w-full h-full"
                    style={{
                        transform: `rotateY(${rotation}deg)`,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {items.map((item, i) => {
                        const itemAngle = i * anglePerItem;
                        const totalRotation = rotation % 360;
                        const relativeAngle = (itemAngle + totalRotation + 360) % 360;
                        const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
                        const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));

                        return (
                            <div
                                key={item.photo.url}
                                role="group"
                                aria-label={item.common}
                                className="absolute w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px]"
                                style={{
                                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: '-150px',
                                    marginTop: '-200px',
                                    opacity: opacity,
                                    transition: 'opacity 0.3s linear'
                                }}
                            >
                                <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border border-white/20 dark:border-slate-700/50 bg-white/10 dark:bg-slate-800/30 backdrop-blur-lg">
                                    <img
                                        src={item.photo.url}
                                        alt={item.photo.text}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        style={{ objectPosition: item.photo.pos || 'center' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                        <h2 className="text-lg sm:text-xl font-bold">{item.common}</h2>
                                        <em className="text-xs sm:text-sm italic opacity-80">{item.binomial}</em>
                                        <p className="text-[10px] sm:text-xs mt-2 opacity-70"> {item.photo.by}</p>
                                    </div>

                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-300" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
);

CircularGallery.displayName = 'CircularGallery';