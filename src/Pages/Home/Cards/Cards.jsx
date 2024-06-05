
import useMenu from '../../../hooks/useMenu';
import Card from '../Card/Card';

const Cards = () => {
    const [menu] = useMenu([]);
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className=''>
            <div className='max-w-6xl mx-auto'>
            <h1 className="font-bold text-xl md:px-5 text-[#000000]">Chefs recommendation</h1>

                <div className='mt-10 lg:grid grid-cols-3  gap-8 pb-28 text-[#fff] max-sm:p-5'>
                    {
                        popular.slice(0, 3).map(card => <Card key={card._id} card={card}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;