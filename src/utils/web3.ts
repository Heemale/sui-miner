import BigNumber from "bignumber.js";

export const smallToBig = (from: number | string, wei: number = 9) => {
    const fromBN = new BigNumber(from)
    const x = new BigNumber(10).pow(wei)
    return fromBN.times(x).toFixed()  //toFixed() 转为字符串 可以防止位数过大被转为科学计数法 且可以传入参数保留多少位小数 不传入则保留原位数
}

export const smallToBigFixed0 = (from: number | string, wei: number = 9) => {
    const fromBN = new BigNumber(from)
    const x = new BigNumber(10).pow(wei)
    return fromBN.times(x).toFixed(0)  //toFixed() 转为字符串 可以防止位数过大被转为科学计数法 且可以传入参数保留多少位小数 不传入则保留原位数
}

//是否大于
export const bigGt = (one: number | string, two: number | string) => {
    const x = new BigNumber(one)
    const y = new BigNumber(two)
    return x.gt(y)
}
//是否小于
export const bigLt = (one: number | string, two: number | string) => {
    const x = new BigNumber(one)
    const y = new BigNumber(two)
    return x.lt(y)
}