import Logo from '@/components/logo';
import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { url } from 'inspector';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center overflow-x-hidden'>
			<Logo />
			<Hero />

			{/* Call To Action Section */}
			<section className='text-center my-6 mx-6 mb-8 w-[327px]'>
				<h1 className='text-foreground text-[2.5rem] font-black leading-[44px] mb-6'>
					Group Chat
					<br />
					for Everyone
				</h1>
				<p className='text-[1rem] font-medium text-dimmedForeground leading-[26px]'>
					Meet makes it easy to connect with others face-to-face virtually and
					collaborate across any device.
				</p>
			</section>

			{/* Buttons */}
			<div className='flex flex-col gap-4 pb-16'>
				<Button>
					Download <span className='text-[#8FE3F9]'>&nbsp; v1.3</span>
				</Button>

				<Button variant={'secondaryButton'} size={'secondaryButton'}>
					What is this?
				</Button>
			</div>

			{/* Vertical Line with numbered circle */}
			<div className='before:block before:bg-border before:w-[1px] before:h-20 before:mx-auto mb-16'>
				<div className='border border-border rounded-full px-5 py-4'>
					<span className='font-black text-dimmedForeground'>01</span>
				</div>
			</div>

			{/* Image Section */}
			<div className='mx-6 grid grid-cols-2 gap-6 mb-16'>
				<Image
					src='/assets/desktop/image-woman-in-videocall.jpg'
					alt='woman in videocall'
					width={151}
					height={143}
					className='rounded-[8px]'
				/>
				<Image
					src='/assets/desktop/image-women-videochatting.jpg'
					alt='woman in videocall'
					width={151}
					height={143}
					className='rounded-[8px]'
				/>
				<Image
					src='/assets/desktop/image-men-in-meeting.jpg'
					alt='woman in videocall'
					width={151}
					height={143}
					className='rounded-[8px]'
				/>
				<Image
					src='/assets/desktop/image-man-texting.jpg'
					alt='woman in videocall'
					width={151}
					height={143}
					className='rounded-[8px]'
				/>
			</div>

			{/* Text Section */}
			<div className='mx-6 text-center mb-16'>
				<h3 className='uppercase font-black tracking-widest text-[#4D96A9] mb-8'>
					built for modern use
				</h3>
				<h2 className='font-black text-[2rem] leading-8 text-foreground mb-8'>
					Smarter meetings, all in one place
				</h2>
				<p className='font-medium leading-6 text-dimmedForeground'>
					Send messages, share files, show your screen, and record your meetings —
					all in one workspace. Control who can join with
					<br />
					invite-only team access, data encryption, and data export.
				</p>
			</div>

			{/* Bottom Section */}
			<div className='relative bg-bgImage bg-cover mt-24'>
				<div className='flex flex-col items-center text-center w-full h-full bg-[#4D96A9] bg-opacity-90 pt-20 px-6 pb-[72px]'>
					{/* Vertical Line with numbered circle */}
					<div className='before:block before:bg-border before:w-[1px] before:h-20 before:mx-auto mb-16 absolute -top-[105px]'>
						<div className='border border-border rounded-full px-4 py-4 w-14 bg-white'>
							<span className='font-black text-dimmedForeground'>02</span>
						</div>
					</div>
					<h2 className='font-black text-[2rem] text-white leading-8 mb-6'>
						Experience more together
					</h2>
					<p className=' font-medium text-[1.125rem] text-white mb-8'>
						Stay connected with reliable HD meetings and unlimited one-on-one and
						group video sessions.
					</p>
					<Button variant={'secondaryButton'} size={'secondaryButton'}>
						Download <span className='text-[#D9B8FF]'>&nbsp; v1.3</span>
					</Button>
				</div>
			</div>
		</main>
	);
}
