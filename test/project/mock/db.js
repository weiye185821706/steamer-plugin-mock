/**
 * steamer-plugin-mock 样例mock文件
 * 
 * 推荐使用faker: https://github.com/marak/Faker.js/
 * 或者Mock: http://mockjs.com/
 * 来生成随机的id、头像、邮箱、电话号码等常用假数据
 */

let getRandomColor = function() {
    return '#' +
    (function(color) {
        let returnColor = (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
        && (color.length === 6) ? color : arguments.callee(color);

        return returnColor;
    })('');
};

module.exports = () => {
    let data = {

        steamer: [
            {
                name: '张三',
                pass: '1234567',
                tel: '13108xxx',
                addrs: '重庆'
            },
            {
                name: '李四',
                pass: '123432567',
                tel: '131028xxx',
                addrs: '山海'
            },
            {
                name: '王五',
                pass: '123224567',
                tel: '13108xxx',
                addrs: '天津'
            },
            {
                name: '赵六',
                pass: '1234567',
                tel: '13108xxx',
                addrs: '北京'
            },
            {
                name: '小明',
                pass: '1234567',
                tel: '13108xxx',
                addrs: '东湾'
            },
            {
                name: '小i红',
                pass: '1234567',
                tel: '13108xxx',
                addrs: '王者峡谷'
            },
            {
                name: '天天',
                pass: '1234567',
                tel: '13108xxx',
                addrs: 'dddd'
            }
        ],
        colors: []
    };

    for (let id = 0; id < 20; id++) {
        data.colors.push({
            id: id,
            color: getRandomColor()
        });
    }
    return data;
};
