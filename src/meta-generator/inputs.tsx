import * as React from 'react';

interface Props {
    authorName: string;
    scriptName: string;
    imageUrl: string;
    setAuthorName: Function;
    setScriptName: Function;
    setImageUrl: Function;
    readScriptJson: Function;
    metaify: Function;
}

interface State {
}

class Inputs extends React.Component<Props, State> {
    
    render() {
      return (
        <div className="inputs text-align-centre">
            <div className="inputs--group">
                <label htmlFor="authorName" className="inputs--label">Author name</label>
                <input type="text" id="authorName" onChange={e => this.props.setAuthorName(e)}></input>
            </div>
            <div className="inputs--group">
                <label htmlFor="scriptName" className="inputs--label">Script name</label>
                <input type="text" id="scriptName" onChange={e => this.props.setScriptName(e)}></input>
            </div>
            <div className="inputs--group">
                <label htmlFor="imageUrl" className="inputs--label">Image URL</label>
                <input type="text" id="imageUrl" onChange={e => this.props.setImageUrl(e)}></input>
            </div>
            <div className="inputs--group">
                <label htmlFor="scriptJson" className="inputs--label">Image URL</label>
                <input type="file" id="scriptJson" onChange={e => this.props.readScriptJson(e)}></input>
            </div>
            <div className="inputs--group">
                <button onClick={e => this.props.metaify(e)}>Metaify</button>
            </div>
        </div>
      );
    }
  }

  export default Inputs;