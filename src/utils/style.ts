import {styled} from "@mui/material/styles";
import {TableCell, tableCellClasses, TableRow} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#2c2b2b",
        color: theme.palette.common.white,
        borderTop: '2px solid #393939', // 设置表格的底部边框颜色
        borderBottom: '2px solid #393939', // 设置表格的底部边框颜色
        borderLeft: '2px solid #393939', // 设置表格的右侧边框颜色
        borderRight: '2px solid #393939', // 设置表格的右侧边框颜色
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px', // 在小屏幕上将字体大小调整为12像素
            lineHeight: '14px', // 在小屏幕下修改行间距
            overflowWrap: 'break-word', // 文本溢出时换行
            // whiteSpace: 'nowrap', // 防止文本换行
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px', // 在大屏幕上将字体大小调整为20像素
            lineHeight: '14px', // 在小屏幕下修改行间距
            overflowWrap: 'break-word', // 文本溢出时换行
            // whiteSpace: 'nowrap', // 防止文本换行
        },
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor: "#1e1e1e",
        color: theme.palette.common.white,
        fontSize: 10,
        borderTop: '2px solid #393939', // 设置表格的底部边框颜色
        borderBottom: '2px solid #393939', // 设置表格的底部边框颜色
        borderLeft: '2px solid #393939', // 设置表格的右侧边框颜色
        borderRight: '2px solid #393939', // 设置表格的右侧边框颜色
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px', // 在小屏幕上将字体大小调整为12像素
            lineHeight: '14px', // 在小屏幕下修改行间距
            // overflowWrap: 'break-word', // 文本溢出时换行
            whiteSpace: 'nowrap', // 防止文本换行
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '20px', // 在大屏幕上将字体大小调整为20像素
            lineHeight: '14px', // 在小屏幕下修改行间距
            // overflowWrap: 'break-word', // 文本溢出时换行
            whiteSpace: 'nowrap', // 防止文本换行
        },
    },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
        borderTop: '2px solid #393939', // 设置表格的底部边框颜色
        borderBottom: '2px solid #393939', // 设置表格的底部边框颜色
        borderLeft: '2px solid #393939', // 设置表格的右侧边框颜色
        borderRight: '2px solid #393939', // 设置表格的右侧边框颜色
    },
}));