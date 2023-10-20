(() => {
    $(".content").eq(0).show()
    $(".monitor .tabs span").click(() => {
        const index = $(this).index()
        $(this).addClass('active').siblings('span').removeClass('active')
        $(".content").eq(index).show().siblings(".content").hide()
    })

    $(".marquee").each(function () {
        const rows = $(this).children().clone()
        $(this).append(rows)
    })
})();

(() => {
    const pointPie = echarts.init(document.querySelector('.pie'))
    pointPie.setOption({
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '销售统计',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '⼭东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    })
    window.addEventListener('resize', () => {
        pointPie.resize()
    })
})();

(() => {
    const usersBar = echarts.init(document.querySelector('.bar'))
    const item = {
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };
    usersBar.setOption({
        tooltip: {
            trigger: 'item'
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: '#00fffb' // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: '#0061ce' // 100% 处的颜色
                }
            ],
            global: false // 缺省为 false
        },
        grid: {
            top: '3%',
            left: '0',
            right: '3%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: {
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: { show: false, alignWithLabel: false },
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        series: [
            {
                barWidth: "50%",
                data: [
                    2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    item,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240
                ],
                type: 'bar'
            }
        ]
    })
    window.addEventListener('resize', () => {
        usersBar.resize()
    })
})();

(() => {
    var data = [
        { orders: '20,301,987', amount: '99834' },
        { orders: '301,987', amount: '9834' },
        { orders: '1,987', amount: '3834' },
        { orders: '987', amount: '834' }
    ]
    const $h4rders = $(".order h4").eq(0)
    const $h4Amount = $(".order h4").eq(1)
    $h4rders.html(data[0].orders)
    $h4Amount.html(data[0].amount)
    $(".order .filter span").click(function () {
        let index = $(this).index()
        i = index
        render(index)
    })

    function render(index) {
        $(".order .filter span").eq(index).addClass("active").siblings("span").removeClass("active")
        const item = data[index]
        $h4rders.html(item.orders)
        $h4Amount.html(item.amount)
    }

    let timer
    let i = 0
    function autoToggle() {
        timer = setInterval(() => {
            i++;
            if (i > 3) {
                i = 0
            }
            render(i)
        }, 1000)
    }
    autoToggle()
    $(".order").hover(() => {
        clearInterval(timer)
    }, () => {
        autoToggle()
    })
})();

(() => {
    const salesLine = echarts.init(document.querySelector('.line'))
    let option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: '#012f4a',
            containLabel: true
        },
        legend: {
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        color: ['#00f2f1', '#ed3f35'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2099年', '2199年', '2299年', '2399年', '2499年', '2599年', '2699年', '2799年', '2899年', '2999年', '3099年', '3199年'],
            axisTick: {
                show: false // 去除刻度线

            },
            axisLabel: {
                color: '#4c9bfd' // ⽂本颜⾊

            },
            axisLine: {
                show: false // 去除轴线

            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // ⽂字颜⾊
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜⾊

                }
            }
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
            },
            {
                name: 'Union Ads',
                type: 'line',
                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            }
        ]
    };
    salesLine.setOption(option)
    window.addEventListener('resize', () => {
        salesLine.resize()
    })

    var data = [[
        ['2099年', '2199年', '2299年', '2399年', '2499年', '2599年', '2699年', '2799年', '2899年', '2999年', '3099年', '3199年'],
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ], [
        ['1季度', '2季度', '3季度', '4季度'],
        [23, 75, 12, 97],
        [43, 31, 65, 23]
    ], [
        ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ], [
        ['近1周', '近2周', '近3周', '近4周', '近5周', '近6周'],
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]]

    function render(index) {
        $(".caption span").eq(index).addClass("active").siblings("span").removeClass("active")
        const item = data[index]
        option.xAxis.data = item[0]
        option.series[0].data = item[1]
        option.series[1].data = item[2]
        salesLine.setOption(option)
    }

    let i = 0
    let timer
    function autoToggle() {
        timer = setInterval(() => {
            i++;
            if (i > 3) {
                i = 0
            }
            render(i)
        }, 1000)
    }
    autoToggle()

    $(".caption span").click(function () {
        const index = ($(this).index()) - 1
        i = index
        render(index)
    })

    $(".sales").hover(() => {
        clearInterval(timer)
    }, () => {
        autoToggle()
    })
})();

