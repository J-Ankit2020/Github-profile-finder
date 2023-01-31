import React from 'react'
import {ImLocation} from 'react-icons/im';
import {BiLink} from 'react-icons/bi';
import {FaTwitter, FaRegBuilding}from 'react-icons/fa'
const Card = ({data}) => {
    const {name, login, avatar_url: url, bio, followers, following, public_repos: repos, location, blog,twitter_username, company, created_at} = data;

    const date = new Date(created_at);
     let formattedDate = date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }).replace(",","");
  return (
    <div className='flex flex-col justify-start p-6 w-10/12 md:w-1/2 my-5 mx-auto bg-white dark:bg-[#1F2B47] rounded-xl'>
        <div className="nameContainer flex justify-evenly items-center ">
            <div className="left w-1/5">
            <img src={url} alt="" className='w-full rounded-full'/>
            </div>
            <div className='right'>
            <h1 className='font-semibold text-xl tracking-wide'>{name}</h1>
            <p className='text-blue-500 tracking-wide'>@{login}</p>
            <p className=''>{`Joined ${formattedDate}`}</p>
            </div>
        </div>
        <p className=' my-5 mx-2 text-[#636A7E] font-semibold'>{bio}</p>
        <div className="data flex items-center justify-around 
        dark:bg-[#151C2F] rounded-lg p-6 bg-[#F7F8FE] shadow-sm w-11/12 md:w-1/2 mx-auto
        ">
            <div className="repos  mr-1.5">
                <p>Repos</p>
                <p className='font-bold text-center'>{repos}</p>
            </div>
            <div className="followers mr-1.5">
                <p>Followers</p>
                <p className='font-bold text-center'>{followers}</p>
            </div>
            <div className="following">
                <p>Following</p>
                <p className='font-bold text-center'>{following}</p>
            </div>
        </div>
        <div className="linksContainer md:grid w-11/12 grid-cols-2  mt-3">
        <div className='location flex justify-start items-center '>
            <ImLocation/>
            <p className='ml-3'>{location}</p>
        </div>
         <div className='location flex mt-3 justify-start items-center'>
            <BiLink/>
            <p className='ml-3'>{blog || 'Not available'}</p>
        </div>
         <div className='location flex mt-3 justify-start items-center '>
            <FaTwitter/>
            <p className='ml-3'>{twitter_username || 'Not available'}</p>
        </div>
         <div className='location flex mt-3 justify-start items-center w-11/12'>
            <FaRegBuilding/>
            <p className='ml-3'>{company || 'Not available'}</p>
        </div>
        </div>
    </div>
  )
}

export default Card