import React from 'react'
import Logo from '../components/Logo'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
        <Wrapper>
          <nav>
            <Logo/>
          </nav>
          <div className='container page'>
            {/* info */}
            <div className='info'>
              <h1>
                job <span>tracking</span> app
              </h1>
              <p>Welcome to JobQuest Pro, your all-in-one solution for seamless job hunting and career management. Take control of your professional journey with our intuitive platform that simplifies job searches, streamlines interview tracking, and helps you navigate declines. From organizing applications to monitoring interview progress, JobQuest Pro empowers you to stay on top of your job search, allowing you to focus on what matters most – landing your dream job.</p>
              <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
          </div>
        </Wrapper>
  )
}

const Wrapper = styled.main`
    nav{
        width:var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    
    .page{
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }

    h1{
        font-weight: 700;
        span{
            color:var(--primary-500);    
        }
    }

    p{
        color: var(--grey-600)
    }

    .main-img{
        display: none;
    }

    @media (min-width: 992px){
        .page{
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }
`
export default Landing