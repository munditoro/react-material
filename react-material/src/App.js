import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              My header
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
        <Posts />
      </div>
    );
  }
}

export default App;
