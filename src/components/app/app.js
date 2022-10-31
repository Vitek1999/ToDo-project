import { Component } from 'react';

import InfoList from '../info-list/info-list';
import Filter from '../filter/filter';
import ClearBtn from '../clear-btn/clear-btn';
import List from '../list/list';
import AddForm from '../add-form/add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {text:"Тестовое задание", checked:false, id: 1},
        {text:"Прекрасный код", checked:true, id: 2},
        {text:"Покрытие тестами", checked:false, id: 3},
      ],
      filter: 'all'
    }
    this.maxId = 4;
  }


  deleteItem = () => {
    this.setState(({data})=> {
      return {
        data: data.filter(item=> item.checked === false)
      }
    })
  }

  addItem = text => {
    const newItem = {
        text, 
        checked: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onToggleCheck = (id) => {
    this.setState (({data}) => ({
      data: data.map(item => {
        if (item.id === id){
          return {...item, checked: !item.checked}
        }
        return item;
      })
    }))
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'active':
        return items.filter(item => !item.checked);

      case 'completed':
        return items.filter(item => item.checked);
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }


  render() {
    const {data, filter} = this.state;
    const done = this.state.data.filter(item => item.checked).length;
    const visibleData = this.filterPost(data, filter);


    return(
      <div className="app">
        <h1>todos</h1>
        <AddForm onAdd={this.addItem}/>
        <List 
          data={visibleData}
          onToggleCheck={this.onToggleCheck}/>
        <div className="footer">
          <InfoList done={done}/>
          <Filter filter={filter} onFilterSelect={this.onFilterSelect}/>
          <ClearBtn deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default App;
