var React = require('react');
var DBTreeView = require('./DBTreeView.jsx');
var CacheTreeView = require('./CacheTreeView.jsx');
class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Иерархия сотрудников рекламного агенства АВРОРА",
            titlecache: "Окно редактирования",
            DBItems: [
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
            ],
            cacheitems: [
                {
                    name: "Иванов Сергей Михайлович",
                    position: "Директор",
                    value: "55000",
                    subordinates: [
                        {
                            name: "Петрова Ольга Ивановна",
                            position: "Руководитель отдела продаж",
                            value: "40000",
                            subordinates: []
                        }
                    ]
                }

            ]
        }
    };
    render() {
        return (
            <div>
                <h1 id="maintitle">{this.state.title}</h1>
                <div id="treedb"><DBTreeView items={this.state.DBItems} /></div>
                <div class="cache">
                    <div class="cachetitle">{this.state.titlecache}</div>
                    <div id="cachetree"><CacheTreeView items={this.state.cacheitems} /></div>
                    <div><button class="apply">Применить</button></div>
                </div>
            </div>
        );
    }
}
module.exports = MainPage;