import CreateNewPassword from "./component/CreateNewPassword";
import ResetPasswordForm from "./component/ResetPasswordForm";
import VerifyCode from "./component/VerifyCode";

const ResetPasswordPage = () => {
    return (
        <>
            <ResetPasswordForm />
            <VerifyCode />
            <CreateNewPassword />
        </>
    );
}

export default ResetPasswordPage;