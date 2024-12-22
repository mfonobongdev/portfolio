"use client";

import { useMeasure } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { Drawer } from "vaul";
import { DefaultView, Key, Phrase, RemoveWallet } from "./components";
import { CloseIcon } from "./icons";

export default function FamilyDrawer() {
	const [isOpen, setIsOpen] = useState(false);
	const [view, setView] = useState("default");
	const [elementRef, bounds] = useMeasure();

	const content = useMemo(() => {
		switch (view) {
			case "default":
				return <DefaultView setView={setView} />;
			case "remove":
				return <RemoveWallet setView={setView} />;
			case "phrase":
				return <Phrase setView={setView} />;
			case "key":
				return <Key setView={setView} />;
		}
	}, [view]);

	return (
		<>
			<button
				type="button"
				className="-translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2 h-[44px] rounded-full border border-gray-200 bg-white px-4 py-2 font-medium font-runde text-black transition-colors hover:bg-[#F9F9F8] focus-visible:shadow-focus-ring-button md:font-medium"
				onClick={() => setIsOpen(true)}
			>
				Try it out
			</button>
			<Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
				<Drawer.Portal>
					<Drawer.Overlay
						className="fixed inset-0 z-10 bg-black/30"
						onClick={() => setIsOpen(false)}
					/>
					<Drawer.Title />
					<Drawer.Description />
					<Drawer.Content
						asChild
						className="fixed inset-x-4 bottom-4 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full"
					>
						<motion.div animate={{ height: Number(bounds.height) }}>
							<Drawer.Close asChild>
								<button
									type="button"
									data-vaul-no-drag=""
									className="absolute top-7 right-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
								>
									<CloseIcon />
								</button>
							</Drawer.Close>
							<AnimatePresence initial={false} mode="popLayout" custom={view}>
								<motion.div
									ref={elementRef}
									className="relative h-auto px-6 pt-2.5 pb-6 font-runde antialiased"
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									exit={{ opacity: 0, scale: 0.96 }}
									key={view}
									transition={{
										duration: 0.2,
									}}
								>
									{content}
								</motion.div>
							</AnimatePresence>
						</motion.div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</>
	);
}
