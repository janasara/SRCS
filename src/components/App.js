// This component handles the App template used on every page.
import React, {PropTypes} from 'react';


class App extends React.Component {
  render() {
    return (
      <div >
        <h3><p className="melement">React and Redux country search application</p></h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired  
};


export default App;
