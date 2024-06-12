import React from 'react'
import './Contact.css'
import emailPc from '../../assets/msg-icon.png'
import emailPc1 from '../../assets/phone-icon.png'
import emailPc2 from '../../assets/mail-icon.png'
import emailPc3 from '../../assets/location-icon.png'
const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    // new you tube
    //Bal#3print("sabona")
    //mararasabo@gmail.com
    //lamessa@gmail.com
    // formData.append("access_key", "fb157278-c020-42dd-bd36-1f503b4fd21b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us message <img src={emailPc} alt="" /></h3>
        <p>Virtual DOM: React uses a concept called the Virtual DOM. The Virtual DOM is an in-memory representation of the actual DOM Document Object Modelthat the browser uses to render the web page. When changes are made to the UI, React updates the Virtual DOM first. Then, it calculates the most efficient way to update the actual DOM based on the changes in the Virtual DOM.</p>
        <ul>
          <li> <img src={emailPc3} alt="" />factmind@gmail.com</li>
          <li> <img src={emailPc1} alt="" />0945671967</li>
          <li> <img src={emailPc2} alt="" />Borana Yabello  Ethiopia</li>

        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label > Enter Your Name</label>
          <input type="text" name='name' placeholder='Enter your name..' required />
          <label >Phone Number</label>
          <input type="tel" name='phone' placeholder='phone' required />
          <label >Write message Here</label>
          <textarea name='message' rows="6" placeholder='message..' required></textarea>
          <button type='submit' className='btn dark-btn'>Sumbit Now →</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact