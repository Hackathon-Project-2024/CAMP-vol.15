import type { Metadata } from 'next';
import { Michroma } from 'next/font/google';
import { Header } from './_layout/Header';

const font = Michroma({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stellar',
	description: 'オリジナル音声AI生成サイト',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={font.className}
				style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}
			>
				<Header />

				{children}
			</body>
		</html>
	);
}
