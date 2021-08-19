import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  LoginProps,
  HeaderProps,
  LoginPageProps,
  CardProps,
  CheckerReturnProps,
} from "../Types";
import { useHistory } from "react-router";
import EyesIcon from "../components/EyeIcon";
import axios from "axios";
import { CreateHeader } from "../utils/header";
import Card from "../components/Card";
import Checker from "../utils/Checker";
import CardBtn from "../constant/CardItem";
import ErrorText from "../constant/ErrorItem";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
const LoginPage = (props: LoginPageProps) => {
  const history = useHistory();
  const [PreviewPassword, setPreviewPassword] = useState<boolean>(false);
  const [cardOpen, setCardOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<CheckerReturnProps>(ErrorText);
  const [CardDetails, setCardDetails] = useState<CardProps>(CardBtn);
  let config: HeaderProps = CreateHeader();
  const [user, setUser] = useState<LoginProps>({
    username: "",
    password: "",
  });
  const onChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    let ErrorItem = Checker(user);
    let LocalUser = JSON.parse(localStorage.getItem("user") || "{}");
    let HashPassword = LocalUser ? LocalUser.password : "";
    if (ErrorItem.Error === false) {
      props.register
        ? axios
            .post("/api/register", user, config)
            .then((res) => {
              setLoading(false);
              localStorage.setItem("user", JSON.stringify(res.data));
              history.push("/login");
            })
            .catch((err) => {
              setLoading(false);
              setCardDetails({
                ...CardDetails,
                title: err.response.statusText,
                description: err.response.data.message,
                setClose: () => setCardOpen(false),
              });
              setCardOpen(true);
            })
        : axios
            .post("/api/login", { HashPassword, ...user }, config)
            .then((res) => {
              setLoading(false);
              localStorage.setItem("login", "true");
              history.push("/home");
            })
            .catch((err) => {
              setLoading(false);
              setCardDetails({
                ...CardDetails,
                title: err.response.statusText,
                description: err.response.data.message,
                setClose: () => setCardOpen(false),
              });
              setCardOpen(true);
            });
    } else {
      setLoading(false);
      setErrorType(ErrorItem);
      setInterval(() => {
        setErrorType(ErrorText);
      }, 5000);
    }
  };
  return (
    <>
      <div className="popUp-Bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>{props.register ? "Register" : "Sign In"}</h3>
              </div>
              <div className="card-body">
                <form
                  onSubmit={(data: any) => onSubmit(data)}
                  data-testid="form"
                >
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="username"
                      name="username"
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      placeholder="username"
                      value={user.username}
                    />
                  </div>
                  {ErrorMsg(errorType.UserNameText)}
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                    <input
                      type={PreviewPassword ? "text" : "password"}
                      aria-label="password"
                      className="form-control"
                      name="password"
                      onChange={(e) => onChange(e.target.name, e.target.value)}
                      placeholder="password"
                      value={user.password}
                    />
                    {EyesIcon(PreviewPassword, () =>
                      setPreviewPassword(!PreviewPassword)
                    )}
                  </div>
                  {ErrorMsg(errorType.PasswordText)}
                  {/* <div className="row align-items-center remember">
						<input type="checkbox">Remember Me</input>
					</div>
                */}
                  <div className="form-group d-flex justify-content-center">
                    <input
                      type="submit"
                      value={props.register ? "Register" : "Login"}
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                {props.register ? (
                  <div className="d-flex justify-content-center text-align-center align-items-center links">
                    Have an account?<a href="/login">Log In</a>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center links">
                    Don't have an account?<a href="/register">Sign Up</a>
                  </div>
                )}
                {/* <div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
      {cardOpen && (
        <Card
          title={CardDetails.title}
          description={CardDetails.description}
          setClose={CardDetails.setClose}
        />
      )}
    </>
  );
};

export default LoginPage;
