export const Form = () => {
  return (
    <div className="Section Form">
      <div className="contact-center">
        <span>CONTACT US</span>
        <span>Don&#39;t Hesitate to</span>
        <span>Contact us for any</span>
        <span>Information</span>

        <p>Call us for immediate support on this number</p>
        <span>+254 712345678</span>
      </div>

      <form className="form-submit">
        <input type="text" placeholder="Your Name*" required />
        <input type="email" placeholder="Email Address*" required />
        <input type="text" placeholder="Phone number" required />
        <input type="text" placeholder="Product Interested" required />
        <textarea name="" id="" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
