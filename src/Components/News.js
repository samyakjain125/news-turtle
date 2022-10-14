import React, { Component } from 'react'
import NewsItems from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import '../style.css'


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize : 6,
    category: "general",
    nkey : "General"

     
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    nkey : PropTypes.string,
  }
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading : false,
      page : 1,
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b90f9746b85644f19cf93401081d9431&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:  parsedData.articles, totalResults : parsedData.totalResults, loading:false})
    // console.log("cdm")
  }
  
  
  render() {
    const handlePrevClick = async ()=>{
      console.log("previous")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b90f9746b85644f19cf93401081d9431&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        loading: false,
        page : this.state.page-1,
        articles:  parsedData.articles})
    }
      const handleNextClick = async ()=>{
        console.log("next")
        if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize  ))){


          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b90f9746b85644f19cf93401081d9431&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          this.setState({loading: true})
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({
            loading: false,
            page : this.state.page+1,
            articles:  parsedData.articles})
          }
      }
      // console.log(`page size is ${this.props.pageSize}`)
      // console.log(this.props.key + "Hellwo")
    return (
     
      <div className='my-[2rem] text-[2rem] font-semibold mx-[5%] main-body '>
          <h1 className='text-center my-2'>News Turtle - Top <strong>{this.props.nkey}</strong> Headlines</h1>
        <div className='flex justify-between'>
          <button disabled={this.state.page<=1} type="button" className=" w-[8rem] text-base bg-[#c3e7ff] text-[#001b31] border-blue-500 rounded-2xl px-4 shadow-lg disabled:bg-[#d9d9d9] disabled:shadow-none" onClick={handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize  )} type="button" className="w-[8rem] text-base bg-[#c3e7ff] text-[#001b31] border-blue-500 rounded-2xl px-4 shadow-lg disabled:bg-[#d9d9d9] disabled:shadow-none" onClick={handleNextClick}>Next &rarr;</button>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="newsitems">
          {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
            return(
              <div key={element.url}>
                <NewsItems title ={element.title} desc={element.description} imgUrl ={element.urlToImage} newsName={element.source.name} url= {element.url}/>
              </div>
            )
          })}
        </div>
        <div className='flex justify-between'>
          <button disabled={this.state.page<=1} type="button" className="w-[8rem] text-base bg-[#c3e7ff] text-[#001b31] border-blue-500 rounded-2xl px-4 shadow-lg disabled:bg-[#d9d9d9] disabled:shadow-none p-4" onClick={handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize  )} type="button" className="w-[8rem] text-base bg-[#c3e7ff] text-[#001b31] border-blue-500 rounded-2xl px-4 shadow-lg disabled:bg-[#d9d9d9] disabled:shadow-none p-4" onClick={handleNextClick}>Next &rarr;</button>

        </div>
        
      </div>
    )
  }
}

