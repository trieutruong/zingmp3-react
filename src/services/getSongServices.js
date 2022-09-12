import * as request from '~/utils/request';

export const getSong = async (q) => {
    try {
        const res = await request.get('/song', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};