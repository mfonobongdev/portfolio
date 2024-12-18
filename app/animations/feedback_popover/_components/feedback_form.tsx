import { useSpeedControl } from "@/app/_components/use_speed_control";
import { AnimatePresence, motion } from "motion/react";
import DottedLine from "../_graphics/dotted_line";
import LeftHalfCricle from "../_graphics/left_half_cricle";
import RightHalfCircle from "../_graphics/right_half_circle";
import { useFeedbackStore } from "../_utils/feedback_store";

export default function FeedbackForm() {
	const { feedback, setFeedback, setFormState, closePopover } =
		useFeedbackStore();

	const [duration] = useSpeedControl({ value: 0.9 });
	const [submitDuration] = useSpeedControl({ value: 1500 });
	const [closeDuration] = useSpeedControl({ value: 3000 });

	const submit = () => {
		setFormState("submitting");

		setTimeout(() => {
			setFormState("submitted");
		}, submitDuration);

		setTimeout(() => {
			closePopover();
		}, closeDuration);
	};

	return (
		<motion.form
			className="absolute inset-0 rounded-lg border border-black/10 bg-white"
			onSubmit={(e) => {
				e.preventDefault();
				if (!feedback) return;
				submit();
			}}
			exit={{ y: 32, opacity: 0, filter: "blur(6px)" }}
			transition={{ type: "spring", duration, bounce: 0 }}
		>
			<textarea
				value={feedback}
				onChange={(e) => setFeedback(e.target.value)}
				className="h-[128px] w-full resize-none rounded-lg p-4 text-sm outline-none placeholder:opacity-0"
				placeholder="Feedback"
			/>
			<Footer />
		</motion.form>
	);
}

function Footer() {
	return (
		<div className="relative flex h-12 items-center justify-end px-[10px]">
			<DottedLine />
			<LeftHalfCricle />
			<RightHalfCircle />
			<SubmitButton />
		</div>
	);
}

function SubmitButton() {
	const { isPopoverOpen, formState } = useFeedbackStore();
	return (
		<AnimatePresence>
			{isPopoverOpen ? (
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8 }}
					type="submit"
					className="rounded-lg bg-blue-500/75 bg-gradient-to-br from-[#1994ff] to-[#157cff] px-2.5 py-1.5 shadow-md"
				>
					<span className="flex items-center justify-center font-semibold text-white text-xs">
						{formState === "submitting" ? "Submitting..." : "Send feedback"}
					</span>
				</motion.button>
			) : null}
		</AnimatePresence>
	);
}
