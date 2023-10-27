import React, { useEffect, useState } from 'react'
import { BsSearch, BsCart } from 'react-icons/bs'
import { fetchData } from "../service"
import { CiPizza } from 'react-icons/ci'
import { GiNoodles, GiHamburger, GiSandwich } from 'react-icons/gi'
import RecipeDescription from './RecipeDescription'



function RecipeLists(props) {
    const [searchedTerm, setSearchedTerm] = useState('')
    const query='Pizza'
    const [data, setData] = useState('');
    const [popOver, setPopOver] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState('')
    const [whishlist, setWhishlist] = useState([])
    const tabLabel= [
        {
            name: 'Pizza',
            icon: <CiPizza />
        },
        {
            name: 'Noodles',
            icon: <GiNoodles />

        },
        {
            name: 'Burger',
            icon: <GiHamburger />
        },
        {
            name: 'Sandwich',
            icon: <GiSandwich />


        }
    ]

    const handleClick = (name) => {
        props.setLoader(true)
        fetchData(name).then((response) => {
            console.log(10)
            if(response.count === 0){
                alert(`No result found for ${name} `)
            }
            else if(response.status==='error'){
                alert(`API crashed `)
            }
            else{
                setData(response);
            }
            props.setLoader(false)
        })
        
    }

    const searchrecipe = (searchQuery) => {
        props.setLoader(true)
        fetchData(searchQuery).then((response) => {
            console.log(10)
            if(response.count === 0){
                alert(`No result found for ${searchQuery} `)
            }
            else if(response.status==='error'){
                alert(`API crashed `)
            }
            else{
                setData(response);
            }
            props.setLoader(false)
        })
       
    }

    const handlePopOver = (ingredients, name) => {
        setPopOver(true);
        setIngredients(ingredients);
        setName(name);
    }

    useEffect(() => {
        const whishlist = JSON.parse(localStorage.getItem('whishlist'));
        if (whishlist) {
            setWhishlist(whishlist);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('whishlist', JSON.stringify(whishlist));
    }, [whishlist])

    useEffect(() => {
        fetchData(query).then((response) => {
            console.log(10)
            if(response.count === 0){
                alert(`No result found for ${query} `)
            }
            else if(response.status==='error'){
                alert(`API crashed `)
            }
            else{
                setData(response);
            }
            props.setLoader(false)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (<>
        <CartIcon cartCount={whishlist.length} whishlist={whishlist} />
        <div className='container'>
            <h1 className='recipeHeading'>What would you like to have!</h1>
            <div className="tabs">
                {tabLabel.map((item) => (
                    <div onClick={() => handleClick(item.name)} className={`tablist `}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='heading-line'>
                <strong>Search Recipes</strong>
                <div className='input-wrapper' >
                    <input
                        onChange={(e) => setSearchedTerm(e.target.value)}
                        value={searchedTerm}
                        type="text"
                        placeholder='Search you recipe' />
                    <button onClick={() => searchrecipe(searchedTerm)}><BsSearch /></button>
                </div>
            </div>
            <div className='flexbox'>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem'  >
                            <div className='img-wrapper' onClick={() => handlePopOver(item.recipe.ingredients, item.recipe.label)} >
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <div className='label'>
                                <p style={{ cursor: 'pointer' }} onClick={() => handlePopOver(item.recipe.ingredients, item.recipe.label)} >{item.recipe.label}</p>
                                <div style={{ cursor: 'pointer' }} onClick={() => setWhishlist([...whishlist, item.recipe.label])} >
                                    <BsCart />
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>
            {popOver && <RecipeDescription name={name} ingredients={ingredients} closePopOver={setPopOver} open={popOver} />}
        </div>
    </>

    )
}

export default RecipeLists

const CartIcon = ({ cartCount, whishlist }) => {
    const [wpop, setWpop] = useState(false)
    return (
        <>
            <div className="cart-icon" onClick={() => setWpop(true)}>
                <div className="cart-indicator">{cartCount}</div>
                <BsCart />
            </div>
            {wpop && <Whishlist whishlist={whishlist} closePopOver={setWpop} open={wpop} />}
        </>
    );
};

function Whishlist({ whishlist, closePopOver, open }) {


    return (
        <div className={`backdrop ${open ? 'open' : ''}`} >
            <div className="card">
                <h1>Whishlist</h1>
                <div className="close-button" onClick={() => closePopOver(false)}>X</div>
                <ul>
                    {whishlist.map((w, index) => (
                        <li key={index}>
                            <h3>{w}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}