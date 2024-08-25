import React, { useRef, useState } from "react"

interface SwitchProps {
  onChange?: React.Dispatch<React.SetStateAction<boolean>>
  initialState?: boolean
}

const Switch: React.FC<SwitchProps> = ({ onChange, initialState = false }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange && onChange(!isOn);
  };

  return (
    <div className="flex text-sm font-light self-baseline">
      <span className="pr-2 font-semibold">I am: </span>
      <span>Male</span>
      <div
        onClick={toggleSwitch}
        className="w-8 h-5 flex items-center rounded-full p-1 cursor-pointer bg-foreground mx-1 mb-[2px]"
      >
        <div
          className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isOn ? 'translate-x-3' : ''
          }`}
        ></div>
      </div>
      <span>Female</span>
    </div>
  );
};

const Contact = () => {
  const [isFemale, setIsFemale] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await fetch('https://waitlist.auradating.in/submit', {
        method: 'POST',
        body: JSON.stringify({
          email: e.currentTarget.email.value,
          gender: isFemale ? 'Female' : 'Male'
        })
      })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitted(true)
      formRef.current?.reset()
    }
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col items-center text-lg">
        <Switch
          onChange={setIsFemale}
          initialState={isFemale}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          required
          disabled={submitted}
          className="w-full border border-foreground px-2 py-3 bg-transparent placeholder:text-foreground placeholder:opacity-80"
        />
        <button
          type="submit"
          className="bg-foreground text-background font-medium p-3 mt-2 w-full disabled:cursor-not-allowed disabled:text-opacity-50"
          disabled={submitted}
        >
          {submitted ? 'Thanks! See you soon...' : 'Join the waitlist'}
        </button>
        <div className="text-xxs sm:text-xs sm:mt-2 font-light">
          and get 3 months membership free when we launch 🚀
        </div>
      </form>
    </div>
  )
}

export default Contact