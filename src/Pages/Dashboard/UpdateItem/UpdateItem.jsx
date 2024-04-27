import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateItem = () => {
   
    const { register, handleSubmit } = useForm();
    const {category, name, price, recipe, _id} = useLoaderData();
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

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Update to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);

    };

    return (
        <div>
            <h1 className='text-center mt-14 text-3xl'>UPDATE ITEM</h1>
            <div>
                <div className='px-20 mt-16'>
                    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl font-bold">Recipe Name*</span>
                                </div>
                                <input defaultValue={name} type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className='flex gap-6'>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl font-bold">Category*</span>
                                </div>
                                <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
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
                                    <span className="label-text text-xl font-bold">Price*</span>
                                </div>
                                <input defaultValue={price} type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                            </label>

                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl font-bold">Recipe Details*</span>
                                </div>
                                <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-primary" placeholder="Recipe Details"></textarea>
                            </label>
                        </div>

                        <div>
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>

                        <div className='text-center'>
                            <button className='btn bg-[#8E6526] text-[#fff] text-lg font-bold'>Update Recipe Details</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateItem;