import Image from 'next/image';
import heroLeft from '@/public/assets/desktop/image-hero-left.png';
import heroRight from '@/public/assets/desktop/image-hero-right.png';

const hero = () => {
	return (
		<>
			<section className='flex gap-4 justify-center w-[414px] h-[153px] overflow-x-hidden mb-6'>
				<Image src={heroLeft} width={0} height={0} alt='Meet Logo' />
				<Image src={heroRight} width={0} height={0} alt='Meet Logo' />
			</section>
		</>
	);
};

export default hero;
