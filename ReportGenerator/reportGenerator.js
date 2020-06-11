new Vue({
    el: '#report',
    data: function () {
        return {
            // 基本信息
            'basicForm': {
                'title': '',
                'testScope': '',
                'webUrl': '',
                'testDate': '',
                'tester': '',
                'auditor': ''
            },
            // 整体评价
            'evaluation': {
                'selected': {
                    'color': '#DB2828',
                    'label': '紧急状态',
                    'value': 0
                },
                'list': [{
                    'color': '#DB2828',
                    'label': '紧急状态',
                    'value': 0
                }, {
                    'color': '#F2711C',
                    'label': '严重状态',
                    'value': 1
                }, {
                    'color': '#FBBD08',
                    'label': '预警状态',
                    'value': 2
                }, {
                    'color': '#B5CC18',
                    'label': '良好状态',
                    'value': 3
                }]
            },
            // 整体安全建议
            'safeRecommandation': '',
            // 添加漏洞按钮
            'loophole': [{
                'title': '空白模版',
                'btnText': '空白模版',
                'url': '',
                'description': '',
                'repairPlan': '',
                'level': 0
            }, {
                'title': 'XSS',
                'btnText': 'XSS',
                'url': 'aaa',
                'description': 'lalala',
                'repairPlan': '2212',
                'level': 1
            }, {
                'title': 'SQL注入',
                'btnText': 'SQL注入',
                'url': 'aaa',
                'description': 'lalala',
                'repairPlan': '2212',
                'level': 0
            }, {
                'title': '任意文件读取',
                'btnText': '任意文件读取',
                'url': 'CCC',
                'description': 'WWWW',
                'repairPlan': '2ww212',
                'level': 0
            }],
            // 漏洞详情
            'loopholeDetails': []
        }
    },
    methods: {
        // 添加漏洞
        addLoophole: function (val) {
            this.loopholeDetails.push(JSON.parse(JSON.stringify(val)));
        },
        // 删除漏洞
        deleteLoophole: function (index) {
            this.loopholeDetails.splice(index, 1);
        },
        // 切换整体评价下拉选，修改图标颜色
        changeEvaluation: function (item) {
            this.evaluation.selectedColor = item.color;
            console.log(item.color);
        },
        // 生成报告
        submit: function () {
            // TODO: 
            alert('生成报告');
        }
    }
})