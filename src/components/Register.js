import React, {useState} from "react";
import fire from "../config/Fire";
import { authenticate } from "../helpers/auth";
import { useHistory } from "react-router-dom";
import {toast} from "react-toastify";
import {FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";


export default function Login() {

  const history = useHistory();
  const [formData, setForm] = useState({
    email: "",
    password: "",
    textChange: "Register",
  });

  const { email, password, textChange } = formData;

  const handleChange = (text) => (e) => {
    setForm({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setForm({ ...formData, textChange: "Registering..." });
      fire.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          console.log(response);
          authenticate(response, () => {
            setForm({
              ...formData,
              textChange: "Authenticated!",
            });
          });
          history.push("/");
        })
        .catch((err) => {
          setForm({
            ...formData,
            email: "",
            password: "",
            textChange: "Login Again!",
          });
          toast.error(err);
        });
    } else {
      toast.error("Fields are empty.");
    }
  };
  return (
    <>
      <main>
        <section className="mb-auto absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              //backgroundImage:
                //"url(" + require("assets/img/register_bg_2.png").default + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign up with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <FaGithub className="mr-2" />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <FcGoogle classname="mr-2" />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign un with credentials</small>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          onChange={handleChange("email")}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          onChange={handleChange("password")}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          {textChange}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Sign in</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}