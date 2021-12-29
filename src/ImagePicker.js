import React, {Component} from 'react';

import './App.css';

class ImagePicker extends Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
       
   }

render() {
    return (
        <div className='App'>
            <h3 className='banner-title'>Agora, vamos selecionar os banners da sua empresa...</h3>
           <input className= "button-choose" type="file" onChange={this.fileSelectedHandler}/>
           <button className="button-app" onClick={this.fileUploadHandler}>Enviar</button>
        </div>
    );
}
}

export default ImagePicker;