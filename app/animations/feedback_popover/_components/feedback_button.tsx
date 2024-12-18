"use client";
import { useSpeedControl } from "@/app/_components/use_speed_control";
import { motion } from "motion/react";
import { useFeedbackStore } from "../_utils/feedback_store";

export default function FeedbackButton() {
	const { openPopover, setFormState, setFeedback } = useFeedbackStore();
	const [duration] = useSpeedControl({ value: 0.5 });

	const resetForm = () => {
		setFormState("idle");
		setFeedback("");
		openPopover();
	};
	return (
		<motion.button
			type="button"
			layoutId="wrapper_feedback"
			transition={{
				type: "spring",
				duration,
				bounce: 0,
			}}
			className="flex items-center rounded-lg border border-black/10 px-3 py-2 font-inter "
			style={{ borderRadius: 8 }}
			onClick={resetForm}
		>
			<motion.span layoutId="placeholder_feedback" className="block text-sm">
				Feedback
			</motion.span>
		</motion.button>
	);
}
