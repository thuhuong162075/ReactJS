import React , {useState} from 'react';
import "../assets/css/Country.css"
import imgSearch from '../assets/image/search.svg'
import InputSearch from './InputSearch';
import Nation from './Nation';
import classNames from 'classnames';
import PrevImg from '../assets/image/prev.svg'
import NextImg from '../assets/image/next.svg'

function check(total,distance, page){
  var start, end;
  var first=false, last=false;
  var saw = Math.ceil(distance/2)
  if(page-saw>0){
      first=true;
  }
  if(page+saw<total){
      last=true;
  }
  var d=page-saw;
  var e=page+saw;
  if(d<=1){
      start=1;
      end= total > distance ? distance : total;
      if(d==1) first=false
  }
  else if(e>=total){
      end=total;
      start=total-distance+1;
      if(d==total) first=false
  }else{
      start=page-2;
      end=page+2;
  }
  return {first:first,last:last,start:start,end:end}
  }

function Country(props) {
  const {nation, totalNation, paginator, onPageChange} = props
  const {page, limit, totalRow} = paginator
  const totalPage = Math.ceil(totalRow/limit)
  const [showInput, setShowInput] = useState(false)
  const [keySearch, setKeySearch] = useState('')
  const [keyword, setKeyword] = useState([])
  const showInputSearch = () => setShowInput(!showInput)
  const onSearch = (keySearch, keyword) => {
    setKeySearch(keySearch)
    props.onHandleSearch(keyword)
    setKeyword(keyword)
  }
  const onClickReset = () => {
    props.onClickReset()
    setKeyword('')
    setShowInput(!showInput)
  }
  function handlePageChange(newPage) {
    if(onPageChange) {
      onPageChange(newPage)
    }
  }
  function handlePositionPage(value) {
    if(onPageChange) {
      onPageChange(value)
    }
  }
  const totalPaginator = keyword.length === 0 ? totalPage : Math.ceil(keyword.length/limit)
  // console.log(keySearch)
  const checkPage = check(totalPaginator,5, page)
  const arr = []
  for(let i=checkPage.start; i <= checkPage.end;i++){
    arr.push(i)
  }
  if(checkPage.first) {
    arr.unshift('prev')
    arr.unshift(1)
  }
  if(checkPage.last) {
    arr.push('next')
    arr.push(totalPage)
  }
  const PrevButton = () => {
    return (
      <button 
        disabled={page <=1} 
        className="pg btn-prev" 
        onClick={() => handlePageChange(page-1)}
      >
        Prev
      </button>    
    )
  }
  const NextButton = () => {
    return (
      <button 
        disabled={page >= totalPage}
        className="pg btn-next" 
        onClick={() => handlePageChange(page+1)}
      >
        Next
      </button>  
    )
  }
    
  return (
    <div className="Country">
        <h2 className="title">Covid-19 các quốc gia</h2>
        <div className="detail">
          <table className="table country-covid19">
            <thead>
              <tr>
                <th className="nation">
                  <span>Quốc gia</span>
                  <span className="filter dropdown">
                    <img src={imgSearch} width={20} height={20} onClick={showInputSearch}/> 
                    {showInput ? <InputSearch nation = {totalNation} 
                                              onSearch= {onSearch}
                                              onClickReset = {onClickReset}
                                              /> : null}
                  </span>
                </th>
                <th>Nhiễm</th>
                <th>Mới nhiễm</th>
                <th>Tử vong</th>
                <th>Mới tử vong</th>
                <th>Khỏi bệnh</th>
              </tr>
            </thead>
            <tbody>
              {nation.map((item, index) => (
                <Nation key={index} item={item} keySearch={keySearch}/>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
            <PrevButton />
            {arr.map((item, index) => 
              item === 'prev' ?  
              <div
                disabled={page <=1} 
                className="btn-change prev" 
                onClick={() => {
                  handlePageChange(page-1)
                }}
                key={index}
              >
                <img  src={PrevImg} width={12} height={13}/> 
                <p className="text">...</p>
              </div> : item === 'next' ?  
              <div 
                disabled={page >= totalPage}
                className="btn-change next" 
                onClick={() => handlePageChange(page+1)}
                key={index}
              >
                <img  src={NextImg} width={12} height={13}/> 
                <p className="text">...</p>
              </div> : 
              <button className= {page === item ? classNames('pg', 'active') : 'pg'}
                      key={index}
                      onClick={()=> handlePositionPage(item)}>
                {item}
              </button>
            )}
            
            <NextButton />
            <button className="total">{totalPage} /page</button>
        </div>
    </div>
  );
}

export default Country;
