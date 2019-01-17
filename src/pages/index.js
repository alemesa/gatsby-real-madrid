import React from 'react';
import Youtube from 'react-youtube';
import Hero from '../components/hero';
import './index.scss';

import Cards from '../components/cards';
import Layout from '../components/layout';
import PageTransition from 'gatsby-plugin-page-transitions';

const opts = {
	playerVars: {
		autoplay: 0
	}
};

class IndexPage extends React.PureComponent {
	render() {
		return (
			<PageTransition>
				<Layout>
					<Hero />
					<Cards quantity={3} />
					<Youtube videoId={'ku6iLrKhebc'} className={'YT-Player'} opts={opts} />
				</Layout>
			</PageTransition>
		);
	}
}

export default IndexPage;
