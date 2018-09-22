import React, { Component } from 'react';
import './AppHeader.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      listItem: [],
      
    };
  }
  type(e) {
    this.setState({
      name: e.target.value
    });
  }
 
  
  addClickNotDone() {
    const { name, listItem } = this.state;
    if (name) {
      this.setState({
        listItem: [...listItem, name],
        name: '',
      })
    }
  }
  
  handleEnterAdd(e) {
    if (e.key === "Enter") {
      this.addClickNotDone();
    }
  }

  
  render() {
    const { name, listItem } = this.state;
    return (
      <div className="container">
        <div className="borderBottomTitle">
          INSERT
        </div>
        <div>
          <input type="text" value={name} onKeyPress={e => this.handleEnterAdd(e) } onChange={e => this.type(e)} />
          <button className="f-right" onClick={() => this.addClickNotDone()}>Insert</button>
        </div>
        <div id="todo" className="minHeight">
          <div className="borderBottom">LIST ITEMS</div>
          {
            listItem.map((item, index) =>
              <div key={index} className="borderBottomList" id={index}>
                <div className="d-inline">
                  {
                    ((index+1)%3 ===0) ?
                      <div style={{ color: 'red', width: '325px' }}>{item}</div> :
                      <div style={{ width: '325px' }}>{item}</div>

                  }
                  
                </div>


              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;