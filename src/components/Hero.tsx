import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
const slides = [
  { image: '/photos/home-1.webp', title: 'BUILDING TRUST', subtitle: 'STRENGTHENING FOUNDATIONS' },
  { image: '/photos/home-2.webp', title: 'LET US DO THE WORK', subtitle: 'GROUND ENGINEERING SOLUTIONS' },
  { image: '/photos/home-3.webp', title: 'STRONG FOUNDATIONS', subtitle: 'BUILT WITH PRECISION AND CARE' }
];
export default function Hero() {
  const [slide,setSlide]=useState(0);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{if(paused||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const timer=window.setInterval(()=>setSlide(s=>(s+1)%slides.length),6500);return()=>window.clearInterval(timer);},[paused]);
  return <section className="hero" aria-label="TerraCore ground engineering">
    {slides.map((s,i)=><img key={s.image} className={'hero-image '+(i===slide?'is-active':'')} src={s.image} alt="" fetchPriority={i===0?'high':'auto'} loading={i===0?'eager':'lazy'}/>)}
    <div className="hero-shade"/>
    <div className="hero-content"><h1>{slides[slide].title}</h1><p>{slides[slide].subtitle}</p></div>
    <div className="slide-controls"><button aria-label="Previous slide" onClick={()=>setSlide((slide+2)%3)}><ArrowLeft size={17}/></button><span>0{slide+1} / 03</span><button aria-label="Next slide" onClick={()=>setSlide((slide+1)%3)}><ArrowRight size={17}/></button><button aria-label={paused?'Play slideshow':'Pause slideshow'} onClick={()=>setPaused(!paused)}>{paused?<Play size={15}/>:<Pause size={15}/>}</button></div>
  </section>;
}
