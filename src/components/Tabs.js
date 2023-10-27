import React,{useState,useEffect} from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiNoodles,GiHamburger,GiCheckMark,GiSandwich} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import {fetchData} from '../service'


function Tabs(props) {
    const [active,setActive] = useState('Pizza')
    const [tabData,setTabData] = useState('')
    const [tabn, setTabn] = useState("Pizza")
    const [tabLabel,setTabLabel] = useState([
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
    ])

    const handleClick = (name) => {
        setActive(name);
        setTabn(name);
        props.setLoader(false)
    }

    useEffect(()=> {
        fetchData(tabn).then((response)=> {
            setTabData(response);
            console.log(response)
            props.setLoader(false)
        })
    },[tabn])

  return (
    <>
    {/* <div className="container">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
            {tabLabel.map((item)=> (
                <div onClick={()=> (handleClick(item.name),props.setLoader(true))}  className={`tablist ${active === item.name ? 'active':""}`}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='recipe_banner'>
            {tabData !== '' && tabData.recipe &&  <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe?.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=> 
                                (<li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>)
                            )}
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
            </>}
        </div>
    </div> */}

    

    </>
  )
}

export default Tabs