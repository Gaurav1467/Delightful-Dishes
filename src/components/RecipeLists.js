import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {fetchData} from "../service"
import {CiPizza} from 'react-icons/ci'
import {GiNoodles,GiHamburger,GiSandwich} from 'react-icons/gi'



function RecipeLists(props) {
    const [searchedTearm, setSearchedTearm] = useState('')
    const [query,setQuery] = useState('pizza')
    const [data,setData] = useState('');

    const [active,setActive] = useState('Pizza')
    const tabLabel = [
        {
            name: 'Pizza',
            icon:<CiPizza />
        },
        {
            name: 'Noodles',
            icon:<GiNoodles />
    
        },
        {
            name: 'Burger',
            icon:<GiHamburger />
        },
        {
            name: 'Sandwich',
            icon:<GiSandwich />

            
        },
    ];

    const handleClick = (name) => {
        setActive(name);
        setQuery(name);
        props.setLoader(false)
    }

   const searchrecipe = (searchQuery) => {
    setQuery(searchQuery);
    // console.log(searchQuery)
    props.setLoader(false)
   }

    useEffect(()=>{
        fetchData(query).then((response)=> {
            setData(response)
            // console.log(response)
            props.setLoader(false)
        })
        // eslint-disable-next-line
    },[query])
  return (
    <div className='container'>
         <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
            {tabLabel.map((item)=> (
                <div onClick={()=> (handleClick(item.name),props.setLoader(true))}  className={`tablist ${active === item.name ? 'active':""}`}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input 
                    onChange={(e)=> setSearchedTearm(e.target.value)} 
                    value={searchedTearm} 
                    type="text" 
                    placeholder='Search you recipe' />
                <button onClick={()=> (searchrecipe(searchedTearm) ,props.setLoader(true))}><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
                data && data.hits.map((item,index)=> (
                    <div key={index} className='flexItem' onClick={<popOver/>}>
                        <div className='img-wrapper'>
                            <img src={item.recipe.image} alt={item.recipe.label} />
                        </div>
                        <p>{item.recipe.label}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RecipeLists 

