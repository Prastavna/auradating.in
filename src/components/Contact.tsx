const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center text-lg">
        <input
          type="email"
          placeholder="email"
          className="border border-foreground px-2 py-3 bg-transparent placeholder:text-foreground placeholder:opacity-80"
        />
        <button
          type="submit"
          className="bg-foreground text-background font-medium p-3 mt-2 w-full"
        >
          Join the waitlist
        </button>
        <div className="text-xxs sm:text-xs sm:mt-2 font-light">
          and get 3 months membership free when we launch 🚀
        </div>
      </form>
    </div>
  )
}

export default Contact