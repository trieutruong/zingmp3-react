import axios from 'axios';

// console.log(process.env);

// file cố định chỉ khi nào sửa baseURL mới vào đây hoặc custom các method
const request = axios.create({
    baseURL: `https://zing-mp3-api.vercel.app/api`,
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options)

    return response.data
}

// custom method post, put, patch...

export default request;

