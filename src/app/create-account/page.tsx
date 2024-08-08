'use client'

import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	const [isLoading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('error')
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value }
		} = event

		if (name === 'name') {
			setName(value)
		} else if (name === 'email') {
			setEmail(value)
		} else if (name === 'password') {
			setPassword(value)
		}
	}

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (isLoading || name === '' || email === '' || password === '') return
		try {
			setLoading(true)
			//계정 만들기
			const credentials = await createUserWithEmailAndPassword(auth, email, password)
			console.log(credentials.user)
			await updateProfile(credentials.user, {
				displayName: name
			})
			//로그인 페이지로 리다이렉트.. 가 안됨 왜지? - 클라이언트 사이드여서 그렇다.
			//TODO: 잠시 route 사용하고 나중에 zustand로 변경
			router.push('/ooo')
		} catch (error) {
			//에러 세팅
		} finally {
			setLoading(false)
		}
		console.log(name, email, password)
	}

	return (
		<div>
			<div>create-account</div>
			<form onSubmit={onSubmit} className='flex flex-col'>
				<input
					name='name'
					type='text'
					value={name}
					onChange={onChange}
					placeholder='Name'
					required
				/>
				<input
					name='email'
					type='email'
					value={email}
					onChange={onChange}
					placeholder='Email'
					required
				/>
				<input
					name='password'
					type='password'
					value={password}
					onChange={onChange}
					placeholder='Password'
					required
				/>
				<input
					name='confirmpassword'
					type='password'
					placeholder='Conprim Password'
					required
				/>
				<input type='submit' value={isLoading ? 'Loading...' : 'Create Account'} />
			</form>
			{error === '' ? null : <div>{error}</div>}
		</div>
	)
}
