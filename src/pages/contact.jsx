import './contact.css';

function Contact(){

    return(
        <div className='contact'>
            <h1>Contact Us</h1>
            <h4>How can we help?</h4>
            <form className='contact_form'>
                <div>
                    <label>Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Subject:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Contact;