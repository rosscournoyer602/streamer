import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamEdit from '../components/streams/StreamEdit';
import StreamDelete from '../components/streams/StreamDelete';
import StreamShow from '../components/streams/StreamList';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={StreamList}></Route>
      <Route path="/streams/new" component={StreamCreate}></Route>
      <Route path="/streams/edit" component={StreamEdit}></Route>
      <Route path="/streams/delete" component={StreamDelete}></Route>
      <Route path="/streams/show" component={StreamShow}></Route>
    </BrowserRouter>
  );
}

export default App;