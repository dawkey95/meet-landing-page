import Image from 'next/image';
import meetLogo from '../public/assets/logo.svg';

const logo = () => {
	return (
		<Image
			className='mt-12 mb-14'
			src={meetLogo}
			width={120}
			height={28}
			alt='Meet Logo'
		/>
	);
};

export default logo;
