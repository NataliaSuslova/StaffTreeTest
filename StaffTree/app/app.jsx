var ReactDOM = require('react-dom');
var React = require('react');
var DBTreeView = require('./components/DBTreeView.jsx');

const title = "Иерархия сотрудников рекламного агенства АВРОРА";
const propitems = [
    {
        name: "Иванов Сергей Михайлович",
        position: "Директор",
        value: "55000",
        subordinates: [
            {
                name: "Петрова Ольга Ивановна",
                position: "Руководитель отдела продаж",
                value: "40000",
                subordinates: [
                    {
                        name: "Соколова Виктория Константиновна",
                        position: "Маркетолог",
                        value: "32000",
                        subordinates: []
                    },
                    {
                        name: "Михайлов Иван Михайлович",
                        position: "Маркетолог",
                        value: "32000",
                        subordinates: []
                    }
                ]
            },
            {
                name: "Смирнов Андрей Александрович",
                position: "Руководитель отдела копирайтинга",
                value: "35000",
                subordinates: [
                    {
                        name: "Денисов Виктор Андреевич",
                        position: "Копирайтер",
                        value: "25000",
                        subordinates: []
                    },
                    {
                        name: "Калинина Анна Петровна",
                        position: "Копирайтер",
                        value: "25000",
                        subordinates: []
                    }
                ]
            },
            {
                name: "Веселов Дмитрий Олегович",
                position: "Арт-директор",
                value: "38000",
                subordinates: []
            },
            {
                name: "Васильева Екатерина Петровна",
                position: "Главный бухгалтер",
                value: "35000",
                subordinates: []
            }
        ]
    }
];

ReactDOM.render(title, document.getElementById("maintitle"));
ReactDOM.render(<DBTreeView items={propitems} />, document.getElementById("treedb"));
