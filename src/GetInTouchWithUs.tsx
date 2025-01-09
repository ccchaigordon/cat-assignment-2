import { useState} from 'react';
function GetInTouchWithUs() {

    const [formData, setFormData] = useState({
        name: '',
        phoneNum: '',
        email: '',
        message: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Get the input name and value
        setFormData({ ...formData, [name]: value }); // Update state dynamically
      };
    
      // Handle form submission
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page refresh
        console.log('Form Submitted:', formData);
        alert('Thank you for your message, ' + formData.name + '!');
        // Optionally reset the form
        setFormData({ name: '', phoneNum: '', email: '', message: '' });
      };

      

    return (

        <div>
            <div className="Form">
                <h1>Get in <span style={{ color: '#1c42ca'}}>Touch </span>with us</h1>

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    </div>
                    <br />

                    {/* Phone Num */}
                    <div>
                    <input
                        type="text"
                        id="phoneNum"
                        name="phoneNum"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />
                    </div>
                    <br />

                    {/* Email Field */}
                    <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                        required
                    />
                    </div>
                    <br />

                    {/* Message Field */}
                    <div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us your thoughts"
                        rows={5}
                        required
                    />
                    </div>
                    <br />

                    {/* Submit Button */}
                    <button className = 'button2' type="submit">Submit</button>
                </form>
            </div>
        </div>

        



    );
}

export default GetInTouchWithUs;