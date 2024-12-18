"use client";
import SpeedControl from "@/app/_components/speed_control";
import { AnimatePresence } from "motion/react";
import FeedbackButton from "./_components/feedback_button";
import PopoverWrapper from "./_components/popover_wrapper";
import { useFeedbackStore } from "./_utils/feedback_store";

export default function FeedbackPopoverPage() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
			<FeedbackPopover />
			<SpeedControl />
		</div>
	);
}

function FeedbackPopover() {
	const { isPopoverOpen } = useFeedbackStore();
	return (
		<div className="relative flex h-[500px] w-screen items-center justify-center">
			<AnimatePresence>
				{isPopoverOpen ? <PopoverWrapper /> : <FeedbackButton />}
			</AnimatePresence>
		</div>
	);
}
