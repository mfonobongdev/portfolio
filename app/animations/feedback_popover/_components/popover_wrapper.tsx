"use client";
import { useSpeedControl } from "@/app/_components/use_speed_control";
import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { useFeedbackStore } from "../_utils/feedback_store";
import FeedbackForm from "./feedback_form";
import SuccessCard from "./success_card";

export default function PopoverWrapper() {
	const { closePopover, feedback, formState } = useFeedbackStore();

	const ref = useRef(null);
	useOnClickOutside(ref, closePopover);
	const [duration] = useSpeedControl({ value: 0.5 });

	return (
		<motion.div
			ref={ref}
			layoutId="wrapper_feedback"
			className="absolute h-[194px] w-[364px] overflow-hidden border border-black/10 bg-[#f5f6f7] p-1 shadow-md outline-none"
			style={{ borderRadius: 12 }}
			transition={{
				type: "spring",
				duration,
				bounce: 0.2,
			}}
		>
			{/* placeholder */}
			{!feedback ? (
				<motion.span
					layoutId="placeholder_feedback"
					className="absolute top-5 left-5 z-10 text-[#63635d] text-sm"
				>
					Feedback
				</motion.span>
			) : null}

			<div className="relative h-full">
				<AnimatePresence>
					{formState === "submitted" ? <SuccessCard /> : <FeedbackForm />}
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
