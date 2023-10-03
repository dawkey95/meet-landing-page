import './globals.css';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';

const redHat = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Meet',
	description: 'Meet by Dawid Keyser',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={redHat.className}>{children}</body>
		</html>
	);
}
