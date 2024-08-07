function Contact() {
  return (
    <div
      className="h-[40rem] flex flex-col justify-center"
      style={{
        backgroundImage: "url('/img/contact.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center flex flex-col gap-5 justify-center items-center">
        <p className="text-[white] text-5xl font-bold mb-4 ">
          We are always ready to connect with you
        </p>
        <button className="px-4 py-2 font-bold text-[white] bg-primary-color text-xl rounded-lg">Contact Us</button>
      </div>
    </div>
  );
}

export default Contact;
