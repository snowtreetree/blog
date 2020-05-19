# 文本效果

## text-shadow
文本阴影效果

## word-wrap
文本换行
- normal。正常换行。
- break-all。强制换行，单词也会做拆分

```css
/* 超出三行显示省略号 */
.break {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
```