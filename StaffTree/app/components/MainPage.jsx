var React = require('react');
var DBTreeView = require('./DBTreeView.jsx');
var CacheTreeView = require('./CacheTreeView.jsx');
var EditValue = require('./EditValue.jsx');
var NewSubordinate = require('./NewSubordinate.jsx');
class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Иерархия сотрудников рекламного агенства АВРОРА",
            titlecache: "Окно редактирования",
            isDisabled: false,
            isEditValue: false,
            isNewSubordinate: false,
            EditItem: {},
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
            cacheitems: []
        };
        this.applyClick = this.applyClick.bind(this);
        this.editItems = this.editItems.bind(this);
        this.addToCache = this.addToCache.bind(this);
        this.showEditValue = this.showEditValue.bind(this);        
        this.showNewSubordinate = this.showNewSubordinate.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
    };
    editItems(items, cacheitem) {
        return items.map((item) => {
            if (item.subordinates && item.subordinates.length) {
                item.subordinates = this.editItems(item.subordinates, cacheitem);
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
                var DBItems = this.editItems(state.DBItems, state.cacheitems[0]);
                for (var i = 1; i < state.cacheitems.length; i++) {
                    DBItems = this.editItems(DBItems, state.cacheitems[i]);
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
    showEditValue(item) {
        this.setState({
            isDisabled: true,
            isEditValue: true,
            EditItem: item
        });
    }
    showNewSubordinate(item) {
        console.log(item.name);
        this.setState({
            isDisabled: true,
            isNewSubordinate: true,
            EditItem: item
        });
    }
    closeEdit() {
        this.setState({
            isEditValue: false,
            isNewSubordinate: false,
            EditItem: {},
            isDisabled: false
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div className="treedb">
                    <DBTreeView
                        items={this.state.DBItems}
                        addToCache={this.addToCache}
                        disabled={this.state.isDisabled} />
                </div>
                <div className="cache">
                    <div className="cachetitle">{this.state.titlecache}</div>
                    {
                        this.state.isEditValue ? (
                            <div>
                                <EditValue
                                    EditItem={this.state.EditItem}
                                    closeEdit={this.closeEdit} />
                            </div>
                        ) : null
                    }
                    {
                        this.state.isNewSubordinate ? (
                            <div>
                                <NewSubordinate
                                    EditItem={this.state.EditItem}
                                    closeEdit={this.closeEdit} />
                            </div>
                        ) : null
                    }
                    <div className="cachetree">
                        <CacheTreeView
                            items={this.state.cacheitems}
                            disabled={this.state.isDisabled}
                            showEditValue={this.showEditValue}
                            showNewSubordinate={this.showNewSubordinate} />
                    </div>
                    <div>
                        <button
                            disabled={this.state.isDisabled}
                            onClick={this.applyClick}
                            className="apply">Применить
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = MainPage;