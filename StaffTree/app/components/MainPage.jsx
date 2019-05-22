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
                    value: "60000",
                    subordinates: [
                        {
                            name: "Фролова Елена Васильевна",
                            position: "Секретарь",
                            value: "35000",
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Васильева Екатерина Петровна",
                    position: "Главный бухгалтер",
                    value: "40000",
                    subordinates: [
                        {
                            name: "Воронова Лидия Глебовна",
                            position: "Бухгалтер",
                            value: "40000",
                            subordinates:[]
                        },
                        {
                            name: "Светов Михаил Платонович",
                            position: "Бухгалтер",
                            value: "40000",
                            subordinates: []
                        }
                    ]
                },
                {
                    name: "Калинина Анна Петровна",
                    position: "Копирайтер",
                    value: "27000",
                    subordinates: []
                }

            ]
        };
        this.applyClick = this.applyClick.bind(this);
        this.func = this.func.bind(this);
        this.addToCache = this.addToCache.bind(this);
    };
    func(items, cacheitem) {
        return items.map((item) => {
            if (item.subordinates && item.subordinates.length) {
                item.subordinates = this.func(item.subordinates, cacheitem);
            }
            if (item.name === cacheitem.name) {
                item.value = cacheitem.value;
                item.subordinates = item.subordinates.concat(cacheitem.subordinates);
                return item;
            }
            else {
                return item;            
            };
        });
        
    };
    applyClick() {
        if (this.state.cacheitems.length) {
            this.setState(state => {
                var DBItems = this.func(state.DBItems, state.cacheitems[0]);
                for (var i = 1; i < state.cacheitems.length; i++) {
                    DBItems = this.func(DBItems, state.cacheitems[i]);
                }
                return {
                    DBItems: DBItems,
                    cacheitems: [],
                };
            });
        }       
    }
    addToCache(item) {
        if (this.state.cacheitems.findIndex(i => i.name === item.name) === -1) {
            const cacheitem = {
                name: item.name,
                position: item.position,
                value: item.value,
                subordinates: []
            };
            this.setState({ cacheitems: this.state.cacheitems.concat(cacheitem) });
        }      
    }
    render() {
        return (
            <div>
                <h1 id="maintitle">{this.state.title}</h1>
                <div id="treedb"><DBTreeView items={this.state.DBItems} addToCache={this.addToCache} /></div>
                <div class="cache">
                    <div class="cachetitle">{this.state.titlecache}</div>
                    <div id="cachetree"><CacheTreeView items={this.state.cacheitems} /></div>
                    <div><button onClick={this.applyClick} class="apply">Применить</button></div>
                </div>
            </div>
        );
    }
}
module.exports = MainPage;