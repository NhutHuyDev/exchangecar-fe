import Collapse from "common/Collapse";
import { Link } from "react-router-dom";

function FAQ() {
  const list_faqs = [
    {
      question: "How do I create an account on ExchangeCar?",
      answers: [
        'To create an account, click on the "Sign Up" button on the top right corner of the homepage, fill in the required details, and follow the prompts to complete your registration.',
      ],
    },
    {
      question: "How can I list my car for sale?",
      answers: [
        'After logging into your account, click on the "Sell Your Car" button, provide the necessary information about your car, upload photos, and submit your listing for review.',
      ],
    },
    {
      question: "Is there a fee to list my car on ExchangeCar?",
      answers: [
        'Yes, there is a nominal fee to list your car. The fee varies based on the package you choose. Detailed pricing information can be found on our "Pricing" page.',
      ],
    },
    {
      question: "How can I search for cars on ExchangeCar?",
      answers: [
        "You can use the search bar on the homepage to enter specific keywords or use our advanced search filters to narrow down your options based on make, model, price, location, and more.",
      ],
    },
    {
      question: "What should I do if I forget my password?",
      answers: [
        'Click on the "Forgot Password" link on the login page, enter your registered email address, and follow the instructions to reset your password.',
      ],
    },
    {
      question: "How do I contact a seller?",
      answers: [
        "Once you find a car you're interested in, click on the listing to view the details. You will find the seller's contact information or a \"Contact Seller\" button to send a direct message.",
      ],
    },
    {
      question: "Can I edit my car listing after it has been posted?",
      answers: [
        "Yes, you can edit your listing at any time. Simply go to your account dashboard, select the listing you want to edit, make the necessary changes, and save them.",
      ],
    },
    {
      question: "What payment methods do you accept?",
      answers: [
        "We accept various payment methods, including credit/debit cards, bank transfers, and digital wallets. Detailed payment options are available during the checkout process.",
      ],
    },
    {
      question: "How can I ensure the safety of my transaction?",
      answers: [
        "ExchangeCar prioritizes the safety of all transactions. We recommend using our secure messaging system and following our safety guidelines, which include meeting in safe, public locations and verifying all information before completing a transaction.",
      ],
    },
    {
      question: "How do I delete my account?",
      answers: [
        'If you wish to delete your account, please contact our customer support team through the "Contact Us" page, and they will assist you with the process.',
      ],
    },
  ];

  return (
    <>
      <div className="px-3 py-10 xl:px-20 xl:py-16 mt-24">
        <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="section-title-underline bg-primary-color"></div>
        <div className="mt-10">
          {list_faqs.map((faq) => (
            <Collapse
              key={faq.question}
              title={faq.question}
              className={"block w-full text-base text-start font-semibold py-4"}
              borderBottom={
                "border-b border-b-grey-color-200 border-opacity-70"
              }
            >
              <div className="pb-4 mx-4 font-medium">
                {faq.answers.length === 1
                  ? faq.answers.map((ans) => <p key={ans}>{ans}</p>)
                  : faq.answers.map((ans, index) => (
                      <p key={ans}>
                        {index + 1}. {ans}
                      </p>
                    ))}
              </div>
            </Collapse>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
