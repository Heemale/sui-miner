export const formatNumberWithCommas = (numberString: any) => {
    // 判断输入是否合法
    if (!numberString || typeof numberString !== 'string') {
        return numberString;
    }

    // 分离整数部分和小数部分
    const [integerPart, decimalPart] = numberString.split('.');

    // 处理整数部分
    let formattedIntegerPart = '';
    if (integerPart) {
        // 将整数部分转换为数组，方便处理
        const integerArray = integerPart.split('');
        // 记录逗号的位置
        let commaIndex = integerArray.length - 3;
        // 从倒数第四位开始往前插入逗号，每三位插入一个逗号
        while (commaIndex > 0) {
            integerArray.splice(commaIndex, 0, ',');
            commaIndex -= 3;
        }
        // 将数组拼接成字符串
        formattedIntegerPart = integerArray.join('');
    }

    // 返回格式化后的结果
    if (decimalPart) {
        return `${formattedIntegerPart}.${decimalPart}`;
    } else {
        return formattedIntegerPart;
    }
}