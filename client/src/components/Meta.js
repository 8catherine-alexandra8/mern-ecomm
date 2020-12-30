import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title       : 'Welcome To Shunami',
	description : 'Best source for trendy summer shoes and sandals',
	keywords    : 'fashion, trendy, sandals, heels, shoes, womens'
}

export default Meta
