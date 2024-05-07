import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);

    };

    return (
        <div className=''>
            <SectionTitle subHeading={"What's new?"} Heading={'ADD AN ITEM'}
            ></SectionTitle>

            <div className='px-20 mt-16'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Recipe Name*</span>
                            </div>
                            <input type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                        </label>
                    </div>

                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Category*</span>
                            </div>
                            <select defaultValue={'default'} {...register("category", { required: true })} className="select select-bordered w-full bg-[#f3eeee] text-[#000]">
                                <option disabled value={'default'}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="popular">Popular</option>
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Price*</span>
                            </div>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                        </label>

                    </div>

                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Recipe Details*</span>
                            </div>
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-primary bg-[#f3eeee] text-[#000]" placeholder="Recipe Details"></textarea>
                        </label>
                    </div>

                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs bg-[#f3eeee] text-[#000]" />
                    </div>

                    <button className='btn bg-[#8E6526] text-[#fff] text-lg font-semibold'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>

                </form>
            </div>

        </div>
    );
};

export default AddItems;