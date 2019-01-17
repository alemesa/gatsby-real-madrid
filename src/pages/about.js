import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../components/layout';
import Info from '../components/info';
import Jerseys from '../components/jerseys';
import './about.scss';

const About = () => (
	<PageTransition>
		<Layout>
			<Info />
			<Jerseys />
		</Layout>
	</PageTransition>
);

export default About;
