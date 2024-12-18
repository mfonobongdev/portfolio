import { create } from "zustand";

type SpeedControlState = {
	globalMultiplier: number;
	setGlobalMultiplier: (multiplier: number) => void;
	setNormalSpeed: () => void;
	setSlowSpeed: () => void;
	setVerySlowSpeed: () => void;
	resetGlobalMultiplier: () => void;
};

export const useSpeedControlStore = create<SpeedControlState>((set) => ({
	globalMultiplier: 1,
	setGlobalMultiplier: (multiplier) => set({ globalMultiplier: multiplier }),
	setNormalSpeed: () => set({ globalMultiplier: 1 }),
	setSlowSpeed: () => set({ globalMultiplier: 1.5 }),
	setVerySlowSpeed: () => set({ globalMultiplier: 2 }),
	resetGlobalMultiplier: () => set({ globalMultiplier: 1 }),
}));
