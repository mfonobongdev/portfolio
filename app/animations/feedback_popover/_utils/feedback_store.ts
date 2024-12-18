import { create } from "zustand";

type FeedbackState = {
	isPopoverOpen: boolean;
	openPopover: () => void;
	closePopover: () => void;
	feedback: string;
	setFeedback: (feedback: string) => void;
	formState: "idle" | "submitting" | "submitted";
	setFormState: (formState: "idle" | "submitting" | "submitted") => void;
};

export const useFeedbackStore = create<FeedbackState>((set) => ({
	isPopoverOpen: false,
	openPopover: () => set({ isPopoverOpen: true }),
	closePopover: () => set({ isPopoverOpen: false }),
	feedback: "",
	setFeedback: (feedback: string) => set({ feedback }),
	formState: "idle",
	setFormState: (formState: "idle" | "submitting" | "submitted") => {
		set({ formState });
	},
}));
