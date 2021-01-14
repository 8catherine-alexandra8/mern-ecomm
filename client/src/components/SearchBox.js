import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
	const [ keyword, setKeyword ] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (keyword.trim()) {
			history.push(`/search/${keyword}`)
		} else {
			history.push('/')
		}
	}

	return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type='text'
				size='sm'
				name='q'
				onChange={(e) => setKeyword(e.target.value)}
				placeholder='Search Products...'
				className='mr-sm-2 ml-sm-5'
			/>
			<Button
				type='submit'
				variant='outline-info'
				className='p-2 search-btn'
				size='sm'
			>
				Search
			</Button>
		</Form>
	)
}

export default SearchBox
