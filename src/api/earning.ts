import request from "../utils/request";

// 获取收益信息
export const getEarningInfo = (address: string, minerAddress: string) => request.get('/getEarningInfo', {
    params: {
        address,
        miner_address: minerAddress
    }
})