import React, { Component } from "react";
import { Link } from "react-router-dom";
import { KAKAO_LOGIN_API_URL } from "../../config";
import "./Login.scss";

const { Kakao } = window;

class Login extends Component {
  KakaoLoginClickHandler = (props) => {
    Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_LOGIN_API_URL, {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.access_token) {
              localStorage.setItem("Kakao_token", res.access_token);
              alert("Starbugs Coffee Korea에 오신것을 환영합니다!");
              props.history.push("/");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="loginContainer">
          <div className="loginBox">
            <form
              id="formLogin"
              name="login_form"
              action=""
              method="POST"
              autocomplete="on"
            >
              <feildset>
                <strong>로그인</strong>
                <section>
                  <p className="findForm">
                    <span>Welcome! </span>Starbugs 커피 코리아에 오신 것을
                    환영합니다.
                  </p>
                </section>
                <div className="inputBox">
                  <input
                    className="loginId"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                  />
                  <input
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                  <p className="btnLogin">
                    <Link to="#" className="btnLoginText" role="submit">
                      로그인
                    </Link>
                  </p>
                  <p
                    className="btnKakaoLogin"
                    onClick={() => this.KakaoLoginClickHandler(this.props)}
                  >
                    <label>카카오 로그인</label>
                  </p>
                  <p className="warnText">
                    * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이
                    있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.
                    <br />* Starbugs 커피 코리아의 공식 홈페이지는 Internet
                    Explorer 9.0 이상, Chrome, Firefox, Safari 브라우저에 최적화
                    되어있습니다.
                  </p>
                </div>
              </feildset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
