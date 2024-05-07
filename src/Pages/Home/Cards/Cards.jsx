import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Card from '../Card/Card';

const Cards = () => {
    const [menu] = useMenu([]);
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div className='theme'>
            <div className='max-w-6xl mx-auto'>
                <SectionTitle
                    subHeading={'Should Try'}
                    Heading={'CHEF RECOMMENDS'}
                ></SectionTitle>

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