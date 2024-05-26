import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otoResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.success(error?.response?.data?.message);
    }
  };

  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09127870560");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onReSendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            otoResponse={otoResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full am:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
