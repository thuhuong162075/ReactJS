import React, {useState, useEffect} from 'react';
import './assets/css/App.css'
import Header from './components/Header';
import InfoMain from './components/InfoMain';
import Area from './components/Area';
import Country from './components/Country';
import Footer from './components/Footer';
import {api} from './service/api';

function App() {
  const countryList = [ "Bắc Mỹ", "Châu Âu", "Châu Á", "Nam Mỹ", "Châu Phi"]
  const [loading, setLoading] = useState(true)
  const [chart, setChart] = useState([])
  const [area, setArea] = useState([])
  const [nation, setNation] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [keywordSearch, setKeywordSearch] = useState([])
  const [paginator, setPaginator] = useState({
    page: 1,
    limit: 10,
    totalRow: 1
  })
  function Pagination(n, arr) {
    return arr.slice((n-1)*paginator.limit,(n-1)*paginator.limit + paginator.limit)
  }
  const [filters, setFilters] = useState([])
  // useEffect(() => {
  //   fetch("https://gw.vnexpress.net/cr/?name=world_coronavirus")
  //   .then(response => response.json())
  //   .then(result => {
  //     setData(result)
  //     setNation(result.data.data[0].table_country.filter(item => !countryList.includes(item.country)))
  //     setArea(result.data.data[0].table_country.filter(item => countryList.includes(item.country) ))
  //     setFilters((result.data.data[0].table_country.filter(item => !countryList.includes(item.country) )).slice(0,10))
  //     setPaginator({
  //       ...paginator,
  //       totalRow: result.data.data[0].table_country.filter(item => !countryList.includes(item.country)).length
  //     }
  //     )
  //   }, []);
  //   //console.log(getData())
    
  // },[])
  useEffect(()=>{
    const getDataApi3 = async () =>{
        setLoading(true);
        const result = await api.getDataApi()
        setChart(result.data.data[0].chart)
        setNation(result.data.data[0].table_country.filter(item => !countryList.includes(item.country)))
        setArea(result.data.data[0].table_country.filter(item => countryList.includes(item.country) ))
        setFilters((result.data.data[0].table_country.filter(item => !countryList.includes(item.country) )).slice(0,10))
        setPaginator({
          ...paginator,
          totalRow: result.data.data[0].table_country.filter(item => !countryList.includes(item.country)).length
        }
        )
        setLoading(false)
    }
    getDataApi3();

},[]);

  if(!loading) {
    const onHandleSearch = (keyword) => {
      setIsSearch(true)
      setPaginator({
        page: 1,
        limit: 10,
        totalRow: keyword.length
      })
      setFilters(Pagination(1, keyword))
      setKeywordSearch(keyword)
    }
    const onClickReset = () => {
      setPaginator({
        page: 1,
        limit: 10,
        totalRow: nation.length
      })
      setFilters(Pagination(1, nation))
      setIsSearch(false)
    }
    function onPageChange(newPage) {
      setPaginator(
        {
          ...paginator,
          page: newPage
        }
      )
      isSearch ? setFilters(Pagination(newPage, keywordSearch)) : setFilters(Pagination(newPage, nation))
    }
    return (
      <div className="App">
        <Header />
        <InfoMain chart={chart}/>
        <Area area={area}/>
        <Country  totalNation={nation}
                  nation={filters} 
                  onHandleSearch= {onHandleSearch}
                  onClickReset = {onClickReset}
                  paginator={paginator} 
                  onPageChange={onPageChange}/>
        <Footer />
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Header />
        <div className="wrapperLoader">
          <div className="loader"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
