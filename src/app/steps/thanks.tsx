import Image from "next/image";
import ThankYouIcon from "../../assets/icon-thank-you.svg";

const Thanks: React.FC = () => {
  return (
    <div className="md:h-full bg-white shadow rounded-lg px-6 py-16 mx-6 flex items-center justify-center flex-col gap-4 md:mx-16 md:mb-16 md:shadow-none">
      <Image src={ThankYouIcon} alt="Thank you" />
      <h2 className="text-2xl text-marine-blue font-semibold">Thank you!</h2>
      <p className="text-center text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
