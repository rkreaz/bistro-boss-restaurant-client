import { useEffect, useState } from 'react';
import Cover from '../Shard/Cover/Cover';
import ourShopImg from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import Card from '../Home/Card/Card';
import { NavLink, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ourshop.css'

const OurShop = () => {
    const [menu] = useMenu();
    const [listCat, setListCat] = useState([]);
    const [filterMenu, setFilterMenu] = useState([]);
    const { category: menuCat } = useParams();
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(6)


    menu?.map(c => {
        const checkExists = listCat.includes(c.category);
        if (!checkExists) {
            setListCat([...listCat, c.category]);
        }
    })


    useEffect(() => {
        const filterCat = menu.filter(m => m.category === menuCat)
        setFilterMenu(filterCat);
    }, [menu, menuCat])

    const pageNumber = Math.ceil(filterMenu.length / limit);

    // const pageList = new Array(pageNumber).fill(1)
    const pageList = [...Array(pageNumber).keys()]

    const handleLimit = (e) => {
        setLimit(e.target.value)
        setPage(0)
    }
    return (
        <div className='theme'>
            <div  className='max-w-6xl mx-auto theme_text'>
                <Helmet>
                    <title>Bistro Boss | Our Shop</title>
                </Helmet>

                <Cover img={ourShopImg} title={'OUR SHOP'} pra={'WOULD YOU LIKE TO TRY A DISH?'}></Cover>

                <div className='mt-20 pb-16'>

                    <div className='flex justify-center'>
                        {listCat.length ? listCat.map((l, index) => <NavLink key={index} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeCatMenu" : ""
                        } to={`/shop/${l}`}><div onClick={() => setPage(0)} className='mr-5 cursor-pointer' key={index}>{l}</div></NavLink>) : ''}
                    </div>

                    <div className='mt-10 lg:grid grid-cols-3 gap-12 max-sm:p-5'>
                        {filterMenu.length ? filterMenu.slice(limit * page, limit * (page + 1)).map(i => <Card key={i._id} card={i}></Card>) : ''}
                    </div>
                    <div className='mt-10 text-center flex items-center justify-center theme_text'>
                        <div className="join">
                            <button disabled={page === 0 ? true : false} onClick={() => setPage(page - 1)} className="join-item btn">prev</button>
                            {pageList.map((p, index) => <input onClick={() => setPage(index)} key={index} className="join-item btn btn-square" type="radio" name="options" aria-label={index + 1} checked={page === index ? true : ''} />)}
                            <button disabled={pageNumber === page + 1 ? true : false} onClick={() => setPage(page + 1)} className="join-item btn">next</button>
                        </div>
                        <div>
                            <select onChange={handleLimit} defaultValue={limit} className="px-3 py-3 rounded-r-lg">
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                    </div>
                </div>
                <p className='border-t-2 pb-10'></p>
            </div>
        </div>
    );
};

export default OurShop;