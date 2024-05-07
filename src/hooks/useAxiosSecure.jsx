import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-steel.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('Request Stooped By Interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },
        async (error) => {
            const status = error.response.status;
            // console.log('Status Error In The Interceptors', status);
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure;
};

export default useAxiosSecure;