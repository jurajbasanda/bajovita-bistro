import React,{Component} from 'react';

class Form extends Component {

    state = { 
        name:'',
        email:'',
        message:'',
     };
     onSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
     }

     change = (e) =>{
        //this.setState({[e.target.name]: e.target.value})
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('lod', () => {

        })
     }
         render() {
        return (
            <form id="contact-form" onChange={e => this.onSubmit(e)} method="POST">
               
    <div className="form-group">
        <label  htmlFor='name' >Meno</label>
        <input type="text" name="name" value={this.state.name} onChange={e => this.change(e)} className="form-control" />
    </div>
    <div className="form-group">
        <label  htmlFor='email' >Emailová adresa</label>
        <input type="email" name="email" value={this.state.email} onChange={e => this.change(e)} className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Správa</label>
        <textarea className="form-control" rows="10" name="message" value={this.state.message} onChange={e => this.change(e)}></textarea>
    </div>
    <button type="submit" name='submit' onClick={e => this.onSubmit(e)}>Kontaktovať</button>
</form>
            
        );
    }
}

export default Form;