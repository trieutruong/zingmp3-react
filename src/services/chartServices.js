import * as request from '~/utils/request';

export const chart = async (q) => {
    try {
        const res = await request.get('/chart/home', {
            params: {
                q,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

