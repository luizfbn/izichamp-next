'use client';

import styles from './slide.module.css';
import React from 'react';
import ArrowLeft from '../../../public/assets/arrow-to-left.svg';
import ArrowRight from '../../../public/assets/arrow-to-right.svg';
import useDragScroll from '@/hooks/use-drag-scroll';

export default function Slide({ children }: React.PropsWithChildren) {
	const contentRef = useDragScroll(styles.active);

	function slidePrev() {
		const { width } = contentRef.current.getBoundingClientRect();
		contentRef.current.scrollLeft -= width;
	}

	function slideNext() {
		const { width } = contentRef.current.getBoundingClientRect();
		contentRef.current.scrollLeft += width;
	}

	return (
		<section className={styles.slide}>
			<button className={styles.button} onClick={slidePrev}>
				<ArrowLeft />
			</button>
			<div ref={contentRef} className={styles.content}>
				{children}
			</div>
			<button className={styles.button} onClick={slideNext}>
				<ArrowRight />
			</button>
		</section>
	);
}
