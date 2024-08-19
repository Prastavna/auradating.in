const Features = () => {
  return (
    <div className="uppercase">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <div className="text-2xl font-semibold underline underline-offset-4">
          What's in the store?
        </div>
        <div className="ml-4">
          <ul className="flex flex-col gap-8 list-disc">
            <li><span className="font-semibold">Tailor Fit: </span>AI-powered matches that align perfectly with your unique interests</li>
            <li><span className="font-semibold">Get Smart: </span>Profiles that evolve with your preferences</li>
            <li><span className="font-semibold">Verified Vibes Only: </span>Connect with real, verified profiles — say goodbye to fake connections</li>
            <li><span className="font-semibold">Spot On: </span>Meet matches who share your favorite hangouts — love is just around the corner</li>
            <li><span className="font-semibold">Date Planning: </span>Effortlessly plan dates at places you both adore, making every outing special</li>
            <li><span className="font-semibold">Invite Only: </span>Invite your friends to join</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features