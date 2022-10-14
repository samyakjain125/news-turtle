import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, desc, imgUrl,newsName, url} = this.props;
    console.log(newsName)
    return (
      <>
      
    <div className=" bg-white rounded-sm border border-gray-200 shadow-md my-4 mx-2 ">
        <a href={url} target="_blank">
            <img className="rounded-t-sm w-[33rem] object-cover news-img	" src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2022/06/Market-trading-Pexels-770x433.jpg":imgUrl } alt=""/>
        </a>
        <div className="p-5 pt-0">
            <span className="news-name">{newsName}</span>
            <a  href={url} target="_blank">
                <h5 className="mb-1 text-[1.5rem] font-semibold tracking-tight ">{title}</h5>
            </a>
            <p className=" font-normal text-[1rem] text-gray-700">{desc}</p>
            <a href={url} target="_blank" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
</div>

</>
    )
  }
}
