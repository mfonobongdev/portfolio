import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const inter = localFont({
	src: "./fonts/InterVariable.woff2",
	variable: "--font-inter",
});

const interItalic = localFont({
	src: "./fonts/InterVariable-Italic.woff2",
	variable: "--font-inter-italic",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interItalic.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
