import Header from "@/components/Header/Header";
import HeroSection from "@/components/Pages/Home/Sections/Hero/HeroSection";
import Main from "@/components/Common/Main";

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<HeroSection />

			<Header />

			<Main>
				{children}
			</Main>
		</>
	);
}
