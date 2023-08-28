import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Input } from "../../atoms";

const options = {
  OptionA: {
    "Telegram Reaction": [
      "4620 - Telegram Mix Positive Reaction",
      "12999 - Telegram Mix positive reaction",
    ],
    "Telegram Subscription": [
      "One Month Telegram Premium subscription",
      "One YearTelegram premium SubScription",
    ],
    "Telegram Bot": [
      " Funny Telegram Ai Premium Bot ",
      "Business Telegram Ai Bot",
    ],
  },
  OptionB: {
    "Facebook Reaction": [
      "4620 - Telegram Mix Positive Reaction",
      "12999 - Telegram Mix positive reaction",
    ],
    "Facebook Subscription": [
      "One Month Telegram Premium subscription",
      "One YearTelegram premium SubScription",
    ],
    "Facebook Bot": [
      " Funny Telegram Ai Premium Bot ",
      "Business Telegram Ai Bot",
    ],
  },
  OptionC: {
    "Instagram Reaction": [
      "4620 - Telegram Mix Positive Reaction",
      "12999 - Telegram Mix positive reaction",
    ],
    "Instagram Subscription": [
      "One Month Telegram Premium subscription",
      "One YearTelegram premium SubScription",
    ],
    "Instagram Bot": [
      " Funny Telegram Ai Premium Bot ",
      "Business Telegram Ai Bot",
    ],
  },
};

export const Form = ({ className }) => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation");
  };

  useEffect(() => {
    setSelectedOption2("");
    setSelectedOption3("");
  }, [selectedOption1]);

  useEffect(() => {
    setSelectedOption3("");
  }, [selectedOption2]);

  const [value, setValue] = useState(2000);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={className}>
      <div>
        <Text type="bigText" className="flex SelItemPadding flexJustify2">
          {" "}
          Select Item
        </Text>
        <form className="formCont" onSubmit={handleSubmit}>
          <label>
            <Text type="colText"> Platform </Text>
            <select
              className="selectSty "
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              <option value="">Select platform</option>

              <option value="OptionA"> Telegram</option>
              <option value="OptionB">Facebook</option>
              <option value="OptionC">Instagram</option>
            </select>
          </label>

          <label>
            <Text type="colText"> Category </Text>
            <select
              className="selectSty"
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
              disabled={!selectedOption1}
            >
              <option value="">Select Category</option>
              {options[selectedOption1] &&
                Object.keys(options[selectedOption1]).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </label>

          <label>
            <Text type="colText"> Service </Text>
            <select
              className="selectSty"
              value={selectedOption3}
              onChange={(e) => setSelectedOption3(e.target.value)}
              disabled={!selectedOption2}
            >
              <option value="">Select Service</option>
              {options[selectedOption1]?.[selectedOption2]?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            {" "}
            <Text type="colText"> Account Link </Text>{" "}
            <Input className=" FormMargin formbackground  " />
          </label>
          <label className="">
            {" "}
            <Text type="colText"> Quantity </Text>
            <div className="flex rangeinputtextbox  flexDirection alignListItems">
              <Input
                className="  rangeinputtext "
                value={value}
                onChange={handleChange}
              />
              <Input
                value={value}
                style={{ backgroundColor: `rgb(val-50, val, val-20)` }}
                onChange={handleChange}
                type="range"
                className={`slider ${value > 50 ? "slider-50" : "slider-0"}`}
                min="0"
                max="3000"
              />
            </div>
          </label>

          <label className="checkbox">
            {" "}
            <Text type="wcolText"> Drip-feed </Text> <input type="checkbox" />
            <span className="checkmark"></span>{" "}
          </label>

          <div className="flex  flexjustify ">
            {" "}
            <label className="flexinput">
              {" "}
              <Text type="colText"> Runs </Text>{" "}
              <Input className="flex FormMargin formbackground  " />
            </label>
            <label className="flexinput">
              {" "}
              <Text type="colText"> Intervals </Text>{" "}
              <Input className=" FormMargin formbackground  " />
            </label>{" "}
          </div>

          <label>
            {" "}
            <Text type="colText"> Total Quantity </Text>{" "}
            <Input className=" FormMargin formbackground  " />
          </label>
          <button type="submit" className="       btn  ">
            {" "}
            <Text type="blcolText"> Submit Order </Text>
          </button>
        </form>
      </div>
    </div>
  );
};
