import * as React from 'react';
import Inputs from './inputs';

interface Props {
}

interface State {
    authorName: string;
    scriptName: string;
    imageUrl: string;
    scriptJson: string;
}

class MetaGenerator extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);

        this.state = {
            authorName: '',
            scriptName: '',
            imageUrl: '',
            scriptJson: ''
        };

        this.setAuthorName = this.setAuthorName.bind(this);
        this.setScriptName = this.setScriptName.bind(this);
        this.setImageUrl = this.setImageUrl.bind(this);
        this.readScriptJson = this.readScriptJson.bind(this);
        this.metaify = this.metaify.bind(this);
    }

    setAuthorName(e:React.FormEvent<HTMLInputElement>) {
        this.setState({
            authorName: e.currentTarget.value,
        });
    }

    setScriptName(e:React.FormEvent<HTMLInputElement>) {
        this.setState({
            scriptName: e.currentTarget.value,
        });
    }

    setImageUrl(e:React.FormEvent<HTMLInputElement>) {
        this.setState({
            imageUrl: e.currentTarget.value,
        });
    }

    readScriptJson(e:React.FormEvent<HTMLInputElement>) {
        var files = e.currentTarget.files;
        if (files.length != 1) {
            alert("Please upload exactly one JSON file");
            return false;
        }

        var fileReader = new FileReader();
        fileReader.onload = e => {
            var uploadedFileData = fileReader.result as string;

            if (uploadedFileData.substring(0, 2) !== '[{') {
                alert("File was not in BotC script format");
                return;
            }

            if (uploadedFileData.includes('"id":"_meta"')) {
                alert("Script already contains meta data");
                return;
            }

            this.setState({
                scriptJson: uploadedFileData,
            });
        }

        fileReader.readAsText(files[0]);
    }

    metaify(e:React.FormEvent<HTMLButtonElement>) {
        var metaInformation = '{"id":"_meta","name":"' + this.state.authorName + '","author":"' + this.state.scriptName + '","logo":"' + this.state.imageUrl + '"}';
        alert(this.state.scriptJson.slice(0, 1) + metaInformation + this.state.scriptJson.slice(1));
    }
    
    render() {
        return (
            <main>
                <div className="content">
                    <div className="content--section">
                        <h1>Blood on the Clocktower Meta Generator</h1>
                    </div>
                    <div className="content--section">
                        <div className="text-align-centre">Add script name, author name and logo to make your scripts really <i>pop</i></div>
                    </div>
                    <div className="content--section">
                        <Inputs authorName={this.state.authorName}
                            scriptName={this.state.scriptName}
                            imageUrl={this.state.imageUrl}
                            setAuthorName={this.setAuthorName}
                            setScriptName={this.setScriptName}
                            setImageUrl={this.setImageUrl}
                            readScriptJson={this.readScriptJson}
                            metaify={this.metaify}/>
                    </div>
                </div>
            </main>
            );
        }
    }
    
    export default MetaGenerator;