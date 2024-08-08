import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-between min-h-screen p-12'>
			<div className='my-auto *:font-medium flex flex-col items-center gap-2'>
				<span className='text-7xl'>ㅇㅇㅇ</span>
				<h2 className='text-3xl'>오늘 운동 완료</h2>
			</div>
			<div className='flex flex-col items-center gap-3 w-full'>
				<Link
					href='/create-account'
					className='text-lg py-2.5 w-4/5 bg-gray-900 text-white font-medium rounded-md text-center hover:bg-gray-700 transition-colors;'
				>
					시작하기
				</Link>
				<div className='flex flex-col gap-2 justify-center items-center'>
					<span>이미 계정이 있나요?</span>
					<Link href='/login' className='hover:underline font-bold'>
						로그인 하러가기 &rarr;
					</Link>
				</div>
			</div>
		</div>
	)
}
