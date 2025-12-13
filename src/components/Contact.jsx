import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      fontFamily: "Syne",
      "& input": {
        fontFamily: "Syne",
        color: "var(--text-primary)",
      },
      "& fieldset": {
        borderColor: "var(--text-secondary)",
      },
      "&:hover fieldset": {
        borderColor: "var(--text-secondary)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--text-primary)",
      },
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Syne",
      color: "var(--text-secondary)",
      "&.Mui-focused": {
        color: "var(--text-secondary)",
      },
    },
  };

  return (
    <>
      <section id="Contact" className="w-full p-2 sm:p-4 mb-40">
        <div className="w-full p-2 mt-16 sm:p-4 flex flex-col justify-center items-center">
          <p className="text-text-secondary uppercase text-sm sm:text-base">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center mt-2 sm:mt-4">
            Ready to Start Your Project?
          </h1>
        </div>

        <div className="w-full p-4 flex justify-center gap-8 ">
          <div className="w-1/3 flex flex-col flex-wrap">
            <div className="bg-card-bg p-16">
              <div className="p-4 text-text-secondary hover:text-text-primary border-b-[1.5px] border-card">
                <div>
                  <CallIcon fontSize="large" />
                </div>
                <h1 className="text-xl text-text-primary font-bold mt-5">
                  Contact Number :
                </h1>
                <a href="tel: +92 302 80 53159" className="text-text-secondary">
                  +92 302 80 53159
                </a>
              </div>

              <div className="w-4/7 p-4 mt-16 text-text-secondary hover:text-text-primary border-b-[1.5px] border-card">
                <div>
                  <MailOutlineIcon fontSize="large" />
                </div>
                <h1 className="text-xl text-text-primary font-bold mt-5">
                  Email Us :
                </h1>
                <a
                  href="mailto:rawahamr11@gmail.com"
                  className="text-text-secondary"
                >
                  rawahamr11@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="w-1/2 border-[1.5px] border-card bg-neo p-8">
            <form action="" className="flex flex-col gap-8 font-syne">
              <div className="w-full flex gap-4">
                <TextField
                  label="Your Name"
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  sx={inputStyle}
                />
                <TextField
                  label="Your Email"
                  type="email"
                  required
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  sx={inputStyle}
                />
              </div>

              <TextField
                label="Your Subject"
                type="text"
                required
                variant="outlined"
                fullWidth
                margin="normal"
                sx={inputStyle}
              />

              <div className="w-full">
                <div className="relative w-full">
                  <textarea
                    id="your-Message"
                    name="your-Message"
                    required
                    placeholder=" "
                    rows={5}
                    className="w-full peer flex rounded-md border border-text-secondary bg-transparent px-3 pt-5 pb-2 text-sm text-text-primary
                 focus:border-text-primary transition-all duration-200 font-syne"
                  ></textarea>

                  <label
                    htmlFor="your-Message"
                    className="absolute left-3 top-0 px-1 text-text-secondary text-sm bg-neo transition-all duration-200
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-text-secondary peer-placeholder-shown:text-base
                 peer-focus:-top-3 peer-focus:text-text-secondary peer-focus:text-[0.8rem]"
                  >
                    Describe Your Project
                  </label>
                </div>
              </div>

              <button className="w-fit mt-6 sm:mt-8 lg:mt-10 p-4 sm:p-5 text-sm font-semibold text-text-primary border-[1px] border-[var(--accent-primary)] bg-[var(--accent-primary)] transition-all duration-[400ms] hover:text-text-primary hover:border-[var(--accent-hover)] hover:bg-transparent flex items-center justify-center gap-2">
                Message <MailOutlineIcon fontSize="small" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
