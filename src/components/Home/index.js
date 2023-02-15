import './index.scss';
import LogoTitle from "../../assets/images/T-letter.png";
import { Link } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray = ['r','i','N','g','u','y','e','n'];
    const jobArray = ['D','e','v','e','l','o','p','e','r',];

    useEffect(() =>{
       setTimeout(() => {
        setLetterClass('text-animate-hover')
       },4000)
    },[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _4`}>i,</span>
                    <br/> 
                    <span className={`${letterClass} _5`}>I</span>
                    <span className={`${letterClass} _6`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={8}/>
                    <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                    </h1>
                         <h2>Backend Developer/ Frontend Developer / Blockchain Developer</h2>
                         <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home

