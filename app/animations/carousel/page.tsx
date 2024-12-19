"use client";
import { useMeasure, usePrevious } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import ArrowLeft from "./_assets/arrow_left";
import ArrowRight from "./_assets/arrow_right";

export default function CarouselPage() {
	const [count, setCount] = React.useState(0);
	const prevCount = usePrevious(count);
	const [ref, { width, height }] = useMeasure();

	const direction = count > prevCount ? "increase" : "decrease";

	const variants = {
		enterting: ({
			direction,
			width,
		}: { direction: "increase" | "decrease"; width: number }) => {
			return {
				x: direction === "increase" ? width + 5 : -width + 5,
				opacity: 0,
			};
		},
		center: {
			x: 0,
			opacity: 1,
		},
		exiting: ({
			direction,
			width,
		}: { direction: "increase" | "decrease"; width: number }) => {
			return {
				x: direction === "increase" ? -width + 5 : width + 5,
				opacity: 0,
			};
		},
	};

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex items-center space-x-4">
				<button
					className="rounded-md bg-gray-300 p-2"
					type="button"
					onClick={() => setCount(count - 1)}
				>
					<ArrowLeft />
				</button>
				<div
					ref={ref}
					className="relative flex h-64 w-96 items-center justify-center overflow-hidden rounded-md bg-gray-300"
				>
					<AnimatePresence custom={{ direction, width }}>
						<motion.div
							key={count}
							variants={variants}
							custom={{ direction, width }}
							initial="enterting"
							animate="center"
							exit="exiting"
							transition={{ duration: 0.5 }}
							className={`absolute flex h-60 w-60 items-center justify-center rounded-md ${COLORS[Math.abs(count) % COLORS.length]}`}
						>
							<span className="text-4xl text-gray-800">{count}</span>
						</motion.div>
					</AnimatePresence>
				</div>
				<button
					className="rounded-md bg-gray-300 p-2"
					type="button"
					onClick={() => setCount(count + 1)}
				>
					<ArrowRight />
				</button>
			</div>
		</div>
	);
}

const COLORS = ["bg-red-400", "bg-blue-400", "bg-green-400, bg-yellow-400"];
