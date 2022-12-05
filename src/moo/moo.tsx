import * as React from 'react';

interface Props {
}

interface State {
}

class Moo extends React.Component<Props, State> {
    
    render() {
      return (
        <main>
            <h1>Boilerplate React</h1>
            <div>A boilerplate react app with webpack, sass etc</div>
        </main>
      );
    }
  }

  export default Moo;