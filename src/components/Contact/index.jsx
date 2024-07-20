function Contact() {
  return (
    <div
      className="h-72 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/img/contact.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <p className="text-[white] text-3xl font-bold mb-4">
          We are always ready to connect with you
        </p>
        <button className="px-4 py-2 font-bold text-[white] bg-primary-color rounded-lg">Contact Us</button>
      </div>
    </div>
  );
}

export default Contact;
