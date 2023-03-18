import { useState } from 'react'
import Joi from 'joi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useHistory } from 'react-router-dom'
import passwordComplexity from 'joi-password-complexity'
import TextField from '../../components/Inputs/TextField'
import Select from '../../components/Inputs/Select'
import Radio from '../../components/Inputs/Radio'
import Button from '../../components/Button'
import logo from '../../images/logo-color.png'
import styles from './styles.module.scss'

const months = [
	{ name: 'January', value: '01' },
	{ name: 'February', value: '02' },
	{ name: 'March', value: '03' },
	{ name: 'Apirl', value: '04' },
	{ name: 'May', value: '05' },
	{ name: 'June', value: '06' },
	{ name: 'July', value: '07' },
	{ name: 'Augest', value: '08' },
	{ name: 'September', value: '09' },
	{ name: 'October', value: '10' },
	{ name: 'November', value: '11' },
	{ name: 'December', value: '12' }
]

const genders = ['male', 'female', 'non-binary']

const SignUp = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		name: '',
		month: '',
		year: '',
		date: '',
		gender: ''
	})
	const [errors, setErrors] = useState({})
	const [isFetching, setIsFetching] = useState(false)

	const history = useHistory()

	const handleInputState = (name, value) => {
		setData((data) => ({ ...data, [name]: value }))
	}

	const handleErrorState = (name, value) => {
		value === ''
			? delete errors[name]
			: setErrors(() => ({ ...errors, [name]: value }))
	}

	const schema = {
		email: Joi.string().email({ tlds: false }).required().label('Email'),
		password: passwordComplexity().required().label('Password'),
		name: Joi.string().min(5).max(10).required().label('Name'),
		date: Joi.number().min(1).max(31).required().label('Date'),
		year: Joi.number().min(1900).max(2023).required().label('Date')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (Object.keys(errors).length === 0) {
			try {
				setIsFetching(true)
				const url = process.env.REACT_APP_API_URL + '/users'
				await axios.post(url, data)
				setIsFetching(false)
				toast.success('Account created successfully')
				history.push('/login')
			} catch (error) {
				console.log(error)
				setIsFetching(false)
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status < 500
				) {
					toast.error(error.response.data)
				} else {
					console.log(error)
					toast.error('Something went wrong!')
				}
			}
		} else {
			console.log('please fill out properly')
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={logo} width="150rem" alt="logo" />
			</div>
			<h1 className={styles.heading}>
				Sign up for free to start listening.
			</h1>
			<form onSubmit={handleSubmit} className={styles.form_container}>
				<h2 className={styles.form_heading}>
					Sign up with your email address
				</h2>
				<div className={styles.input_container}>
					<TextField
						label="What's your email?"
						placeholder="Enter your email"
						name="email"
						handleInputState={handleInputState}
						schema={schema.email}
						handleErrorState={handleErrorState}
						value={data.email}
						error={errors.email}
						required={true}
					/>
				</div>
				<div className={styles.input_container}>
					<TextField
						label="Create a password"
						placeholder="Create a password"
						name="password"
						handleInputState={handleInputState}
						schema={schema.password}
						handleErrorState={handleErrorState}
						value={data.password}
						error={errors.password}
						type="password"
						required={true}
					/>
				</div>
				<div className={styles.input_container}>
					<TextField
						label="What should we call you?"
						placeholder="Enter a profile name"
						name="name"
						handleInputState={handleInputState}
						schema={schema.name}
						handleErrorState={handleErrorState}
						value={data.name}
						error={errors.name}
						required={true}
					/>
				</div>
				<div className={styles.date_of_birth_container}>
					<p>What's your date of birth?</p>
					<div className={styles.date_of_birth}>
						<div className={styles.month}>
							<Select
								name="month"
								handleInputState={handleInputState}
								label="Month"
								placeholder="Months"
								options={months}
								value={data.month}
								required={true}
							/>
						</div>
						<div className={styles.date}>
							<TextField
								label="Date"
								placeholder="DD"
								name="date"
								value={data.date}
								handleErrorState={handleErrorState}
								handleInputState={handleInputState}
								schema={schema.date}
								error={errors.date}
								required={true}
							/>
						</div>
						<div className={styles.year}>
							<TextField
								label="Year"
								placeholder="YYYY"
								name="year"
								value={data.year}
								handleInputState={handleInputState}
								handleErrorState={handleErrorState}
								required={true}
								error={errors.year}
								schema={schema.year}
							/>
						</div>
					</div>
				</div>
				<div className={styles.input_container}>
					<Radio
						label="What's your gender?"
						name="gender"
						handleInputState={handleInputState}
						options={genders}
						required={true}
					/>
				</div>
				{/* <div className={styles.checkbox_container}>
					<Checkbox
						required={true}
						label="Share my registration data with Spotify's content providers for marketing purposes."
					/>
				</div>
				<p className={styles.terms_condition}>
					By clicking on sign-up, you agree to Spotify's{" "}
					<a href="/#">Terms and Conditions of Use.</a>
				</p>
				<p className={styles.terms_condition}>
					To learn more about how Spotify collects, uses, shares and protects
					your personal data, please see{" "}
					<a href="/#">Spotify's Privacy Policy.</a>
				</p> */}
				<div className={styles.submit_btn_wrapper}>
					<Button
						label="Sign Up"
						type="submit"
						isFetching={isFetching}
					/>
				</div>
				<p
					className={styles.terms_condition}
					style={{ fontSize: '1.6rem' }}
				>
					Have an account? <Link to="/login"> Log in.</Link>
				</p>
			</form>
		</div>
	)
}

export default SignUp
