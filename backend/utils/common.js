/**
 * 将文件夹中的导出项生成一个扁平的数组
 *
 */
const lodash = require("lodash");
function buildFlatArray(maps) {
    const arr = [];
    for (let group in maps) {
        if (Array.isArray(maps[group])) {
            arr.push(...maps[group]);
        } else {
            arr.push(...Object.values(maps[group]));
        }
    }
    return lodash.flatMap(arr);
}

module.exports = { buildFlatArray };
