import { Box } from "shared/styles";
import { WrapperVerify } from "./shared/style";
import { H1, Tiny } from "shared/styles/Typography";

const VerifyEmail = () => {
  return (
    <WrapperVerify>
      <Box className="verify__email-container">
        <Box className="verify__image">
          <img
            src="https://www.blogdesire.com/wp-content/uploads/2019/07/blogdesire-1.png"
            alt="Logo"
            width="48"
            style={{
              display: "block",
              width: 48,
              maxWidth: 48,
              minWidth: 48,
            }}
          />
        </Box>
        <Box className="verify__block">
          <Box className="verify__block-title">
            <H1>Confirm Your Email Address</H1>
            <Tiny>You're almost set to start enjoying shopping. Simply click the link below to verify your email address and get started. The link expires in 48 hours.</Tiny>
          </Box>
          <Box className="verify__block-btn">
            <a href="https://mail.google.com/mail/" target="_blank">Verify my email address</a>
          </Box>
        </Box>
      </Box>
    </WrapperVerify>
  );
};

export default VerifyEmail;
