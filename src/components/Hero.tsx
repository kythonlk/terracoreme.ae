import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [previousSlide, setPreviousSlide] = useState<number | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const slides = [
		{
			image: "/home-1.webp",
			title: "Building Trust\nStrengthening Foundations",
			button: "Know us more",
			link: "/about",
		},
		{
			image: "/home-2.webp",
			title: "Let us do the work for you",
			button: "Consult with us",
			link: "/work-with-us",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setPreviousSlide(currentSlide);
			setIsTransitioning(true);

			setTimeout(() => {
				setCurrentSlide((prev) => (prev + 1) % slides.length);

				setTimeout(() => {
					setIsTransitioning(false);
				}, 100);
			}, 500);
		}, 5000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div className="relative h-screen overflow-hidden">
			<div
				className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
					}`}
				style={{
					backgroundImage: `url(${slides[currentSlide].image})`
				}}
			/>

			{previousSlide !== null && (
				<div
					className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'
						}`}
					style={{
						backgroundImage: `url(${slides[previousSlide].image})`
					}}
				/>
			)}

			<div className="relative h-full flex items-center justify-center">
				<div
					className={`max-w-full w-full p-20 bg-gray-900/30 flex flex-col items-center justify-center text-center rounded-lg transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
						}`}
				>
					<h1 className="text-4xl md:text-5xl mb-6 text-white whitespace-pre-line">
						{slides[currentSlide].title}
					</h1>
					<Link
						to={slides[currentSlide].link}
						className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center"
					>
						{slides[currentSlide].button}
					</Link>
				</div>
			</div>
		</div>
	);
}