(() => {
    const channelRadar = echarts.init(document.querySelector('.radar'))
    let option = {
        radar: {
            shape: 'circle',
            indicator: [
                { name: '淘宝', max: 100 },
                { name: '京东', max: 100 },
                { name: '苏宁', max: 100 },
                { name: '微商', max: 100 },
                { name: '其他', max: 100 }
            ],
            textStyle: {
                fontSize: 6
            },
            center: ['50%', '50%'],
            radius: '50%',
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            }
        },
        tooltip: {
            show: true,
            position: ['60%', '10%']
        },
        series: [
            {
                name: '北京',
                type: 'radar',
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                // label: {
                //     show: true,
                //     color: '#fff',
                //     fontSize: 10
                // },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)'
                },
                data: [[90, 19, 56, 22, 34]],
            }
        ]
    };
    channelRadar.setOption(option)
    window.addEventListener('resize', () => {
        channelRadar.resize()
    })
})();

(() => {
    const quarterGauge = echarts.init(document.querySelector('.gauge'))
    let option = {
        series: [
            {
                name: '销售进度',
                type: 'pie',
                radius: ['130%', '150%'],
                center: ['48%', '80%'],
                startAngle: 180,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            // 颜⾊渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#00c9e0' },
                                { offset: 1, color: '#005fc1' }
                            ])
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } },
                    { value: 200, itemStyle: { color: 'transparent' } }
                ]
            }
        ]
    };
    quarterGauge.setOption(option)
    window.addEventListener('resize', () => {
        quarterGauge.resize()
    })
})();

