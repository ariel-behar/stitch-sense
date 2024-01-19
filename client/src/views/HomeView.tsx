import wavyLinesTop from '../assets/img/wavy-lines-top.png'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.png'

import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import Box from '@mui/material/Box'

import AboutSection from "../components/Sections/HomeView/AboutSection"
import HeroSection from "../components/Sections/HomeView/HereSection/HeroSection"
import WhatWeDoSection from "../components/Sections/HomeView/WhatWeDoSection"
import ManufactoringSection from "../components/Sections/HomeView/ManufactoringSection"
import WhyChooseUsSection from "../components/Sections/HomeView/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/HomeView/WhyTrustUsSection"
import OurClientsSection from "../components/Sections/HomeView/OurClientsSection"
import CustomDivider from '../components/CustomDivider'
import NumbersSection from '../components/Sections/HomeView/NumbersSection'
import ContactContent from '../components/Sections/ContactUsView/ContactContent'
import ContactForm from '../components/Sections/ContactUsView/ContactForm'

function HomeView() {
	return (
		<>
			<HeroSection />

			<Box position={"relative"} zIndex={1100}>
				<Header />

				<Box
					sx={{
						background: `url(${wavyLinesBottom})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'bottom left'
					}}
				>
					<Box sx={{
						background: `url(${wavyLinesTop})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'top'
					}}>
						<Container sx={{
							paddingTop: {
								xs: '0',
								md: '30px'
							}
						}}>
							<AboutSection />
						</Container>
					</Box>

					<Container>
						<CustomDivider />

						<WhatWeDoSection />

						<CustomDivider my={{xs: 3, md: 5}} />

						<WhyChooseUsSection />

						<CustomDivider mt={1} mb={{xs: 2, md: 4}} />
					</Container>

					<ManufactoringSection />

					<Container>
						<CustomDivider mt={{xs: 2, md: 5}} mb={{xs: 2, md: 5}} />
						<NumbersSection />
						<CustomDivider mt={{xs: 3, md: 8}} mb={{xs: 5, md: 8}} />
						<WhyTrustUsSection />
						<CustomDivider mt={{xs: 4, md: 5}} mb={{xs: 4, md: 5}} />
					</Container>

					<OurClientsSection />

					<Box mt={{xs: 5, md: 10}} pb={{xs: 2, md: 8}}>
						<Container>
							<ContactContent isDisplayedOnView='home' />
							<ContactForm />
						</Container>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default HomeView