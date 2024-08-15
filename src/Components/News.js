import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'science'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
Capt = (string)=>{
  return string.toUpperCase();
}
  constructor(props) {
    super(props);
   
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0

    }
    document.title = `${this.Capt(this.props.category)} - NewsMonkey`;
  }
  async updateNews(){
    this.props.setProgress(10);
    const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(Url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, articles: parsedData.articles,
      loading: false
    })
    this.props.setProgress(100);
     

  }
  async componentDidMount() {
   
  this.updateNews();
  }
  handleNextClick = async () => {
   
    this.setState({page:this.state.page+1})
    this.updateNews();

  }
  handlePrevClick = async () => {
 
    this.setState({page:this.state.page-1})
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({page: this.state.page+1})
    const Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    let data = await fetch(Url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles)
      // loading: false
    })
  };
  render() {

    return (

      <div>
        <h2 className="text-center my-4"  >NewsMonkey - Top  {this.Capt(this.props.category)} Headlines</h2>

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className="row my-3 ">
          {  this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 79) : ""} imageurl={element.urlToImage} newsurl={element.url} author = {element.author} date ={element.publishedAt} source = {element.source.name} />
            </div>

})}
</div>


        </div>
        </InfiniteScroll>

       
      </div>
    )
  }
}

export default News