(() => {
    // 1. 准备相关数据
    var hotData = [
        {
            city: "北京", // 城市
            sales: "25, 179", // 销售额
            flag: true, //  上升还是下降
            brands: [
                //  品牌种类数据
                { name: "可爱多", num: "9,086", flag: true },
                { name: "娃哈哈", num: "8,341", flag: true },
                { name: "喜之郎", num: "7,407", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "6,724", flag: false },
                { name: "好多鱼", num: "2,170", flag: true }
            ]
        },
        {
            city: "河北",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "3,457", flag: false },
                { name: "娃哈哈", num: "2,124", flag: true },
                { name: "喜之郎", num: "8,907", flag: false },
                { name: "八喜", num: "6,080", flag: true },
                { name: "小洋人", num: "1,724", flag: false },
                { name: "好多鱼", num: "1,170", flag: false }
            ]
        },
        {
            city: "上海",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "2,345", flag: true },
                { name: "娃哈哈", num: "7,109", flag: true },
                { name: "喜之郎", num: "3,701", flag: false },
                { name: "八喜", num: "6,080", flag: false },
                { name: "小洋人", num: "2,724", flag: false },
                { name: "好多鱼", num: "2,998", flag: true }
            ]
        },
        {
            city: "江苏",
            sales: "23,252",
            flag: false,
            brands: [
                { name: "可爱多", num: "2,156", flag: false },
                { name: "娃哈哈", num: "2,456", flag: true },
                { name: "喜之郎", num: "9,737", flag: true },
                { name: "八喜", num: "2,080", flag: true },
                { name: "小洋人", num: "8,724", flag: true },
                { name: "好多鱼", num: "1,770", flag: false }
            ]
        },
        {
            city: "山东",
            sales: "20,760",
            flag: true,
            brands: [
                { name: "可爱多", num: "9,567", flag: true },
                { name: "娃哈哈", num: "2,345", flag: false },
                { name: "喜之郎", num: "9,037", flag: false },
                { name: "八喜", num: "1,080", flag: true },
                { name: "小洋人", num: "4,724", flag: false },
                { name: "好多鱼", num: "9,999", flag: true }
            ]
        }
    ];
    //  2. 根据数据渲染各省热销 sup 模块内容
    // (1) 遍历 hotData对象
    var supHTML = "";
    $.each(hotData, function (index, item) {
        // console.log(item);
        supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
      ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
    });
    // 把生成的5个小li字符串给 sub dom盒子
    $(".sup").html(supHTML);
    // 3. 当鼠标进入 tab 的时候
    // 鼠标经过当前的小li要高亮显示
    $(".province .sup").on("mouseenter", "li", function () {
        index = $(this).index();
        render($(this));
    });

    // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
    // 这个函数需要传递当前元素进去
    function render(currentEle) {
        currentEle
            .addClass("active")
            .siblings()
            .removeClass();

        //  currentEle $(this)
        // 拿到当前城市的品牌对象
        // console.log($(this).index());
        // 可以通过hotData[$(this).index()] 得到当前的城市
        // console.log(hotData[$(this).index()]);
        // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种类
        // console.log(hotData[$(this).index()].brands);
        // 开始遍历品牌数组
        var subHTML = "";
        $.each(hotData[currentEle.index()].brands, function (index, item) {
            // 是对应城市的每一个品牌对象
            // console.log(item);
            subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
      ${item.flag ? "icon-up" : "icon-down"}
      ></s></span></li>`;
        });
        // 把生成的6个小li字符串给 sub dom盒子
        $(".sub").html(subHTML);
    }
    // 4. 默认把第一个小li处于鼠标经过状态
    var lis = $(".province .sup li");
    lis.eq(0).mouseenter();
    // 5 开启定时器
    var index = 0;
    var timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
    }, 2000);

    $(".province .sup").hover(
        // 鼠标经过事件
        function () {
            clearInterval(timer);
        },
        // 鼠标离开事件
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
            }, 2000);
        }
    );
})();

// (() => {
//     var hotData = [
//         {
//             city: "北京", // 城市
//             sales: "25, 179", // 销售额
//             flag: true, //  上升还是下降
//             brands: [
//                 //  品牌种类数据
//                 { name: "可爱多", num: "9,086", flag: true },
//                 { name: "娃哈哈", num: "8,341", flag: true },
//                 { name: "喜之郎", num: "7,407", flag: false },
//                 { name: "八喜", num: "6,080", flag: false },
//                 { name: "小洋人", num: "6,724", flag: false },
//                 { name: "好多鱼", num: "2,170", flag: true }
//             ]
//         },
//         {
//             city: "河北",
//             sales: "23,252",
//             flag: false,
//             brands: [
//                 { name: "可爱多", num: "3,457", flag: false },
//                 { name: "娃哈哈", num: "2,124", flag: true },
//                 { name: "喜之郎", num: "8,907", flag: false },
//                 { name: "八喜", num: "6,080", flag: true },
//                 { name: "小洋人", num: "1,724", flag: false },
//                 { name: "好多鱼", num: "1,170", flag: false }
//             ]
//         },
//         {
//             city: "上海",
//             sales: "20,760",
//             flag: true,
//             brands: [
//                 { name: "可爱多", num: "2,345", flag: true },
//                 { name: "娃哈哈", num: "7,109", flag: true },
//                 { name: "喜之郎", num: "3,701", flag: false },
//                 { name: "八喜", num: "6,080", flag: false },
//                 { name: "小洋人", num: "2,724", flag: false },
//                 { name: "好多鱼", num: "2,998", flag: true }
//             ]
//         },
//         {
//             city: "江苏",
//             sales: "23,252",
//             flag: false,
//             brands: [
//                 { name: "可爱多", num: "2,156", flag: false },
//                 { name: "娃哈哈", num: "2,456", flag: true },
//                 { name: "喜之郎", num: "9,737", flag: true },
//                 { name: "八喜", num: "2,080", flag: true },
//                 { name: "小洋人", num: "8,724", flag: true },
//                 { name: "好多鱼", num: "1,770", flag: false }
//             ]
//         },
//         {
//             city: "山东",
//             sales: "20,760",
//             flag: true,
//             brands: [
//                 { name: "可爱多", num: "9,567", flag: true },
//                 { name: "娃哈哈", num: "2,345", flag: false },
//                 { name: "喜之郎", num: "9,037", flag: false },
//                 { name: "八喜", num: "1,080", flag: true },
//                 { name: "小洋人", num: "4,724", flag: false },
//                 { name: "好多鱼", num: "9,999", flag: true }
//             ]
//         }
//     ];
// })()